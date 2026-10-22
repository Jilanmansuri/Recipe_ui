"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { recipesData } from "@/data/recipes";

export default function RecipeDetailPage() {
  const params = useParams();
  const idOrSlug = params?.id as string;

  const recipe = recipesData.find(
    (r) => r.slug === idOrSlug || r.id === idOrSlug
  );

  if (!recipe) {
    notFound();
  }

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleIngredient = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex items-center justify-between text-xs text-stone-500 mb-6">
        <div className="flex items-center gap-2">
          <Link href="/recipes" className="hover:text-stone-800">Recipes</Link>
          <span>/</span>
          <Link href="/cuisines" className="hover:text-stone-800">{recipe.cuisine}</Link>
          <span>/</span>
          <span className="text-stone-900 font-medium">{recipe.title}</span>
        </div>
        <Link
          href="/recipes"
          className="text-stone-600 hover:text-[#C2410C] inline-flex items-center gap-1 font-medium"
        >
          <span>←</span>
          <span>Back to recipes</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 bg-orange-100 text-orange-800 border border-orange-200 rounded text-xs font-semibold">
              {recipe.cuisine}
            </span>
            <span className="text-xs text-gray-500 font-medium">
              Recipe #{recipe.id}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
            {recipe.title}
          </h1>

          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mb-6">
            {recipe.description}
          </p>

          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-xs flex flex-wrap items-center gap-6 text-xs text-gray-600">
            <div>
              <span className="text-gray-400 block mb-0.5">Cuisine</span>
              <strong className="text-gray-800 text-sm font-semibold">{recipe.cuisine}</strong>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>
            <div>
              <span className="text-gray-400 block mb-0.5">Prep Time</span>
              <strong className="text-gray-800 text-sm font-semibold">{recipe.prepTime}</strong>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>
            <div>
              <span className="text-gray-400 block mb-0.5">Difficulty</span>
              <strong className="text-gray-800 text-sm font-semibold">{recipe.difficulty}</strong>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>
            <div>
              <span className="text-gray-400 block mb-0.5">Servings</span>
              <strong className="text-gray-800 text-sm font-semibold">{recipe.servings}</strong>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="border border-gray-200 p-2 bg-white rounded-lg shadow-xs">
            <div className="relative h-60 w-full overflow-hidden rounded bg-gray-100">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2 text-center text-xs text-gray-500 font-medium py-1">
              📸 {recipe.title} (Freshly prepared)
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 bg-white border border-gray-200 rounded-lg p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Ingredients</h2>
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-medium">
              {recipe.ingredients.length} items
            </span>
          </div>

          <div className="py-1.5 px-3 bg-orange-50 border border-orange-200 rounded text-xs text-orange-800 mb-4 font-medium">
            Yield: {recipe.yieldInfo}
          </div>

          <div className="space-y-3 mb-6">
            {recipe.ingredients.map((item) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <label
                  key={item.id}
                  className="flex items-start gap-3 cursor-pointer group select-none text-xs leading-relaxed"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleIngredient(item.id)}
                    className="mt-0.5 rounded border-gray-300 text-orange-600 focus:ring-orange-500 h-4 w-4 accent-orange-600 cursor-pointer"
                  />
                  <span className={`${isChecked ? "line-through text-gray-400" : "text-gray-700"}`}>
                    <strong className="font-semibold text-gray-900">{item.quantity}</strong>{" "}
                    {item.name}
                  </span>
                </label>
              );
            })}
          </div>

          <div className="pt-3 border-t border-gray-100 text-[11px] text-gray-500 italic">
            💡 Tip: Check off ingredients as you prepare them!
          </div>
        </div>

        <div className="lg:col-span-8 bg-white border border-gray-200 rounded-lg p-6 shadow-xs">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Step-by-Step Cooking Steps</h2>
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-medium">
              {recipe.steps.length} Steps
            </span>
          </div>

          <div className="divide-y divide-gray-100">
            {recipe.steps.map((step, index) => {
              const isLast = index === recipe.steps.length - 1;
              return (
                <div key={step.stepNumber} className="py-4 first:pt-0 last:pb-4 flex items-start gap-4">
                  <div
                    className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-xs font-bold ${
                      isLast
                        ? "bg-green-600 text-white"
                        : "bg-orange-100 text-orange-700 border border-orange-200"
                    }`}
                  >
                    {step.stepNumber}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-600"></span>
              <span>Execution verified in home test kitchen</span>
            </div>
            <Link
              href="/create-recipe"
              className="text-[#C2410C] hover:underline font-medium inline-flex items-center gap-1"
            >
              <span>Edit formulation</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
