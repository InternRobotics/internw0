import { ThemeToggle } from "@/components/theme-toggle";
import { navItems, projectInfo } from "@/data/project-page";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/82 backdrop-blur-xl">
      <div className="mx-auto grid h-18 max-w-[1120px] grid-cols-[1fr_auto] items-center px-5 lg:grid-cols-[1fr_auto_1fr]">
        <a className="flex items-center gap-3 justify-self-start font-semibold" href="#top">
          <span
            aria-hidden="true"
            className="size-9 rounded-xl bg-[linear-gradient(135deg,#005ea8,#0d74ce_52%,#2aa8f2)] shadow-sm"
          />
          <span className="text-lg">{projectInfo.name}</span>
        </a>
        <nav className="hidden items-center gap-7 justify-self-center text-sm font-medium text-muted-foreground lg:flex">
          {navItems.map((item) => (
            <a
              className="transition hover:text-foreground"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="justify-self-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
