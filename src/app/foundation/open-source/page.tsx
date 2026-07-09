import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function OpenSourcePage() {
  return (
    <div className="bg-white py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Foundation"
          title="Open Source"
          description="OwlScope believes in building in the open where it strengthens trust and security."
        />
        <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-black/60">
          <p>
            Select components of the OwlScope Intelligence Platform, including
            research tooling and non-sensitive infrastructure, are planned for
            open-source release as the platform matures.
          </p>
          <p>
            Our GitHub will be the reference point for any open-source
            repositories. Follow along for updates as modules are published.
          </p>
        </div>
        <div className="mt-10">
          <Button href={SOCIAL_LINKS.github} variant="secondary">
            View GitHub
          </Button>
        </div>
      </Container>
    </div>
  );
}