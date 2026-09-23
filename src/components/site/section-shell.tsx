import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  lead,
  children,
  className,
  narrow = false,
}: SectionShellProps) {
  return (
    <section
      className={cn("border-t border-border px-5 py-18 sm:py-24", className)}
      id={id}
    >
      <div className={cn("mx-auto", narrow ? "max-w-[820px]" : "max-w-[1120px]")}>
        <div className="mb-10 max-w-4xl">
          {eyebrow ? (
            <p className="section-eyebrow mb-3">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-balance text-3xl font-semibold sm:text-5xl">
            {title}
          </h2>
          {lead ? (
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {lead}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
