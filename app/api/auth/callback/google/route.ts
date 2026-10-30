import { NextResponse, type NextRequest } from "next/server";
import {
    createSessionToken,
    getBaseUrl,
    isAllowedEmail,
    OAUTH_STATE_COOKIE,
    SESSION_COOKIE,
} from "@/lib/auth";

interface GoogleTokenResponse {
    access_token?: string;
    id_token?: string;
    error?: string;
}

interface GoogleUserInfo {
    email?: string;
    email_verified?: boolean;
    name?: string;
    picture?: string;
}

export async function GET(req: NextRequest) {
    const baseUrl = getBaseUrl(req);
    const { searchParams } = req.nextUrl;

    const error = searchParams.get("error");
    if (error) {
        return NextResponse.redirect(new URL("/login?error=oauth", baseUrl));
    }

    const code = searchParams.get("code");
    const state = searchParams.get("state");
    const storedState = req.cookies.get(OAUTH_STATE_COOKIE)?.value;

    if (!code || !state || !storedState || state !== storedState) {
        return NextResponse.redirect(new URL("/login?error=oauth", baseUrl));
    }

    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    if (!clientId || !clientSecret) {
        return NextResponse.redirect(new URL("/login?error=config", baseUrl));
    }

    const redirectUri = `${baseUrl}/api/auth/callback/google`;

    try {
        const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                code,
                client_id: clientId,
                client_secret: clientSecret,
                redirect_uri: redirectUri,
                grant_type: "authorization_code",
            }),
        });

        if (!tokenRes.ok) {
            return NextResponse.redirect(new URL("/login?error=oauth", baseUrl));
        }

        const tokenData = (await tokenRes.json()) as GoogleTokenResponse;
        if (!tokenData.access_token) {
            return NextResponse.redirect(new URL("/login?error=oauth", baseUrl));
        }

        const userRes = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
            headers: { Authorization: `Bearer ${tokenData.access_token}` },
        });

        if (!userRes.ok) {
            return NextResponse.redirect(new URL("/login?error=oauth", baseUrl));
        }

        const userInfo = (await userRes.json()) as GoogleUserInfo;

        if (!userInfo.email || !userInfo.email_verified || !isAllowedEmail(userInfo.email)) {
            const unauthorizedRes = NextResponse.redirect(
                new URL("/login?error=unauthorized", baseUrl)
            );
            unauthorizedRes.cookies.delete(OAUTH_STATE_COOKIE);
            unauthorizedRes.cookies.delete(SESSION_COOKIE);
            return unauthorizedRes;
        }

        const sessionToken = await createSessionToken({
            email: userInfo.email,
            name: userInfo.name,
            picture: userInfo.picture,
        });

        const res = NextResponse.redirect(new URL("/dashboard/charlas", baseUrl));
        res.cookies.delete(OAUTH_STATE_COOKIE);
        res.cookies.set(SESSION_COOKIE, sessionToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 7 días
        });

        return res;
    } catch {
        return NextResponse.redirect(new URL("/login?error=oauth", baseUrl));
    }
}

