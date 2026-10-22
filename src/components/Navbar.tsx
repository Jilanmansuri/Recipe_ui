"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/recipes" && (pathname === "/" || pathname?.startsWith("/recipes"))) {
      return true;
    }
    return pathname?.startsWith(path);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-xs sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/recipes" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-orange-500 text-white font-bold flex items-center justify-center rounded-md text-sm shadow-sm group-hover:bg-orange-600 transition-colors">
            RB
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-800 text-lg tracking-tight">
              RecipeBook
            </span>
            <span className="hidden sm:inline-block text-[10px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium border border-orange-200">
              Student Project
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-6 sm:gap-8 text-sm font-medium">
          <Link
            href="/recipes"
            className={`pb-1 transition-colors ${
              isActive("/recipes")
                ? "text-orange-600 border-b-2 border-orange-600 font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Recipes
          </Link>
          <Link
            href="/cuisines"
            className={`pb-1 transition-colors ${
              isActive("/cuisines")
                ? "text-orange-600 border-b-2 border-orange-600 font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Cuisines
          </Link>
          <Link
            href="/about"
            className={`pb-1 transition-colors ${
              isActive("/about")
                ? "text-orange-600 border-b-2 border-orange-600 font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            About
          </Link>
        </nav>

        <div>
          <Link
            href="/create-recipe"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-medium rounded-md transition-colors shadow-sm"
          >
            <span className="font-bold">+</span>
            <span>Add Recipe</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
