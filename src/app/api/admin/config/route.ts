import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { readConfig, updateConfig, GitHubAPIError } from '@/lib/github-api';
import type { SiteConfig } from '@/types/content';
import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    let config: SiteConfig;
    if (process.env.NODE_ENV === 'development') {
      try {
        const configPath = join(process.cwd(), 'src', 'content', 'site-config.json');
        const fileContent = readFileSync(configPath, 'utf-8');
        config = JSON.parse(fileContent) as SiteConfig;
      } catch {
        config = await readConfig();
      }
    } else {
      config = await readConfig();
    }

    return NextResponse.json(config);
  } catch (error) {
    console.error('Failed to fetch config:', error);
    if (error instanceof GitHubAPIError) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: error.statusCode || 500 }
      );
    }
    return NextResponse.json(
      { success: false, error: 'Failed to fetch configuration' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const config = await request.json() as SiteConfig;
    const commitMessage = `Update site configuration via admin panel\n\nUpdated by: ${user.email || user.name || 'Admin'}`;
    const result = await updateConfig(config, commitMessage);

    if (process.env.NODE_ENV === 'development') {
      try {
        const configPath = join(process.cwd(), 'src', 'content', 'site-config.json');
        writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf-8');
      } catch (localError) {
        console.warn('Failed to update local config file:', localError);
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        sha: result.commit.sha,
        message: result.commit.message,
      },
    });
  } catch (error) {
    console.error('Failed to update config:', error);
    if (error instanceof GitHubAPIError) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: error.statusCode || 500 }
      );
    }
    return NextResponse.json(
      { success: false, error: 'Failed to update configuration' },
      { status: 500 }
    );
  }
}
