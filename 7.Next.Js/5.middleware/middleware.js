import { NextResponse } from 'next/server';
import { isAuthenticated, getUserRole } from './utils/auth';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Authentication: Protecting /dashboard and /profile
  if (pathname.startsWith('/dashboard') || pathname.startsWith('/profile')) {
    if (!isAuthenticated(request)) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Authorization: Only admin can access /dashboard
  if (pathname.startsWith('/dashboard')) {
    const role = getUserRole(request);
    if (role !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Geo-Location: Redirect users from India to /india-home
  const country = request.geo?.country || 'US';
  if (country === 'IN') {
    return NextResponse.redirect(new URL('/india-home', request.url));
  }

  // URL Rewriting: /old-blog/... to /blog/...
  if (pathname.startsWith('/old-blog')) {
    const newPath = pathname.replace('/old-blog', '/blog');
    return NextResponse.rewrite(new URL(newPath, request.url));
  }

  // Continue to the next middleware or route
  return NextResponse.next();
}

// Apply middleware to these routes
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/old-blog/:path*'
  ]
};
