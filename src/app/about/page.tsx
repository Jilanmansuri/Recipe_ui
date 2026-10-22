import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <div className="text-xs text-gray-500 mb-6 flex items-center gap-2">
        <Link href="/recipes" className="hover:text-orange-600">Recipes</Link>
        <span>/</span>
        <span className="text-gray-800 font-medium">About</span>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-10 shadow-xs space-y-6">
        <div>
          <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 bg-orange-100 text-orange-700 border border-orange-200 rounded-full">
            College Web Dev Project
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-3 mb-2">
            About RecipeBook Project 🍳
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            Welcome to my Recipe Book web application! I built this project as part of my frontend web development coursework to learn and practice modern Next.js App Router, TypeScript, and Tailwind CSS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-100 text-xs">
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h2 className="font-semibold text-gray-900 mb-1 text-sm">1. Dynamic Routing</h2>
            <p className="text-gray-600 leading-relaxed">
              Implemented Next.js dynamic routing with <code className="bg-gray-200 px-1 rounded text-[11px]">/recipes/[id]</code> to dynamically load detailed recipe views.
            </p>
          </div>

          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h2 className="font-semibold text-gray-900 mb-1 text-sm">2. Interactive State</h2>
            <p className="text-gray-600 leading-relaxed">
              Used React <code className="bg-gray-200 px-1 rounded text-[11px]">useState</code> hooks for category filters, ingredient checkboxes, and draft forms.
            </p>
          </div>

          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h2 className="font-semibold text-gray-900 mb-1 text-sm">3. Responsive UI</h2>
            <p className="text-gray-600 leading-relaxed">
              Styled using Tailwind CSS with mobile-first grid layouts, cards, and custom components.
            </p>
          </div>
        </div>

        <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg text-xs text-orange-900 space-y-1">
          <div className="font-semibold text-orange-950">Project Details:</div>
          <div>• <strong>Technologies:</strong> Next.js 15, React 19, TypeScript, Tailwind CSS</div>
          <div>• <strong>Features:</strong> Recipe list, cuisine categories, step-by-step instructions, recipe creation form</div>
        </div>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <Link
            href="/recipes"
            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-medium rounded-md transition-colors shadow-xs"
          >
            ← Explore All Recipes
          </Link>
          <span className="text-xs text-gray-400">
            Student Submission v1.0
          </span>
        </div>
      </div>
    </div>
  );
}
