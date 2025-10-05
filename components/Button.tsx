"use client";

import * as React from "react";
import Link from "next/link";

// Button component set with Tailwind classes that match the site's design.
// Exports:
//  - Button: for <button> interactions
//  - LinkButton: for navigation; renders Next.js Link for internal routes ("/" or "#"), <a> for external (http, mailto, tel)
// Supports leftIcon/rightIcon, variant, size, and fullWidth.

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

export interface CommonButtonProps {
  variant?: Variant;
  size?: Size;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

export type ButtonProps = CommonButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
export type LinkButtonProps = CommonButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70";
const variants: Record<Variant, string> = {
  primary: "bg-emerald-500 text-black hover:bg-emerald-400",
  outline: "border border-white/10 text-zinc-200 hover:bg-white/5",
  ghost: "text-zinc-200 hover:bg-white/5",
};
const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], fullWidth && "w-full", className)}
      {...props}
    >
      {leftIcon ? <span aria-hidden>{leftIcon}</span> : null}
      <span>{children}</span>
      {rightIcon ? <span aria-hidden>{rightIcon}</span> : null}
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  fullWidth,
  className,
  children,
  href,
  ...props
}: LinkButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], fullWidth && "w-full", className);
  const content = (
    <>
      {leftIcon ? <span aria-hidden>{leftIcon}</span> : null}
      <span>{children}</span>
      {rightIcon ? <span aria-hidden>{rightIcon}</span> : null}
    </>
  );

  const isInternal = href.startsWith("/") || href.startsWith("#");
  if (isInternal) {
    // Internal navigation uses Next Link
    return (
      <Link href={href} className={classes} {...(props as any)}>
        {content}
      </Link>
    );
  }
  // External URLs & mailto/tel use plain <a>
  return (
    <a href={href} className={classes} {...props}>
      {content}
    </a>
  );
}

// Minimal className join helper
function cn(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ");
}

// Dev-only sanity checks (simple test cases).
// Safe to ship; runs only in browser, not during SSR, and only in dev mode.
if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
  try {
    // Test 1: cn() should drop falsy values and join strings
    console.assert(cn("a", false, undefined, "b") === "a b", "[Button Test] cn join failed");

    // Test 2: Variants map has all keys
    (["primary","outline","ghost"] as const).forEach(k => {
      console.assert(!!variants[k], `[Button Test] missing variant styles for ${k}`);
    });

    // Test 3: Sizes map has all keys
    (["sm","md","lg"] as const).forEach(k => {
      console.assert(!!sizes[k], `[Button Test] missing size styles for ${k}`);
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('[Button Test] runtime checks failed', e);
  }
}
