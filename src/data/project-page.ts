// Replace xxx and null URLs when InternW0 content is ready.
// Media paths are relative to public, e.g. "/images/teaser.png".
export const projectInfo = {
  name: "InternW0",
  subtitle: ["xxx", "xxx"],
  description: "InternW0 uses xxx.",
  team: "Physical Intelligence Team, Shanghai AI Laboratory",
};

export const navItems = [
  { label: "Introduction", href: "#introduction" },
  { label: "Model", href: "#model" },
  { label: "Data", href: "#data" },
  { label: "Benchmarks", href: "#benchmarks" },
  { label: "Experiments", href: "#experiments" },
  { label: "BibTeX", href: "#bibtex" },
];

export type ImageAsset = {
  src: string | null;
  width: number;
  height: number;
  alt: string;
};
export type VideoAsset = ImageAsset & {
  poster: string | null;
  type: string;
};

export const authors = [{ id: "author-1", name: projectInfo.team }];
export const teamLogos: (ImageAsset & { id: string })[] = [
  {
    id: "affiliation-1",
    src: "/images/ailab-logo.png",
    width: 672,
    height: 390,
    alt: "Shanghai Artificial Intelligence Laboratory",
  },
  {
    id: "affiliation-2",
    src: "/images/InternRobotics-logo.png",
    width: 739,
    height: 110,
    alt: "InternRobotics",
  },
];
export const heroActions: { label: string; href: string | null }[] = [
  { label: "Paper", href: null },
  { label: "Github", href: null },
  { label: "Huggingface", href: null },
  { label: "ModelScope", href: null },
  { label: "BibTeX", href: "#bibtex" },
];
export const stats = Array.from({ length: 4 }, (_, index) => ({
  id: "stat-" + (index + 1), value: "xxx", label: "xxx", detail: "xxx",
}));

export const figures: Record<
  "teaser" | "dataRecipe" | "realWorldTasks" | "modelTraining" | "modelInference",
  ImageAsset
> = {
  teaser: { src: null, width: 2320, height: 1493, alt: "InternW0 overview" },
  dataRecipe: { src: null, width: 3375, height: 1595, alt: "InternW0 training data" },
  realWorldTasks: { src: null, width: 1722, height: 366, alt: "InternW0 experiments" },
  modelTraining: { src: null, width: 1000, height: 494, alt: "InternW0 training architecture" },
  modelInference: { src: null, width: 1000, height: 494, alt: "InternW0 inference architecture" },
};
export const introVideo: VideoAsset = {
  src: "/videos/intro.mp4",
  poster: "/videos/intro-poster.jpg",
  type: "video/mp4",
  width: 1920, height: 1080, alt: "InternW0 introduction video",
};
export const sections = {
  introduction: { title: "A Quick Overview of InternW0", lead: "xxx" },
  model: { title: "xxx", lead: "InternW0 uses xxx.", trainingDescription: "xxx", inferenceDescription: "xxx" },
  data: { title: "xxx", lead: "xxx", figureCaption: "xxx" },
  benchmarks: {
    title: "Broad simulation gains across static, robust, dynamic, and long-horizon benchmarks",
    lead: "xxx",
    caption: "Click a benchmark row to view the full table.",
  },
  experiments: { title: "xxx", lead: "xxx", figureCaption: "xxx" },
};

export type TableRow = { cells: string[]; highlight?: boolean };
export const dataTables: { id: string; caption: string; columns: string[]; rows: TableRow[] }[] = [
  {
    id: "data-1", caption: "Robot manipulation data mixture.",
    columns: ["Source", "Type", "Episodes", "Frames", "Weight"],
    rows: Array.from({ length: 6 }, () => ({ cells: ["xxx", "xxx", "xxx", "xxx", "xxx"] })),
  },
  {
    id: "data-2", caption: "Multimodal co-training data from InternVLA-M1.",
    columns: ["Source", "Samples", "Role"],
    rows: Array.from({ length: 4 }, () => ({ cells: ["xxx", "xxx", "xxx"] })),
  },
];
export type BenchmarkResult = {
  id: string;
  benchmark: string;
  metric: string;
  value: string;
  detailCaption: string;
  detailColumns: string[];
  detailRows: TableRow[];
};
// Retain the template's table shapes without retaining research results.
export const benchmarkResults: BenchmarkResult[] = [
  { columns: 6, rows: 7 }, { columns: 4, rows: 10 },
  { columns: 3, rows: 7 }, { columns: 6, rows: 10 },
  { columns: 9, rows: 6 }, { columns: 7, rows: 6 },
].map(({ columns, rows }, index) => ({
  id: "benchmark-" + (index + 1),
  benchmark: "xxx", metric: "xxx", value: "xxx", detailCaption: "xxx",
  detailColumns: Array.from({ length: columns }, (_, column) => column === 0 ? "Method" : "xxx"),
  detailRows: Array.from({ length: rows }, (_, row) => ({
    cells: Array.from({ length: columns }, (_, column) =>
      row === rows - 1 && column === 0 ? projectInfo.name : "xxx",
    ),
    highlight: row === rows - 1,
  })),
}));
export const realWorldTasks = Array.from({ length: 4 }, (_, index) => ({
  id: "task-" + (index + 1), title: "xxx", body: "xxx",
}));
export type ExperimentVideo = VideoAsset & {
  id: string;
  label?: string;
  condition: string;
  subject: string;
  target: string;
};
export type ExperimentGroup = {
  id: string;
  title: string;
  description: string;
  columns: 2 | 4;
  formula?: { left: string[]; right: string[] };
  videos: ExperimentVideo[];
};
function videoPlaceholders(group: string, count: number): ExperimentVideo[] {
  return Array.from({ length: count }, (_, index) => ({
    id: "experiment-" + group + "-video-" + (index + 1),
    condition: "xxx", subject: "xxx", target: "xxx",
    src: null, poster: null, type: "video/mp4",
    width: 1280, height: 720,
    alt: "InternW0 experiment " + group + ", video " + (index + 1),
  }));
}
export const experimentGroups: ExperimentGroup[] = [
  {
    id: "experiment-1", title: "Demos", description: "xxx", columns: 2,
    videos: [
      {
        id: "demo-1",
        label: "Demo 1",
        condition: "xxx", subject: "xxx", target: "xxx",
        src: "/videos/demos/A004C048_260910WY.mp4",
        poster: "/videos/demos/A004C048_260910WY.jpg",
        type: "video/mp4",
        width: 1920, height: 1080,
        alt: "InternW0 demo 1",
      },
      {
        id: "demo-2",
        label: "Demo 2",
        condition: "xxx", subject: "xxx", target: "xxx",
        src: "/videos/demos/A004C049_260910YW.mp4",
        poster: "/videos/demos/A004C049_260910YW.jpg",
        type: "video/mp4",
        width: 1920, height: 1080,
        alt: "InternW0 demo 2",
      },
    ],
  },
  {
    id: "experiment-2", title: "xxx", description: "xxx", columns: 4,
    videos: videoPlaceholders("2", 8),
  },
  {
    id: "experiment-3", title: "xxx", description: "xxx", columns: 4,
    videos: videoPlaceholders("3", 8),
  },
];
export const bibtex = [
  "@misc{internw0,",
  "  title  = {InternW0: xxx},",
  "  author = {xxx},",
  "  year   = {xxx},",
  "  url    = {xxx}",
  "}",
].join("\n");
