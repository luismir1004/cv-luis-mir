"use client";

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

function AnalyticsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_search: searchParams.toString(),
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export const Analytics = () => {
  return (
    <Suspense fallback={null}>
      <AnalyticsContent />
    </Suspense>
  );
};

export const GoogleAnalytics = () => {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  );
};

// Custom event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, parameters);
  }
};

export const trackProjectClick = (projectName: string) => {
  trackEvent('project_click', {
    project_name: projectName,
    category: 'engagement',
  });
};

export const trackSkillFilter = (category: string) => {
  trackEvent('skill_filter', {
    category: category,
    filter_type: 'skill_category',
  });
};

export const trackSearch = (query: string) => {
  trackEvent('search', {
    search_term: query,
    category: 'engagement',
  });
};

export const trackContactClick = (method: string) => {
  trackEvent('contact_click', {
    contact_method: method,
    category: 'conversion',
  });
};