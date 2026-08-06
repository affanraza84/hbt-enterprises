import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const MAINTENANCE_PATH = "/maintenance";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow static assets, Next.js internals, and the maintenance page itself
  if (
    pathname === MAINTENANCE_PATH ||
    pathname.startsWith("/_next") ||
    pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf|otf|css|js|map)$/)
  ) {
    // Forward pathname as header so root layout can detect the maintenance route
    const response = NextResponse.next({
      request: {
        headers: new Headers({
          ...Object.fromEntries(request.headers.entries()),
          "x-pathname": pathname,
        }),
      },
    });
    return response;
  }

  // Redirect ALL other traffic to the maintenance page
  const url = request.nextUrl.clone();
  url.pathname = MAINTENANCE_PATH;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all paths EXCEPT Next.js static/image internals and favicon.
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
