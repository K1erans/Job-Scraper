import { type ReactNode } from "react";

export const navIcons = {
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h5v-6h4v6h5V10" />
    </>
  ),
  file: (
    <>
      <path d="M6 3h8l4 4v14H6V3Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h4" />
      <path d="M9 17h6" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </>
  ),
  briefcase: (
    <>
      <path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
      <rect x="4" y="6" width="16" height="13" rx="2" />
      <path d="M4 11h16" />
      <path d="M10 11v2h4v-2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m16.5 16.5 4 4" />
    </>
  ),
  filter: <path d="M4 5h16l-6 7v5l-4 2v-7L4 5Z" />,
  chevron: <path d="m8 10 4 4 4-4" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.9 4.9 1.4 1.4" />
      <path d="m17.7 17.7 1.4 1.4" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m4.9 19.1 1.4-1.4" />
      <path d="m17.7 6.3 1.4-1.4" />
    </>
  ),
  arrowLeft: <path d="m15 18-6-6 6-6" />,
  arrowRight: <path d="m9 18 6-6-6-6" />,
} satisfies Record<string, ReactNode>;

export type NavIconName = keyof typeof navIcons;

export function SvgIcon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
      {children}
    </svg>
  );
}
