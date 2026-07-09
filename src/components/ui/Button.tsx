import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-4 text-[13px] uppercase tracking-[0.18em] transition-colors";

  const variants: Record<string, string> = {
    primary: "bg-black text-white hover:bg-red-600",
    secondary: "bg-transparent text-black border border-black hover:bg-black hover:text-white",
    outline: "bg-transparent text-black/70 border border-black/20 hover:border-black hover:text-black",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}