import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-auto py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <div>
          © 2025 <strong className="text-gray-700 font-semibold">RecipeBook</strong> • Student Web Dev Project • Built with Next.js &amp; Tailwind CSS
        </div>

        <div className="flex items-center gap-6">
          <Link href="/recipes" className="hover:text-orange-600 transition-colors">
            Recipes
          </Link>
          <Link href="/cuisines" className="hover:text-orange-600 transition-colors">
            Cuisines
          </Link>
          <Link href="/about" className="hover:text-orange-600 transition-colors">
            About Project
          </Link>
          <a
            href="https://github.com/Jilanmansuri/Recipe_ui"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600 transition-colors inline-flex items-center gap-1"
          >
            GitHub Repo ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
