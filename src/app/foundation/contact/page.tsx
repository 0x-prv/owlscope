import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="bg-white py-24">
      <Container className="max-w-2xl text-center">
        <SectionHeading
          eyebrow="Foundation"
          title="Get in Touch"
          description="Questions, partnership inquiries, or want to join the waitlist? Reach out through any of the channels below."
          align="center"
        />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href={SOCIAL_LINKS.x} variant="secondary">
            Message on X
          </Button>
          <Button href={SOCIAL_LINKS.discord} variant="outline">
            Join Discord
          </Button>
        </div>
      </Container>
    </div>
  );
}