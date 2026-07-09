import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPage() {
  return (
    <div className="bg-white py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Foundation"
          title="About OwlScope"
          description="Structured onchain intelligence for the Solana ecosystem."
        />
        <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-black/60">
          <p>
            OwlScope was founded to address a structural problem in the
            Solana ecosystem: the information that matters most when
            evaluating a wallet, token, or project, including wallet
            clusters, deployer history, and liquidity structure, exists
            onchain but is not organized in a form that most participants
            can readily interpret.
          </p>
          <p>
            OwlScope is building an intelligence platform that organizes
            this data into structured research, so that wallet history,
            deployer background, and liquidity conditions can be evaluated
            as part of a single investigation process rather than
            reconstructed manually from raw transaction data. The platform
            is currently in development. Research and documentation are
            published here as that work progresses.
          </p>
          <p>
            OwlScope is built by a single team of four, formed from within
            the Solana builder community rather than assembled externally.
            The team is split evenly between development, responsible for
            platform architecture and research, and marketing, responsible
            for communicating that research and building the ecosystem
            around the platform.
          </p>
        </div>
      </Container>
    </div>
  );
}