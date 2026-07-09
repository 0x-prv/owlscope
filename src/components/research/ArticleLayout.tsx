import Container from "@/components/ui/Container";

export default function ArticleLayout({
  category,
  title,
  children,
}: {
  category: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white py-24">
      <Container className="max-w-3xl">
        <p className="text-[13px] uppercase tracking-[0.2em] text-red-600">
          {category}
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-black md:text-4xl">
          {title}
        </h1>
        <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-black/60">
          {children}
        </div>
      </Container>
    </div>
  );
}