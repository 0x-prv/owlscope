import Card from "@/components/ui/Card";
import { FEATURE_CARDS } from "@/lib/constants";

export default function FeatureCards() {
  return (
    <section className="border-t border-black/10 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURE_CARDS.map((feature) => (
            <Card key={feature.title}>
              <h3 className="text-[13px] uppercase tracking-[0.2em] text-red-600">
                {feature.title}
              </h3>
              <p className="mt-4 text-lg text-black/80">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}