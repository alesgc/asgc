import { ReactNode } from "react";

export default function TabsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-1 max-w-5xl mx-auto w-full p-4 sm:p-6">
        {children}
      </main>
    </div>
  );
}