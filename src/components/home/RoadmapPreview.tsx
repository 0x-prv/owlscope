import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { ROADMAP } from "@/lib/constants";

export default function RoadmapPreview() {
  const preview = ROADMAP.slice(0, 4);

  return (
    <section className="border-t border-black/10 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Roadmap" title="Where We're Headed" />
          <Link
            href="/roadmap"
            className="text-[13px] uppercase tracking-[0.18em] text-black/60 hover:text-black"
          >
            Full Roadmap →
          </Link>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-4">
          {preview.map((phase) => (
            <div key={phase.phase} className="bg-white p-6">
              <div className="mb-3 flex items-center gap-2">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    phase.status === "done"
                      ? "bg-red-600"
                      : phase.status === "in-progress"
                      ? "bg-black/60"
                      : "bg-black/20"
                  }`}
                />
                <p className="text-[11px] uppercase tracking-[0.2em] text-black/50">
                  {phase.phase}
                </p>
              </div>
              <h3 className="text-[15px] font-semibold text-black">{phase.title}</h3>
              <ul className="mt-3 space-y-1">
                {phase.items.map((item) => (
                  <li key={item} className="text-[13px] text-black/50">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}