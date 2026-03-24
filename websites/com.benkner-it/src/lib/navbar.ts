import { type Language } from '@/lib/i18n';
import { getTranslatedPath, getRouteLabel } from '@/lib/registry';

export type NavItem = {
  routeKey: string;
};

export type ResolvedNavItem = {
  routeKey: string;
  label: string;
  href: string;
  isActive: boolean;
};

export const navTree: NavItem[] = [
  { routeKey: 'home' },
  { routeKey: 'services' },
  { routeKey: 'projects' },
  { routeKey: 'blog' },
  { routeKey: 'about' },
  { routeKey: 'contact' },
];

export function resolveNavTree(
  lang: Language,
  currentPath: string,
): ResolvedNavItem[] {
  return navTree.map((item) => {
    const href = getTranslatedPath(item.routeKey, lang);
    const normalized = currentPath.replace(/\/$/, '') || '/';
    const target = href.replace(/\/$/, '') || '/';
    const home =
      getTranslatedPath('home', lang).replace(/\/$/, '') || '/';

    const isActive =
      target === home
        ? normalized === target
        : normalized === target || normalized.startsWith(target + '/');

    return {
      routeKey: item.routeKey,
      label: getRouteLabel(item.routeKey, lang),
      href,
      isActive,
    };
  });
}
