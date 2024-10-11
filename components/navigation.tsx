"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/users", label: "Users" },
  ];

  return (
    <nav className="bg-gray-900 text-white" aria-label="Main navigation">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">Infiniti</div>
          <ul className="flex space-x-4 items-center text-lg">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? "text-yellow-400 font-bold underline underline-offset-8 decoration-2"
                      : "text-gray-100 hover:text-yellow-200"
                  } transition-colors duration-200`}
                  aria-current={pathname === item.href ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
