import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const REASONS = [
  {
    title: "Blockchain data lacks context",
    description:
      "Solana already provides complete transparency, but transparency alone is not intelligence. Wallets, transactions, and token movements are visible to everyone, yet understanding what they actually mean still requires extensive manual investigation.",
  },
  {
    title: "Existing tools solve only part of the problem",
    description:
      "Today's ecosystem is fragmented across explorers, token trackers, charting platforms, and market data interfaces. Users must combine information from multiple sources before they can evaluate a wallet, token, or onchain entity with confidence.",
  },
  {
    title: "Intelligence should be accessible",
    description:
      "Professional research should not be limited to funds or experienced analysts. OwlScope is being built to make wallet intelligence, behavioral analysis, and risk research accessible through a single platform that transforms raw blockchain activity into understandable insights.",
  },
];

export default function WhyOwlScopePage() {
  return (
    <div className="bg-white py-24">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Mission / Why OwlScope"
          title="Why OwlScope Exists"
        />

        <div className="mt-12 space-y-10">
          {REASONS.map((reason) => (
            <div key={reason.title} className="border-t border-black/10 pt-8">
              <h3 className="text-xl font-semibold text-black">
                {reason.title}
              </h3>

              <p className="mt-4 text-[16px] leading-8 text-black/65">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}