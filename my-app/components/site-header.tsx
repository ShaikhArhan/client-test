"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import menu from "@iconify-icons/lucide/menu";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-[70px] w-[92%] max-w-[1120px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-[1.3rem] font-extrabold"
        >
          <span className="grid size-[34px] place-items-center rounded-[10px_10px_10px_2px] bg-brand text-base text-white">
            V
          </span>
          Vela
        </Link>

        <input
          id="menu-toggle"
          type="checkbox"
          aria-label="Toggle menu"
          className="peer sr-only"
        />
        <label
          htmlFor="menu-toggle"
          className="grid size-[42px] cursor-pointer place-items-center md:hidden"
        >
          <Icon
            icon={menu}
            aria-hidden="true"
            className="size-6 text-ink"
          />
        </label>
        <nav className="absolute left-0 right-0 top-[70px] hidden flex-col items-stretch gap-0 border-b border-line bg-white px-[4%] pb-5 pt-2 peer-checked:flex md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={`border-b-2 py-3.5 font-medium transition-colors hover:border-brand hover:text-ink md:py-1 ${
                pathname === href
                  ? "border-brand text-ink"
                  : "border-transparent text-muted"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-[.95rem] font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark md:mt-0"
          >
            Get a demo
          </Link>
        </nav>
      </div>
    </header>
  );
}
