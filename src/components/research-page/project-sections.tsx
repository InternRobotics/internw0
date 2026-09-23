import { ArrowRight } from "lucide-react";

import { ProjectImage } from "@/components/media/project-image";
import { ProjectVideo } from "@/components/media/project-video";
import { ExpandableResultsTable } from "@/components/research-page/expandable-results-table";
import { ModelPreview } from "@/components/research-page/model-preview";
import { FigureCard } from "@/components/site/figure-card";
import { SectionShell } from "@/components/site/section-shell";
import {
  benchmarkResults,
  bibtex,
  dataTables,
  experimentGroups,
  figures,
  introVideo,
  realWorldResults,
  realWorldTasks,
  sections,
  subtaskResults,
  type ExperimentGroup,
  type TableRow,
} from "@/data/project-page";

function ResultsTable({ columns, rows }: { columns: string[]; rows: TableRow[] }) {
  return (
    <div className="results-table-shell">
      <table className="results-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} scope="col">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr className={row.highlight ? "is-ours" : undefined} key={rowIndex}>
              {row.cells.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function IntroductionSection() {
  return (
    <SectionShell
      eyebrow="Introduction"
      id="introduction"
      lead={sections.introduction.lead}
      title={sections.introduction.title}
    >
      <FigureCard>
        <ProjectVideo {...introVideo} className="intro-video" />
      </FigureCard>
    </SectionShell>
  );
}

export function ModelSection() {
  return (
    <SectionShell
      className="bg-muted/35"
      eyebrow="Model"
      id="model"
      lead={sections.model.lead}
      title={sections.model.title}
    >
      <FigureCard>
        <ModelPreview />
      </FigureCard>
    </SectionShell>
  );
}

export function DataSection() {
  return (
    <SectionShell
      className="bg-muted/35"
      eyebrow="Data"
      id="data"
      lead={sections.data.lead}
      title={sections.data.title}
    >
      <FigureCard caption={sections.data.figureCaption}>
        <ProjectImage {...figures.dataRecipe} />
      </FigureCard>
      <div className="mt-8 grid gap-6">
        {dataTables.map((table) => (
          <FigureCard caption={table.caption} key={table.id}>
            <ResultsTable columns={table.columns} rows={table.rows} />
          </FigureCard>
        ))}
      </div>
    </SectionShell>
  );
}

export function BenchmarksSection() {
  return (
    <SectionShell
      eyebrow="Benchmarks"
      id="benchmarks"
      lead={sections.benchmarks.lead}
      title={sections.benchmarks.title}
    >
      <FigureCard caption={sections.benchmarks.caption}>
        <ExpandableResultsTable results={benchmarkResults} />
      </FigureCard>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <FigureCard caption={sections.benchmarks.ablationCaption}>
          <h3 className="figure-title">{sections.benchmarks.ablationTitle}</h3>
          <ProjectImage {...figures.egoAblation} className="report-result-figure" />
        </FigureCard>
        <FigureCard caption={sections.benchmarks.efficiencyCaption}>
          <h3 className="figure-title">{sections.benchmarks.efficiencyTitle}</h3>
          <ProjectImage {...figures.efficiency} className="report-result-figure" />
        </FigureCard>
      </div>
    </SectionShell>
  );
}

function ExperimentVideoMatrix({ group }: { group: ExperimentGroup }) {
  return (
    <div className="realworld-video-showcase" id={group.id}>
      <div className="realworld-video-header">
        <h3>{group.title}</h3>
        <p className="realworld-video-description">{group.description}</p>
      </div>
      {group.formula ? (
        <div className="realworld-video-formula">
          {group.formula.left.map((item, index) => (
            <span key={"left-" + index}>{item}</span>
          ))}
          <ArrowRight aria-hidden className="realworld-video-formula-icon" />
          {group.formula.right.map((item, index) => (
            <span key={"right-" + index}>{item}</span>
          ))}
        </div>
      ) : null}
      <div className="realworld-video-scroll">
        <div className={"realworld-video-matrix realworld-video-matrix--" + group.columns}>
          {group.videos.map((video) => (
            <div className="realworld-video-tile" key={video.id}>
              <p className="realworld-video-tile-label">
                {video.label ? (
                  <span>{video.label}</span>
                ) : (
                  <>
                    <strong>{video.condition}:</strong>
                    <span>{video.subject}</span>
                    <ArrowRight aria-hidden className="realworld-video-label-icon" />
                    <span>{video.target}</span>
                  </>
                )}
              </p>
              <ProjectVideo {...video} autoPlay className="realworld-video" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ExperimentsSection() {
  return (
    <SectionShell
      className="bg-muted/35"
      eyebrow="Experiments"
      id="experiments"
      lead={sections.experiments.lead}
      title={sections.experiments.title}
    >
      <div className="grid gap-8">
        <FigureCard
          caption={
            <div className="real-world-caption">
              <p>{sections.experiments.figureCaption}</p>
              <dl className="real-world-caption-grid">
                {realWorldTasks.map((task) => (
                  <div key={task.id}>
                    <dt>{task.title}</dt>
                    <dd>{task.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
          }
        >
          <ProjectImage {...figures.realWorldTasks} />
        </FigureCard>
        <FigureCard caption={realWorldResults.caption}>
          <h3 className="figure-title">Real-world results</h3>
          <ResultsTable columns={realWorldResults.columns} rows={realWorldResults.rows} />
        </FigureCard>
        {experimentGroups.map((group) => (
          <FigureCard key={group.id}>
            <ExperimentVideoMatrix group={group} />
          </FigureCard>
        ))}
        {subtaskResults.map((table) => (
          <details className="subtask-results" key={table.id}>
            <summary>{table.title}</summary>
            <div className="subtask-results-content">
              <ResultsTable columns={table.columns} rows={table.rows} />
              <p>{table.caption}</p>
            </div>
          </details>
        ))}
        <FigureCard caption={sections.experiments.comparisonCaption}>
          <h3 className="figure-title">Contact-aware manipulation</h3>
          <ProjectImage {...figures.qualitativeComparison} />
        </FigureCard>
      </div>
    </SectionShell>
  );
}

export function BibtexSection() {
  return (
    <SectionShell className="bg-muted/35" eyebrow="Citation" id="bibtex" title="BibTeX">
      <pre className="overflow-x-auto rounded-lg border border-border bg-card p-5 text-sm leading-7 text-foreground">
        <code>{bibtex}</code>
      </pre>
    </SectionShell>
  );
}
