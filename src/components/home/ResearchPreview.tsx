import Link from "next/link";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { RESEARCH_ARTICLES } from "@/lib/constants";

export default function ResearchPreview() {
  const preview = RESEARCH_ARTICLES.slice(0, 3);

  return (
    <section className="border-t border-black/10 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Research" title="Latest Research" />
          <Link
            href="/research"
            className="text-[13px] uppercase tracking-[0.18em] text-black/60 hover:text-black"
          >
            View All
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {preview.map((article) => (
            <Link key={article.slug} href={`/research/${article.slug}`}>
              <Card className="h-full">
                <p className="text-[12px] uppercase tracking-[0.2em] text-red-600">
                  {article.category}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-black">
                  {article.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-black/60">
                  {article.excerpt}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}