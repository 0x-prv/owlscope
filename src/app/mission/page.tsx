import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";

export default function MissionPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="border-b border-black/10 py-24">
        <Container>
          <SectionHeading
            eyebrow="Mission"
            title="Why OwlScope Exists"
            description={BRAND.mission}
          />
        </Container>
      </section>

      {/* Problem */}
      <section className="border-b border-black/10 py-20">
        <Container className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-[13px] uppercase tracking-[0.2em] text-red-600">
              The Problem
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-black md:text-3xl">
              Why meme coin investors lose money
            </h2>
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed text-black/60">
            <p>
              Most meme coin losses don&apos;t come from bad luck. They come from
              missing information — hidden wallet clusters, developer history,
              and liquidity structures that aren&apos;t visible before a trade
              is made.
            </p>
            <p>
              Investors are forced to make fast decisions with incomplete
              data, often relying on social sentiment instead of on-chain
              behavior.
            </p>
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="border-b border-black/10 py-20">
        <Container className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-[13px] uppercase tracking-[0.2em] text-red-600">
              Our Approach
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-black md:text-3xl">
              Intelligence before the trade
            </h2>
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed text-black/60">
            <p>
              OwlScope applies AI-driven analysis to wallet behavior,
              developer reputation, and market structure — surfacing the
              signals that matter before capital is committed.
            </p>
            <p>
              We believe every investor deserves the same visibility that
              sophisticated funds already have.
            </p>
          </div>
        </Container>
      </section>

      {/* Long-term vision */}
      <section className="bg-black py-24 text-white">
        <Container className="max-w-3xl text-center">
          <p className="mb-4 text-[13px] uppercase tracking-[0.25em] text-red-500">
            Long-Term Vision
          </p>
          <h2 className="text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
            A future where every on-chain decision is made with full clarity —
            not guesswork.
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/mission/vision" variant="secondary" className="border-white text-white hover:bg-white hover:text-black">
              Read Our Vision
            </Button>
            <Button href="/research" variant="outline" className="border-white/30 text-white/80 hover:border-white hover:text-white">
              View Research
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}