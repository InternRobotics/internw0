import { FileText } from "lucide-react";
import Image from "next/image";
import { Fragment } from "react";

import { ProjectImage } from "@/components/media/project-image";
import { buttonClasses } from "@/components/ui/button";
import { authors, figures, heroActions, projectInfo, stats, teamLogos } from "@/data/project-page";
import { assetPath } from "@/lib/asset-path";

const actionIcons: Record<string, React.ReactNode> = {
  BibTeX: <FileText aria-hidden="true" />,
  Paper: <FileText aria-hidden="true" />,
  Github: (
    <Image
      alt=""
      aria-hidden="true"
      className="size-4 shrink-0 object-contain invert dark:invert-0"
      height={16}
      src={assetPath("/images/github-invertocat-white.svg")}
      width={16}
    />
  ),
  Huggingface: (
    <Image
      alt=""
      aria-hidden="true"
      className="size-4 shrink-0 object-contain"
      height={16}
      src={assetPath("/images/huggingface-logo.svg")}
      width={16}
    />
  ),
  ModelScope: (
    <Image
      alt=""
      aria-hidden="true"
      className="size-4 shrink-0 object-contain"
      height={16}
      src={assetPath("/images/modelscope-logo.svg")}
      width={16}
    />
  ),
};

export function HeroSection() {
  return (
    <section className="hero-section px-5 pb-12 pt-14 sm:pt-18" id="top">
      <div aria-hidden="true" className="hero-background" />
      <div className="mx-auto max-w-[1120px] text-center">
        <h1 className="hero-title text-balance">
          <span className="title-gradient">{projectInfo.name}</span>
        </h1>
        <p className="hero-subtitle">
          {projectInfo.subtitle.map((line, index) => (
            <Fragment key={index}>
              {index > 0 ? <br /> : null}
              {line}
            </Fragment>
          ))}
        </p>
        <div className="authors-line">
          {authors.map((author) => (
            <span className="author-entry" key={author.id}>
              <strong className="author-name block">{author.name}</strong>
            </span>
          ))}
        </div>

        <div aria-label="Affiliations" className="team-logo-row">
          {teamLogos.map((logo) => logo.src ? (
            <Image
              alt={logo.alt}
              className="team-logo-image"
              height={logo.height}
              key={logo.id}
              src={assetPath(logo.src)}
              width={logo.width}
            />
          ) : (
            <div className="team-logo-slot" key={logo.id} style={{ width: logo.width }}>
              <ProjectImage {...logo} className="team-logo-media" />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-3">
          {heroActions.map((action, index) => {
            const className = buttonClasses({
              size: "md",
              variant: index === 0 ? "default" : "outline",
            });
            const content = <>{actionIcons[action.label]}{action.label}</>;

            return action.href ? (
              <a className={className} href={assetPath(action.href)} key={action.label}>
                {content}
              </a>
            ) : (
              <button
                className={className}
                disabled
                key={action.label}
                type="button"
              >
                {content}
              </button>
            );
          })}
        </div>

        <figure className="hero-teaser">
          <ProjectImage {...figures.teaser} priority />
          <figcaption>{projectInfo.description}</figcaption>
        </figure>

        <div className="stat-band">
          {stats.map((item) => (
            <div className="stat-card" key={item.id}>
              <p>{item.value}</p>
              <h2>{item.label}</h2>
              <span>{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
