'use client';

import React, { createContext, useContext, useCallback } from 'react';
import { useRouter } from 'next/navigation';

type NavHandler = (view: string, idOrSlug?: string) => void;
const NavigationContext = createContext<NavHandler>(() => {});
export const useAppNav = () => useContext(NavigationContext);

export default function NavigationProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleChangeView = useCallback((view: string, idOrSlug?: string) => {
    const viewPaths: Record<string, string> = {
      home: '/',
      blog: '/blog',
      contact: '/contact',
      legal: '/mentions-legales',
      privacy: '/confidentialite',
    };

    if (view === 'home' && idOrSlug) {
      router.push('/');
      setTimeout(() => {
        const element = document.getElementById(idOrSlug);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 150);
    } else if (view === 'blog-post' && idOrSlug) {
      router.push(`/blog/${idOrSlug}`);
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }), 50);
    } else {
      router.push(viewPaths[view] || '/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }), 50);
    }
  }, [router]);

  return (
    <NavigationContext.Provider value={handleChangeView}>
      {children}
    </NavigationContext.Provider>
  );
}
