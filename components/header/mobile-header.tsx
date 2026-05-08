"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type MobileHeaderProps = {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

type NavLinkProps = React.ComponentProps<typeof Link> & {
  onClose: () => void;
};

function NavLink({ href, onClose, children, ...props }: NavLinkProps) {
  return (
    <Link href={href} onClick={onClose} {...props}>
      {children}
    </Link>
  );
}

export function MobileHeader({
  scrolled,
  menuOpen,
  setMenuOpen,
}: MobileHeaderProps) {
  const links = [
    { href: "/", label: "Beranda" },
    { href: "/", label: "Profil" },
    { href: "/", label: "Kompetensi" },
    { href: "/", label: "Data Sekolah" },
    { href: "/", label: "Informasi Pendaftaran" },
    { href: "/", label: "Informasi Seleksi" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div
        className={cn(
          "relative mx-auto flex justify-between items-center rounded-full transition-all duration-300 border border-white filter backdrop-blur-lg",
          scrolled
            ? "py-2 pr-2.5 pl-4 text-primary backdrop-blur-md"
            : "px-4 py-2 text-secondary dark:text-primary",
        )}
        style={{ maxWidth: scrolled ? "90%" : "95%" }}
      >
        <Link className="flex items-center gap-3" href="/">
          <img src="/img/logo.png" alt="Logo SMK Muhamkateg" className="h-14" />
          <span className="font-bold w-full text-sm">SMK Muhammadiyah Kramat</span>
        </Link>

        <Button
          className={cn(
            "rounded-full",
            !scrolled && "bg-accent/10! backdrop-blur-md",
          )}
          onClick={() => setMenuOpen(true)}
          size="icon"
          variant="outline"
        >
          <MenuIcon />
        </Button>
      </div>

      {/* Fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            animate={{ x: 0 }}
            className="fixed inset-0 z-50 flex h-full w-full flex-col bg-background p-6"
            exit={{ x: "100%" }}
            initial={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {/* Logo */}
            <Link className="flex items-center gap-2" href="/">
              <img
                src="/img/logo.png"
                alt="Logo SMK Muhamkateg"
                className="h-14"
              />
              <span className="font-bold">SMK Muhammadiyah Kramat</span>
            </Link>

            {/* Close */}
            <button
              className="absolute top-4 right-4 rounded-full p-2"
              onClick={() => setMenuOpen(false)}
              type="button"
            >
              <XIcon className="size-6" />
            </button>

            {/* Navigation */}
            <nav className="mt-16 flex flex-col gap-6 text-lg">
              {links.map((link) => (
                <NavLink
                  key={link.label}
                  onClose={() => setMenuOpen(false)}
                  {...link}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Bottom button */}
            {/* <div className="mt-auto">
              <div className="h-px w-full bg-border" />
              <Button
                className="mt-6 w-full rounded-full py-6"
                size="lg"
                variant="outline"
              >
                <Link href="/login">Login</Link>
              </Button>
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
