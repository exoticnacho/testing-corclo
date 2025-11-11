import { type NextRequest, NextResponse } from "next/server"

// Routes that don't require authentication
const publicRoutes = ["/", "/login", "/signup"]

export function middleware(request: NextRequest) {
  // const { pathname } = request.nextUrl // Komentari baris ini

  // PENTING: Untuk sementara biarkan semua request lolos
  return NextResponse.next() 

  // Komentari semua logika proteksi di bawah ini untuk Dev Mode
  /*
  // Allow public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  // Check for auth token (in real app, verify JWT)
  const token = request.cookies.get("authToken")?.value

  // Redirect to login if not authenticated and trying to access protected route
  if (!token && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
  */
}

export const config = {
  // Biarkan config tetap ada
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}