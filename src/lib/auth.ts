/**
 * GitHub OAuth Authentication
 *
 * Secure authentication using GitHub OAuth 2.0 for admin access control.
 */

import { cookies } from 'next/headers';

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID!;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET!;
const GITHUB_CALLBACK_URL = process.env.GITHUB_CALLBACK_URL ||
  `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/github/callback`;

const AUTHORIZED_USERS = (process.env.GITHUB_AUTHORIZED_USERS || '')
  .split(',')
  .map(u => u.trim())
  .filter(Boolean);

const SESSION_COOKIE_NAME = 'admin_session';
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days
const STATE_COOKIE_NAME = 'oauth_state';
const STATE_MAX_AGE = 60 * 10; // 10 minutes

export interface GitHubUser {
  id: number;
  login: string;
  name: string | null;
  email: string | null;
  avatar_url: string;
  bio: string | null;
}

export interface Session {
  user: GitHubUser;
  accessToken: string;
  expiresAt: number;
}

function generateState(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

export async function getGitHubAuthUrl(redirectTo?: string): Promise<string> {
  const state = generateState();
  const cookieStore = await cookies();

  cookieStore.set(STATE_COOKIE_NAME, state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: STATE_MAX_AGE,
    path: '/',
  });

  if (redirectTo) {
    cookieStore.set('auth_redirect', redirectTo, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: STATE_MAX_AGE,
      path: '/',
    });
  }

  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    redirect_uri: GITHUB_CALLBACK_URL,
    scope: 'read:user user:email',
    state,
  });

  return `https://github.com/login/oauth/authorize?${params.toString()}`;
}

async function exchangeCodeForToken(code: string): Promise<string> {
  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: GITHUB_CALLBACK_URL,
    }),
  });

  if (!response.ok) throw new Error('Failed to exchange code for token');

  const data = await response.json();
  if (data.error) throw new Error(data.error_description || data.error);

  return data.access_token;
}

async function fetchGitHubUser(accessToken: string): Promise<GitHubUser> {
  const response = await fetch('https://api.github.com/user', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/vnd.github.v3+json',
    },
  });

  if (!response.ok) throw new Error('Failed to fetch user from GitHub');
  return response.json();
}

async function verifyState(state: string): Promise<boolean> {
  const cookieStore = await cookies();
  const storedState = cookieStore.get(STATE_COOKIE_NAME)?.value;
  cookieStore.delete(STATE_COOKIE_NAME);
  return storedState === state;
}

export function isUserAuthorized(username: string): boolean {
  if (AUTHORIZED_USERS.length === 0) {
    console.warn('No authorized users configured. Set GITHUB_AUTHORIZED_USERS.');
    return false;
  }

  return AUTHORIZED_USERS.some(
    user => user.toLowerCase().trim() === username.toLowerCase().trim()
  );
}

export async function handleGitHubCallback(
  code: string,
  state: string
): Promise<{ user: GitHubUser; redirectTo?: string } | null> {
  try {
    if (!(await verifyState(state))) {
      console.error('Invalid OAuth state parameter');
      return null;
    }

    const accessToken = await exchangeCodeForToken(code);
    const user = await fetchGitHubUser(accessToken);

    if (!isUserAuthorized(user.login)) {
      console.warn(`Unauthorized login attempt by ${user.login}`);
      return null;
    }

    const session: Session = {
      user,
      accessToken,
      expiresAt: Date.now() + (SESSION_MAX_AGE * 1000),
    };

    await setSession(session);

    const cookieStore = await cookies();
    const redirectTo = cookieStore.get('auth_redirect')?.value;
    cookieStore.delete('auth_redirect');

    return { user, redirectTo };
  } catch (error) {
    console.error('GitHub OAuth callback error:', error);
    return null;
  }
}

function encryptSession(session: Session): string {
  return Buffer.from(JSON.stringify(session)).toString('base64');
}

function decryptSession(encrypted: string): Session | null {
  try {
    return JSON.parse(Buffer.from(encrypted, 'base64').toString('utf-8'));
  } catch {
    return null;
  }
}

async function setSession(session: Session): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, encryptSession(session), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_MAX_AGE,
    path: '/',
  });
}

export async function getSession(): Promise<Session | null> {
  const cookieStore = await cookies();
  const encrypted = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!encrypted) return null;

  const session = decryptSession(encrypted);
  if (!session) return null;

  if (session.expiresAt < Date.now()) {
    return null;
  }

  return session;
}

export async function clearSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

export async function getCurrentUser(): Promise<GitHubUser | null> {
  const session = await getSession();
  return session?.user || null;
}

export async function isAuthenticated(): Promise<boolean> {
  return (await getSession()) !== null;
}

export function unauthorizedResponse(message = 'Unauthorized'): Response {
  return new Response(JSON.stringify({ error: message }), {
    status: 401,
    headers: { 'Content-Type': 'application/json' },
  });
}
