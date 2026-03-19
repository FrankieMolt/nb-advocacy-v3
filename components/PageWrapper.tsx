import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  wide?: boolean;
}

export function PageWrapper({ children, wide = false }: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-black text-white py-16 md:py-20 selection:bg-crisis-red selection:text-white">
      <div className={`container mx-auto px-4 md:px-6 ${wide ? 'max-w-6xl' : 'max-w-4xl'}`}>
        {children}
      </div>
    </div>
  );
}
