import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const FAQS = [
  {
    question: "Is OwlScope live?",
    answer:
      "Not yet. The OwlScope Intelligence Platform is currently in development. This site covers the mission, research, and roadmap behind the platform while it is being built.",
  },
  {
    question: "Is this a trading platform?",
    answer:
      "No. OwlScope is a research and intelligence platform. It is designed to help users understand wallet behavior, deployer history, and liquidity conditions as part of their own research process. OwlScope does not place trades or take any action on a user's behalf.",
  },
  {
    question: "What blockchain does OwlScope focus on?",
    answer:
      "OwlScope is focused on the Solana ecosystem, with particular attention to meme coin markets, where wallet and deployer behavior have a measurable effect on outcomes.",
  },
  {
    question: "How can I stay updated?",
    answer:
      "Join the waitlist from the Platform page, or follow updates on X and Discord covering research, documentation, and platform progress.",
  },
  {
    question: "Will there be a token?",
    answer:
      "Token utility is part of the long term roadmap (Phase 7), but is not part of the current phase of development.",
  },
];

export default function FaqPage() {
  return (
    <div className="bg-white py-24">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Foundation" title="Frequently Asked Questions" />
        <div className="mt-12 space-y-0">
          {FAQS.map((faq) => (
            <div key={faq.question} className="border-t border-black/10 py-8">
              <h3 className="text-lg font-semibold text-black">
                {faq.question}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-black/60">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}