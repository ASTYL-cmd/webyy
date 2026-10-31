import { useEffect } from 'react';
import { siteUrl } from '../config';

function setMeta(selector: string, attr: 'content' | 'href', value: string, create?: () => HTMLElement) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el && create) {
    el = create();
    document.head.appendChild(el);
  }
  el?.setAttribute(attr, value);
}

/** Per-page <title>, description, canonical and social tags (the app is a client-rendered SPA). */
export function usePageMeta(title: string, description: string, path: string) {
  useEffect(() => {
    const url = `${siteUrl}${path}`;
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', url, () => {
      const l = document.createElement('link');
      l.rel = 'canonical';
      return l;
    });
    window.scrollTo(0, window.location.hash ? window.scrollY : 0);
  }, [title, description, path]);
}
