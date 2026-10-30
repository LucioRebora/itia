import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ArrowLeft, LogOut } from "lucide-react";
import DashboardNav from "@/components/dashboard/DashboardNav";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";

export const metadata: Metadata = {
    title: "Dashboard",
    robots: { index: false, follow: false },
};

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE)?.value;
    const session = await verifySessionToken(token);

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
            <aside className="md:w-64 md:min-h-screen bg-white border-b md:border-b-0 md:border-r border-slate-200 flex flex-col">
                <div className="p-6 border-b border-slate-100">
                    <Link href="/dashboard" className="flex items-center">
                        <img src="/img/logoitia.png" alt="ITIA Logo" className="h-12 w-auto object-contain" />
                    </Link>
                </div>
                <DashboardNav />
                <div className="mt-auto p-4 border-t border-slate-100 space-y-3">
                    <div className="px-2 py-1">
                        <p className="text-xs font-medium text-slate-900 truncate">
                            {session.name ?? "Administrador"}
                        </p>
                        <p className="text-xs text-slate-500 truncate">{session.email}</p>
                    </div>
                    <a
                        href="/api/auth/logout"
                        className="flex items-center gap-2 px-2 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                        <LogOut className="w-4 h-4" />
                        Cerrar sesión
                    </a>
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-2 py-1.5 text-sm text-slate-500 hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Volver al sitio
                    </Link>
                </div>
            </aside>
            <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-10">{children}</main>
        </div>
    );
}
