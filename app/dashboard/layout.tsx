import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DashboardNav from "@/components/dashboard/DashboardNav";

export const metadata: Metadata = {
    title: "Dashboard",
    robots: { index: false, follow: false },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
            <aside className="md:w-64 md:min-h-screen bg-white border-b md:border-b-0 md:border-r border-slate-200 flex flex-col">
                <div className="p-6 border-b border-slate-100">
                    <Link href="/dashboard" className="flex items-center">
                        <img src="/img/logoitia.png" alt="ITIA Logo" className="h-12 w-auto object-contain" />
                    </Link>
                </div>
                <DashboardNav />
                <div className="hidden md:block mt-auto p-4 border-t border-slate-100">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm text-slate-500 hover:text-primary transition-colors"
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
