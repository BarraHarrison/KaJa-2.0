import { Home, Flag, User, Users } from "lucide-react";
import { Link, useLocation } from "wouter";
import clsx from "clsx";

const navItems = [
    { href: "/feed", label: "피드", icon: Home },
    { href: "/challenges", label: "도전", icon: Flag },
    { href: "/groups", label: "그룹", icon: Users },
    { href: "/profile", label: "프로필", icon: User },
];

export default function BottomNavigation() {
    const [location] = useLocation();

    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg flex justify-around py-2">
            {navItems.map(({ href, label, icon: Icon }) => (
                <Link key={href} href={href} className="flex flex-col items-center">
                    <div
                        className={clsx(
                            "flex flex-col items-center text-sm",
                            location === href ? "text-cyan-600" : "text-gray-500"
                        )}
                    >
                        <Icon className="w-6 h-6 mb-1" />
                        {label}
                    </div>
                </Link>
            ))}
        </nav>
    );
}
