"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessagesSquare } from "lucide-react";

const items = [{ name: "Ver charlas", href: "/dashboard/charlas", icon: MessagesSquare }];

const DashboardNav = () => {
    const pathname = usePathname();

    return (
        <nav className="p-4 flex md:flex-col gap-1">
            {items.map(({ name, href, icon: Icon }) => {
                const active = pathname.startsWith(href);
                return (
                    <Link
                        key={href}
                        href={href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            active
                                ? "bg-primary/10 text-primary"
                                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                    >
                        <Icon className="w-4 h-4" />
                        {name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default DashboardNav;
