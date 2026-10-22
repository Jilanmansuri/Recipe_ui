import Link from "next/link";
import { cuisinesData } from "@/data/cuisines";
import { recipesData } from "@/data/recipes";
import CuisineCard from "@/components/CuisineCard";
import RecipeCard from "@/components/RecipeCard";

export default function CuisinesPage() {
  const featuredRecipes = recipesData.filter((r) =>
    ["vegetable-noodles", "miso-glazed-eggplant", "scallion-pancakes"].includes(r.slug)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center justify-between text-xs text-gray-500 mb-6">
        <div className="flex items-center gap-2">
          <Link href="/recipes" className="hover:text-orange-600">Home</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">World Cuisines</span>
        </div>
        <div className="text-[11px] bg-orange-50 text-orange-700 px-2.5 py-0.5 rounded-full border border-orange-200 font-medium">
          Category Explorer
        </div>
      </div>

      <div className="mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-2">
          World Food &amp; Cuisines 🌏
        </h1>
        <p className="text-sm text-gray-600 max-w-3xl leading-relaxed">
          Discover traditional cooking styles and flavors from around the globe. Filter recipes by your favorite culinary culture.
        </p>
      </div>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-gray-900">
            Popular Regional Cuisines
          </h2>
          <span className="text-xs text-gray-500">
            {cuisinesData.length} Regions
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cuisinesData.map((cuisine) => (
            <CuisineCard key={cuisine.id} cuisine={cuisine} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              Featured Asian Recipes
            </h2>
            <p className="text-xs text-gray-500">
              Hand-picked easy recipes featuring noodles, stir-fries, and appetizers.
            </p>
          </div>
          <Link href="/recipes" className="text-xs text-orange-600 hover:underline font-medium">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} showSubtitleFormat={true} />
          ))}
        </div>
      </section>

      <div className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-xs font-semibold text-orange-700 block mb-1">
            🍳 Student Cooking Tip
          </span>
          <h3 className="text-sm font-semibold text-gray-900 mb-1">
            Quick Flavor Enhancers
          </h3>
          <p className="text-xs text-gray-600 max-w-2xl leading-relaxed">
            For authentic taste at home, always cook with fresh aromatics like ginger, garlic, and fresh herbs before adding your sauces and vegetables.
          </p>
        </div>
        <Link
          href="/recipes"
          className="px-3.5 py-1.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-medium rounded-md transition-colors shrink-0"
        >
          Browse Recipes
        </Link>
      </div>
    </div>
  );
}
