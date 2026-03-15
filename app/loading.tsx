export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-12 h-12 border-4 border-neutral-800 border-t-crisis-red rounded-full animate-spin mb-6" />
        <p className="text-neutral-500 text-sm font-black uppercase tracking-[0.3em]">
          Loading Intelligence...
        </p>
      </div>
    </div>
  );
}
