/**
 * GitHub API Integration for site-config.json
 *
 * Reads, updates, and manages version history of the site-config.json file
 * using the GitHub REST API v3.
 */

import type { SiteConfig } from '@/types/content';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER || '';
const GITHUB_REPO = process.env.GITHUB_REPO || '';
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';
const CONFIG_FILE_PATH = 'src/content/site-config.json';

const GITHUB_API_BASE = 'https://api.github.com';

export class GitHubAPIError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public response?: unknown
  ) {
    super(message);
    this.name = 'GitHubAPIError';
  }
}

function validateConfig(): void {
  if (!GITHUB_TOKEN) {
    throw new GitHubAPIError(
      'GITHUB_TOKEN environment variable is not set. Please add it to your .env.local file.'
    );
  }
}

async function githubRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  validateConfig();

  const url = `${GITHUB_API_BASE}${endpoint}`;
  const headers = {
    'Authorization': `Bearer ${GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
    ...options.headers,
  };

  try {
    const response = await fetch(url, { ...options, headers });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      throw new GitHubAPIError(
        `GitHub API error: ${response.statusText}`,
        response.status,
        errorBody
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof GitHubAPIError) throw error;
    throw new GitHubAPIError(
      `Failed to communicate with GitHub API: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
}

interface GitHubFileResponse {
  name: string;
  path: string;
  sha: string;
  size: number;
  content: string;
  encoding: string;
}

interface GitHubCommitResponse {
  content: GitHubFileResponse;
  commit: {
    sha: string;
    html_url: string;
    author: { name: string; email: string; date: string };
    committer: { name: string; email: string; date: string };
    message: string;
  };
}

export interface GitHubCommit {
  sha: string;
  commit: {
    author: { name: string; email: string; date: string };
    message: string;
  };
  html_url: string;
  author: { login: string; avatar_url: string } | null;
}

export async function readConfig(): Promise<SiteConfig> {
  try {
    const endpoint = `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${CONFIG_FILE_PATH}?ref=${GITHUB_BRANCH}`;
    const data = await githubRequest<GitHubFileResponse>(endpoint);
    const content = Buffer.from(data.content, 'base64').toString('utf-8');
    return JSON.parse(content) as SiteConfig;
  } catch (error) {
    if (error instanceof GitHubAPIError) throw error;
    throw new GitHubAPIError(
      `Failed to read config: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
}

async function getFileSha(): Promise<string> {
  const endpoint = `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${CONFIG_FILE_PATH}?ref=${GITHUB_BRANCH}`;
  const data = await githubRequest<GitHubFileResponse>(endpoint);
  return data.sha;
}

function generateCommitMessage(
  oldConfig: SiteConfig | null,
  newConfig: SiteConfig
): string {
  if (!oldConfig) return 'Initial site configuration';

  const changes: string[] = [];

  if (JSON.stringify(oldConfig.homepage) !== JSON.stringify(newConfig.homepage)) {
    changes.push('updated homepage');
  }
  if (JSON.stringify(oldConfig.about) !== JSON.stringify(newConfig.about)) {
    changes.push('updated about section');
  }
  if (JSON.stringify(oldConfig.faq) !== JSON.stringify(newConfig.faq)) {
    changes.push('updated FAQ');
  }
  if (JSON.stringify(oldConfig.contact) !== JSON.stringify(newConfig.contact)) {
    changes.push('updated contact info');
  }
  if (JSON.stringify(oldConfig.footer) !== JSON.stringify(newConfig.footer)) {
    changes.push('updated footer');
  }
  if (JSON.stringify(oldConfig.navigation) !== JSON.stringify(newConfig.navigation)) {
    changes.push('updated navigation');
  }

  const oldTopicCount = oldConfig.helpTopics.length;
  const newTopicCount = newConfig.helpTopics.length;
  if (JSON.stringify(oldConfig.helpTopics) !== JSON.stringify(newConfig.helpTopics)) {
    if (newTopicCount !== oldTopicCount) {
      changes.push(`updated help topics (${newTopicCount} total)`);
    } else {
      changes.push('updated help topic content');
    }
  }

  const oldCityCount = oldConfig.cityPages.length;
  const newCityCount = newConfig.cityPages.length;
  if (JSON.stringify(oldConfig.cityPages) !== JSON.stringify(newConfig.cityPages)) {
    if (newCityCount !== oldCityCount) {
      changes.push(`updated city pages (${newCityCount} total)`);
    } else {
      changes.push('updated city page content');
    }
  }

  if (changes.length > 0) {
    return `Update site config - ${changes.join(', ')}`;
  }

  return 'Update site configuration';
}

export async function updateConfig(
  newConfig: SiteConfig,
  commitMessage?: string
): Promise<GitHubCommitResponse> {
  try {
    const currentSha = await getFileSha();

    let oldConfig: SiteConfig | null = null;
    try {
      oldConfig = await readConfig();
    } catch {
      // If we can't read the old config, that's okay
    }

    const message = commitMessage || generateCommitMessage(oldConfig, newConfig);
    const content = Buffer.from(
      JSON.stringify(newConfig, null, 2) + '\n'
    ).toString('base64');

    const endpoint = `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${CONFIG_FILE_PATH}`;
    return await githubRequest<GitHubCommitResponse>(endpoint, {
      method: 'PUT',
      body: JSON.stringify({
        message,
        content,
        sha: currentSha,
        branch: GITHUB_BRANCH,
      }),
    });
  } catch (error) {
    if (error instanceof GitHubAPIError) throw error;
    throw new GitHubAPIError(
      `Failed to update config: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
}

export async function getFileHistory(limit = 50): Promise<GitHubCommit[]> {
  try {
    const endpoint = `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/commits?path=${CONFIG_FILE_PATH}&per_page=${limit}`;
    return await githubRequest<GitHubCommit[]>(endpoint);
  } catch (error) {
    if (error instanceof GitHubAPIError) throw error;
    throw new GitHubAPIError(
      `Failed to get file history: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
}

async function getConfigAtCommit(sha: string): Promise<SiteConfig> {
  const endpoint = `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${CONFIG_FILE_PATH}?ref=${sha}`;
  const data = await githubRequest<GitHubFileResponse>(endpoint);
  const content = Buffer.from(data.content, 'base64').toString('utf-8');
  return JSON.parse(content) as SiteConfig;
}

export async function revertToVersion(sha: string): Promise<GitHubCommitResponse> {
  try {
    const configAtCommit = await getConfigAtCommit(sha);
    const commitMessage = `Revert site config to version ${sha.substring(0, 7)}`;
    return await updateConfig(configAtCommit, commitMessage);
  } catch (error) {
    if (error instanceof GitHubAPIError) throw error;
    throw new GitHubAPIError(
      `Failed to revert to version ${sha}: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
}
