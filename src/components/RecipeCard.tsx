import Link from "next/link";
import { Recipe } from "@/types/recipe";

type RecipeCardProps = {
  recipe: Recipe;
  showSubtitleFormat?: boolean;
};

export default function RecipeCard({ recipe, showSubtitleFormat = false }: RecipeCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col hover:shadow-md transition-shadow shadow-xs">
      <div className="relative h-44 w-full overflow-hidden bg-gray-100">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-medium bg-orange-50 text-orange-700 px-2 py-0.5 rounded border border-orange-200">
            {recipe.cuisine}
          </span>
          <span className="text-xs text-gray-500 font-medium">
            ⏱ {recipe.prepTime}
          </span>
        </div>

        <h3 className="text-base font-semibold text-gray-900 mb-1.5 line-clamp-1 hover:text-orange-600 transition-colors">
          {recipe.title}
        </h3>

        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4 flex-1">
          {recipe.description}
        </p>

        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>Serves: {recipe.servings}</span>
          <Link
            href={`/recipes/${recipe.slug}`}
            className="px-2.5 py-1 bg-orange-50 hover:bg-orange-600 hover:text-white text-orange-600 border border-orange-200 font-medium rounded text-xs transition-colors inline-flex items-center gap-1"
          >
            <span>View Recipe</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
