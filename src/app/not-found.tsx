import Link from "next/link";
import { recipesData } from "@/data/recipes";

export default function NotFound() {
  const suggestedSlugs = ["vegetable-noodles", "rustic-tomato-galette", "miso-glazed-eggplant"];
  const suggestions = recipesData.filter((r) => suggestedSlugs.includes(r.slug));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <div className="text-xs text-gray-500 mb-6 flex items-center gap-2">
        <Link href="/recipes" className="hover:text-orange-600">Home</Link>
        <span>/</span>
        <span className="text-orange-600 font-medium">Page Not Found</span>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-10 shadow-xs">
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-amber-50 text-amber-900 border border-amber-200 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
            <span>404 Error • Recipe Not Found</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-3">
          Oops! Recipe Not Found 🔍
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mb-8">
          The recipe you are looking for does not exist or may have been moved. Try browsing all available recipes from the catalog below!
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-10">
          <Link
            href="/recipes"
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-medium rounded-md transition-colors shadow-xs"
          >
            <span>📖</span>
            <span>Browse All Recipes</span>
          </Link>

          <Link
            href="/cuisines"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-medium rounded-md transition-colors shadow-xs"
          >
            <span>🍳</span>
            <span>Browse Cuisines</span>
          </Link>
        </div>

        <div className="border-t border-gray-100 pt-8">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
            <span className="font-semibold text-gray-700">
              Popular Recipes You Might Like:
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {suggestions.map((item) => (
              <Link
                key={item.id}
                href={`/recipes/${item.slug}`}
                className="block p-4 border border-stone-200 rounded-lg hover:border-stone-400 transition-all bg-[#FCFAF6] group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-medium px-2 py-0.5 bg-amber-100/70 text-amber-900 rounded">
                    {item.tag}
                  </span>
                  <span className="text-stone-400 group-hover:text-[#C2410C] transition-colors text-xs">
                    →
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-stone-900 mb-1 group-hover:text-[#C2410C] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[11px] text-stone-600 line-clamp-2 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-stone-200/60 flex items-center justify-between text-[10px] text-stone-500">
                  <span>{item.prepTime}</span>
                  <span>{item.servings}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-200 text-stone-500 text-[11px]">
            <div className="flex items-center gap-1.5">
              <span>⛶</span>
              <span className="font-semibold uppercase tracking-wider text-stone-700">Diagnostic Router Trace</span>
            </div>
            <span>HTTP 404 handled gracefully</span>
          </div>

          <div className="space-y-1 text-stone-600 text-[11px] leading-relaxed">
            <p>
              <span className="text-red-500 font-bold">&gt;</span> Route pattern: <span className="text-stone-800">/recipes/[id]</span> (unmatched slug: <code className="bg-stone-200/70 px-1 py-0.2 rounded text-stone-800">&apos;unknown-recipe-slug&apos;</code>)
            </p>
            <p>
              <span className="text-red-500 font-bold">&gt;</span> Next.js status: <code className="text-stone-800 font-bold">notFound()</code> triggered inside <code className="text-stone-800">page.tsx</code>
            </p>
            <p>
              <span className="text-red-500 font-bold">&gt;</span> HTTP 404 handled gracefully
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
