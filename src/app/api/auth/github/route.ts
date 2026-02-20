import { NextRequest, NextResponse } from 'next/server';
import { getGitHubAuthUrl } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const redirectTo = searchParams.get('redirect') || undefined;
    const authUrl = await getGitHubAuthUrl(redirectTo);
    return NextResponse.redirect(authUrl);
  } catch (error) {
    console.error('Error initiating GitHub OAuth:', error);
    return NextResponse.json(
      { error: 'Failed to initiate authentication' },
      { status: 500 }
    );
  }
}
