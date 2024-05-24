import Container from "@/components/layout/container";

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="py-24 sm:py-32 animate-fade-in">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-foreground/70">
            {description}
          </p>
        </div>
      </Container>
    </div>
  );
}
