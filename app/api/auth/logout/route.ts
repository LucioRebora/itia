import { NextResponse, type NextRequest } from "next/server";
import { getBaseUrl, SESSION_COOKIE } from "@/lib/auth";

function handleLogout(req: NextRequest) {
    const baseUrl = getBaseUrl(req);
    const res = NextResponse.redirect(new URL("/login", baseUrl), { status: 303 });
    res.cookies.delete(SESSION_COOKIE);
    return res;
}

export async function POST(req: NextRequest) {
    return handleLogout(req);
}

export async function GET(req: NextRequest) {
    return handleLogout(req);
}

