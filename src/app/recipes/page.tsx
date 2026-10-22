"use client";

import { useState } from "react";
import Link from "next/link";
import { recipesData } from "@/data/recipes";
import RecipeCard from "@/components/RecipeCard";

export default function RecipesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredRecipes = selectedCategory === "all"
    ? recipesData
    : recipesData.filter((recipe) => recipe.category === selectedCategory);

  const quickMeals = recipesData.filter((r) => r.category === "quick-meals");
  const plantBased = recipesData.filter((r) => r.category === "plant-based");
  const bakingGrains = recipesData.filter((r) => r.category === "baking-grains");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <div className="text-xs text-gray-500 mb-4 flex items-center gap-2">
        <Link href="/" className="hover:text-orange-600">Home</Link>
        <span>/</span>
        <span className="text-gray-800 font-medium">All Recipes</span>
      </div>

      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-2">
          Delicious Recipe Collection 📖
        </h1>
        <p className="text-sm text-gray-600 max-w-3xl leading-relaxed">
          Welcome to my recipe notebook! Here you will find quick meals, baking ideas, and healthy dishes with step-by-step cooking instructions.
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
            selectedCategory === "all"
              ? "bg-orange-600 text-white shadow-xs"
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          All Recipes <span className="opacity-75 ml-1">({recipesData.length})</span>
        </button>

        <button
          onClick={() => setSelectedCategory("quick-meals")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
            selectedCategory === "quick-meals"
              ? "bg-orange-600 text-white shadow-xs"
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          ⚡ Quick Meals (&lt;25m) <span className="opacity-75 ml-1">(9)</span>
        </button>

        <button
          onClick={() => setSelectedCategory("plant-based")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
            selectedCategory === "plant-based"
              ? "bg-orange-600 text-white shadow-xs"
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          🥗 Plant-Based <span className="opacity-75 ml-1">(8)</span>
        </button>

        <button
          onClick={() => setSelectedCategory("baking-grains")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
            selectedCategory === "baking-grains"
              ? "bg-orange-600 text-white shadow-xs"
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          🥖 Baking &amp; Grains <span className="opacity-75 ml-1">(6)</span>
        </button>

        <button
          onClick={() => setSelectedCategory("soups-stews")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
            selectedCategory === "soups-stews"
              ? "bg-orange-600 text-white shadow-xs"
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          🍲 Soups &amp; Stews <span className="opacity-75 ml-1">(5)</span>
        </button>
      </div>

      {selectedCategory !== "all" ? (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">
              Showing {filteredRecipes.length} recipes in this category
            </h2>
            <button
              onClick={() => setSelectedCategory("all")}
              className="text-xs text-orange-600 hover:underline font-medium"
            >
              Clear filter
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-12">
          <section>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-base font-semibold text-gray-900">
                  ⚡ Quick Meals (&lt;25m)
                </h2>
                <span className="text-[11px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full font-medium">
                  {quickMeals.length} recipes
                </span>
              </div>
              <button
                onClick={() => setSelectedCategory("quick-meals")}
                className="text-xs text-orange-600 hover:underline transition-colors font-medium"
              >
                View all quick meals →
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickMeals.slice(0, 3).map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-base font-semibold text-gray-900">
                  🥗 Plant-Based Dishes
                </h2>
                <span className="text-[11px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full font-medium">
                  {plantBased.length} recipes
                </span>
              </div>
              <button
                onClick={() => setSelectedCategory("plant-based")}
                className="text-xs text-orange-600 hover:underline transition-colors font-medium"
              >
                View all plant-based →
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plantBased.slice(0, 3).map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-base font-semibold text-gray-900">
                  🥖 Baking &amp; Breads
                </h2>
                <span className="text-[11px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full font-medium">
                  {bakingGrains.length} recipes
                </span>
              </div>
              <button
                onClick={() => setSelectedCategory("baking-grains")}
                className="text-xs text-orange-600 hover:underline transition-colors font-medium"
              >
                View all baking →
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bakingGrains.slice(0, 3).map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>
        </div>
      )}

      {/* Student Project Quick Links Box */}
      <div className="mt-12 bg-white border border-gray-200 rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-gray-600 shadow-xs">
        <div className="flex items-start gap-3">
          <span className="text-xl">🎓</span>
          <div>
            <strong className="text-gray-800 block font-medium">Student Project Demo Links</strong>
            <span>Test Next.js dynamic routing with these example recipes:</span>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Link
            href="/recipes/crispy-chili-garlic-tofu"
            className="px-3 py-1.5 bg-orange-50 border border-orange-200 hover:bg-orange-100 text-orange-700 rounded text-xs transition-colors font-medium"
          >
            Chili Garlic Tofu
          </Link>
          <Link
            href="/recipes/overnight-country-sourdough"
            className="px-3 py-1.5 bg-orange-50 border border-orange-200 hover:bg-orange-100 text-orange-700 rounded text-xs transition-colors font-medium"
          >
            Sourdough Bread
          </Link>
        </div>
      </div>
    </div>
  );
}
