import { ReactNode } from "react";

export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-black/10 bg-white p-8 transition-colors hover:border-black/30 ${className}`}
    >
      {children}
    </div>
  );
}