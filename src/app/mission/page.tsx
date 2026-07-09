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
              Why meme coin losses are difficult to evaluate
            </h2>
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed text-black/60">
            <p>
              Most meme coin losses don&apos;t come from bad luck. They come from
              missing information; hidden wallet clusters, developer history,
              and liquidity structures that aren&apos;t visible before a trade
              is made.
            </p>
            <p>
              Participants often make fast decisions with incomplete
              data, relying on social sentiment when wallet behavior,
              deployer history, and liquidity conditions have not yet been
              reviewed.
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
              Research before capital is committed
            </h2>
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed text-black/60">
            <p>
              OwlScope is being built to organize wallet behavior,
              deployer history, and market structure into evidence based
              research that can be reviewed before capital is committed.
            </p>
            <p>
              The objective is to make relevant onchain evidence easier to
              inspect, compare, and explain without presenting the output as
              financial advice or a deterministic risk label.
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
            A future where onchain decisions can be reviewed with better
            context, not guesswork.
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