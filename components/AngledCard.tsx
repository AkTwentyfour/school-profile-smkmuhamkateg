import { cn } from "@/lib/utils";
import React from "react";

type cardVariant = "slantRight" | "slantLeft" | "slantBottomRight" | "slantBottomLeft";
interface AngledCardInterface {
  variant?: cardVariant;
  title?: string;
  description?: string;
  className?: boolean | string;
}

export default function AngledCard({
  variant = "slantRight",
  title,
  description,
  className
}: AngledCardInterface) {
  const variantStyles = {
    // Potong kanan atas
    slantRight: "[clip-path:polygon(0_0,calc(100%-140px)_0,100%_100%,0_100%)] pr-[120px]",
    
    // Potong kiri atas
    slantLeft: "[clip-path:polygon(140px_0,100%_0,100%_100%,0_100%)] pl-[120px]",
    
    // Potong kanan bawah (Garis miring di sisi kanan, menukik ke dalam di bagian bawah)
    slantBottomRight: "[clip-path:polygon(0_0,100%_0,calc(100%-140px)_100%,0_100%)] pr-[120px]",
    
    // Potong kiri bawah (Garis miring di sisi kiri, menukik ke dalam di bagian bawah)
    slantBottomLeft: "[clip-path:polygon(0_0,100%_0,100%_100%,140px_100%)] pl-[120px]",
  };

  return (
    <div className={cn("w-1/3 filter", className)}>
      <div className={`bg-white p-8 h-40 ${variantStyles[variant]}`}>
        <h3 className={cn("text-lg font-bold text-black mb-3", variant == "slantLeft" && 'text-right')}>{title}</h3>
        <p className={cn("text-slate-700 w-full text-sm",)}>
          {description}
        </p>
      </div>
    </div>
  );
}
