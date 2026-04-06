// app/loading.js
export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white/80">
      <div className="absolute inset-0 z-[100] flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm rounded-2xl">
        {/* High-visibility Spinner */}
        <div className="relative h-12 w-12">
          {/* Background Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
          {/* Animated Top Ring (Using Indigo if brand-shopify fails) */}
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-t-indigo-600 border-r-transparent border-b-transparent border-l-transparent"></div>
        </div>
        <p className="mt-4 text-xs font-bold tracking-widest text-slate-500 uppercase animate-pulse">
          Updating Tasks...
        </p>
      </div>
    </div>
  );
}
