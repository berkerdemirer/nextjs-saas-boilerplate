import { SIGN_IN_URL } from '@/src/utils/consts';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const response = await fetch(
    `${request.nextUrl.origin}/api/auth/get-session`,
    {
      headers: {
        cookie: request.headers.get('cookie') || '',
      },
    },
  );

  if (!response.ok) {
    return NextResponse.redirect(new URL(SIGN_IN_URL, request.url));
  }

  const session = await response.json().catch(() => null);

  if (!session) {
    return NextResponse.redirect(new URL(SIGN_IN_URL, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
