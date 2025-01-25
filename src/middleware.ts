// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('Middleware running for path:', request.nextUrl.pathname)  // Debug log
  
  const token = request.cookies.get('auth-token')?.value
  console.log('Token found:', !!token)  // Debug log
  
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    console.log('Checking dashboard access')  // Debug log
    if (!token) {
      console.log('No token found, redirecting to login')  // Debug log
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*']
}