'use client';

import { useEffect, useState } from 'react';

import { DesktopHeader } from '@/components/header/desktop-header';
// import { MobileHeader } from '@/components/header/mobile-header';
import { cn } from '@/lib/utils';
import { MobileHeader } from './mobile-header';

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > window.innerHeight - 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen]);

    return (
        <>
            <div className={cn('fixed inset-x-0 top-5 lg:top-8 z-200 mx-auto max-w-7xl')}>
                {/* Desktop */}
                <div className="hidden w-full md:block">
                    <DesktopHeader scrolled={scrolled} />
                </div>

                {/* Mobile */}
                <div className="block md:hidden">
                    <MobileHeader
                        menuOpen={menuOpen}
                        scrolled={scrolled}
                        setMenuOpen={setMenuOpen}
                    />
                </div>
            </div>
        </>
    );
}
