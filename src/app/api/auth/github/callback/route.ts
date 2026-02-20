import { NextRequest, NextResponse } from 'next/server';
import { handleGitHubCallback } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const state = searchParams.get('state');

  if (!code || !state) {
    return NextResponse.redirect(
      new URL('/?auth_error=invalid_callback', request.url)
    );
  }

  try {
    const result = await handleGitHubCallback(code, state);

    if (!result) {
      return NextResponse.redirect(
        new URL('/?auth_error=unauthorized', request.url)
      );
    }

    const redirectPath = result.redirectTo || '/admin';
    const redirectUrl = new URL(redirectPath, request.url);
    redirectUrl.searchParams.set('auth_success', 'true');

    const response = NextResponse.redirect(redirectUrl);

    const sessionData = JSON.stringify({
      user: result.user,
      expiresAt: Date.now() + (7 * 24 * 60 * 60 * 1000),
    });
    const sessionCookie = Buffer.from(sessionData).toString('base64');

    response.cookies.set('admin_session', sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('GitHub OAuth callback error:', error);
    return NextResponse.redirect(
      new URL('/?auth_error=server_error', request.url)
    );
  }
}
