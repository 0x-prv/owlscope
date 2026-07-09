import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ROADMAP } from "@/lib/constants";

export default function RoadmapPage() {
  return (
    <div className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Roadmap"
          title="Building OwlScope, Phase by Phase"
          description="From brand and research to a subscription based intelligence platform for the Solana ecosystem."
        />

        <div className="mt-16 space-y-0">
          {ROADMAP.map((phase, index) => (
            <div
              key={phase.phase}
              className="grid gap-6 border-t border-black/10 py-10 md:grid-cols-[160px_1fr]"
            >
              {/* Phase label + status */}
              <div className="flex items-start gap-3">
                <span
                  className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${
                    phase.status === "done"
                      ? "bg-red-600"
                      : phase.status === "in-progress"
                      ? "bg-black/70"
                      : "bg-black/30"
                  }`}
                />
                <div>
                  <p className="text-[12px] uppercase tracking-[0.2em] text-black/60">
                    {phase.phase}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-black/45">
                    {phase.status === "done"
                      ? "Complete"
                      : phase.status === "in-progress"
                      ? "In Progress"
                      : "Upcoming"}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-black">
                  {phase.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="border border-black/10 px-4 py-2 text-[13px] text-black/60"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}