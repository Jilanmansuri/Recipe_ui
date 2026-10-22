import Link from "next/link";
import { Cuisine } from "@/types/recipe";

type CuisineCardProps = {
  cuisine: Cuisine;
};

export default function CuisineCard({ cuisine }: CuisineCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col justify-between hover:shadow-md transition-shadow shadow-xs">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-medium px-2 py-0.5 bg-orange-100 text-orange-800 rounded-full border border-orange-200">
            {cuisine.recipeCount} Recipes
          </span>
          <span className="text-gray-400 text-sm">🍳</span>
        </div>

        <h3 className="text-base font-semibold text-gray-900 mb-2">
          {cuisine.name}
        </h3>

        <p className="text-xs text-gray-600 leading-relaxed mb-6">
          {cuisine.description}
        </p>
      </div>

      <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
        <span className="text-gray-500">
          Focus: <strong className="text-gray-700 font-medium">{cuisine.focus}</strong>
        </span>
        <Link
          href={`/recipes`}
          className="text-orange-600 font-medium hover:underline inline-flex items-center gap-1"
        >
          <span>Explore</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
