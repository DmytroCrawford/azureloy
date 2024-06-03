import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers'


export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  
  const isConnected = cookies().get('azureConnected')?.value === 'true'; // Replace with your logic to check if the user is connected to Azure

  // Define paths that do not require redirection
  const excludedPaths = ['/connect', '/api'];

  // Check if the current path is excluded
  const isExcludedPath = excludedPaths.some(path => pathname.startsWith(path));

  if (!isExcludedPath && !isConnected) {
    // Redirect to the connect page if not connected

    return NextResponse.redirect(new URL('/connect', request.url));
  }

  if (pathname === '/connect' && isConnected) {
    // Redirect to the dashboard if already connected
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Allow the request to proceed if it's an excluded path
  return NextResponse.next();
}
