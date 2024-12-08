import React from "react";

export function BackgroundBeamsWithCollision({ 
  children, 
  className 
}: { 
  children: React.ReactNode, 
  className?: string 
}) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 right-0 bottom-0 bg-grid-white/[0.03] dark:bg-grid-black/[0.03]"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        <div className="absolute left-0 w-px h-full bg-gradient-to-b from-transparent via-indigo-500 to-transparent"></div>
        <div className="absolute right-0 w-px h-full bg-gradient-to-b from-transparent via-indigo-500 to-transparent"></div>
      </div>
      {children}
    </div>
  );
}
