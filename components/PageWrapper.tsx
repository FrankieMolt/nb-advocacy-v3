import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-black text-white py-20 selection:bg-crisis-red selection:text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        {children}
      </div>
    </div>
  );
}
