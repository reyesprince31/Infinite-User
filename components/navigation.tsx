"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">Infiniti</div>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "text-blue-500" : "hover:text-gray-300"
                }`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/users"
                className={`${
                  pathname === "/users"
                    ? "text-blue-500"
                    : "hover:text-gray-300"
                }`}>
                Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
