export default function ComingSoonBadge({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 border border-red-600/30 bg-red-600/5 px-4 py-2 text-[12px] uppercase tracking-[0.2em] text-red-600 ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
      Coming Soon
    </span>
  );
}