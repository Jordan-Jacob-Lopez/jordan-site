"use client";

import * as React from "react";
import Link from "next/link";

/** Buttons with Tailwind styles */
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

export type ButtonProps = CommonButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type LinkButtonProps = CommonButtonProps & {
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  title?: string;
};

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
  target,
  rel,
  title,
}: LinkButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], fullWidth && "w-full", className);
  const content = (
    <>
      {leftIcon ? <span aria-hidden>{leftIcon}</span> : null}
      <span>{children}</span>
      {rightIcon ? <span aria-hidden>{rightIcon}</span> : null}
    </>
  );

  if (isInternalHref(href)) {
    return (
      <Link href={href} className={classes} title={title}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} target={target} rel={rel} title={title}>
      {content}
    </a>
  );
}

/* helpers */
function cn(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ");
}
function isInternalHref(href: string): boolean {
  return href.startsWith("/") || href.startsWith("#");
}

/* dev-only sanity checks */
if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
  try {
    if (cn("a", false, undefined, "b") !== "a b") console.error("[Button Test] cn join failed");
    (["primary", "outline", "ghost"] as const).forEach(k => {
      if (!variants[k]) console.error(`[Button Test] missing variant styles for ${k}`);
    });
    (["sm", "md", "lg"] as const).forEach(k => {
      if (!sizes[k]) console.error(`[Button Test] missing size styles for ${k}`);
    });
  } catch (e) {
    console.error("[Button Test] runtime checks failed", e);
  }
}
