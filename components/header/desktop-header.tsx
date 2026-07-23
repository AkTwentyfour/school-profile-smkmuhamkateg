"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface DesktopHeaderProps {
  scrolled: boolean;
}

export function DesktopHeader({ scrolled }: DesktopHeaderProps) {
  const textClass = scrolled
    ? "text-foreground"
    : "text-foreground dark:text-foreground";

  const links = [
    { href: "/", label: "Beranda" },
    { href: "#profile", label: "Profil" },
    { href: "#major", label: "Kompetensi" },
    { href: "/", label: "Data Sekolah" },
    { href: "https://ppdb.smkmuhamkateg.sch.id/", label: "Informasi Pendaftaran" },
    { href: "#regist-information", label: "Informasi Seleksi" },
  ];

  return (
    <div
      className={cn(
        "relative mx-auto flex items-center gap-1.5 justify-center rounded-full transition-all duration-300 backdrop-blur-sm border border-white px-4 py-2", scrolled && 'border-black'
      )}
      style={{ maxWidth: scrolled ? "80%" : "98%" }}
    >
      {/* Navigation */}
      <div className="w-1/3 flex justify-center">
        {links.map(
          ({ href, label, ...props }, index) =>
            index < 3 && (
              <Button
                asChild
                className={cn("px-4 transition-all", textClass)}
                key={label}
                variant="ghost"
              >
                <Link href={href} {...props} className={cn('text-decoration-none text-white', scrolled && 'text-black')}>
                  {label}
                </Link>
              </Button>
            ),
        )}
      </div>

      <img src="/img/logo.png" alt="Logo SMK Muhamkateg" className="h-14" />

      <div className="w-1/3 flex justify-center">
        {links.map(
          ({ href, label, ...props }, index) =>
            index > 3 && (
              <Button
                asChild
                className={cn("px-4 transition-all", textClass)}
                key={label}
                variant="ghost"
              >
                <Link href={href} {...props} className={cn('text-decoration-none text-white', scrolled && 'text-black')}>
                  {label}
                </Link>
              </Button>
            ),
        )}
      </div>
    </div>
  );
}
