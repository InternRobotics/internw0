// Content: W0___Tech_Report (5).pdf. Figures: W0___Tech_Report (3)/figs.
// All media live in this project's public directory. Paper links to arXiv; model release links remain disabled.

export type ImageAsset = {
  src: string | null;
  width: number;
  height: number;
  alt: string;
};
export type VideoAsset = ImageAsset & { poster: string | null; type: string };
export type TableRow = { cells: string[]; highlight?: boolean };
export type ReportTable = { id: string; caption: string; columns: string[]; rows: TableRow[] };
export type BenchmarkResult = {
  id: string;
  benchmark: string;
  metric: string;
  value: string;
  detailCaption: string;
  detailColumns: string[];
  detailRows: TableRow[];
};
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
  columns: 1 | 2 | 3 | 4;
  formula?: { left: string[]; right: string[] };
  videos: ExperimentVideo[];
};

export const projectInfo = {
  "name": "InternW0",
  "subtitle": [
    "A Foundational Physical World Model",
    "for Efficient Real-World Interactions"
  ],
  "description": "InternW0 couples future visual prediction with continuous robot control through an asymmetric video–action architecture. A high-capacity video expert provides predictive context, while a lightweight action expert adapts it to incoming observations for efficient, contact-aware interaction.",
  "team": "Physical Intelligence Team, Shanghai AI Laboratory"
};

export const navItems = [
  {
    "label": "Introduction",
    "href": "#introduction"
  },
  {
    "label": "Model",
    "href": "#model"
  },
  {
    "label": "Data",
    "href": "#data"
  },
  {
    "label": "Benchmarks",
    "href": "#benchmarks"
  },
  {
    "label": "Experiments",
    "href": "#experiments"
  },
  {
    "label": "BibTeX",
    "href": "#bibtex"
  }
];

export const authors = [
  {
    "id": "author-1",
    "name": "Physical Intelligence Team, Shanghai AI Laboratory"
  }
];

export const teamLogos: (ImageAsset & { id: string })[] = [
  {
    "id": "affiliation-1",
    "src": "/images/ailab-logo.png",
    "width": 672,
    "height": 390,
    "alt": "Shanghai Artificial Intelligence Laboratory"
  },
  {
    "id": "affiliation-2",
    "src": "/images/InternRobotics-logo.png",
    "width": 739,
    "height": 110,
    "alt": "InternRobotics"
  }
];

export const heroActions: { label: string; href: string | null }[] = [
  {
    "label": "Paper",
    "href": "https://arxiv.org/abs/2609.27656"
  },
  {
    "label": "Github",
    "href": null
  },
  {
    "label": "Huggingface",
    "href": null
  },
  {
    "label": "ModelScope",
    "href": null
  },
  {
    "label": "BibTeX",
    "href": "#bibtex"
  }
];

// Tables 2–4 and Section 6.1. Policy update rate excludes asynchronous video prediction.
export const stats = [
  {
    "id": "libero",
    "value": "98.6%",
    "label": "LIBERO average",
    "detail": "Mean success rate across all four task suites."
  },
  {
    "id": "robotwin-full",
    "value": "93.12%",
    "label": "RoboTwin 2.0-Full",
    "detail": "Average success across clean and randomized settings."
  },
  {
    "id": "robotwin-c2r",
    "value": "75.60%",
    "label": "Clean2Random average",
    "detail": "Clean-only post-training, evaluated on both scene settings."
  },
  {
    "id": "policy-rate",
    "value": "16.47 Hz",
    "label": "Model-side policy updates",
    "detail": "60.73 ms per action update on RTX 5090D; video prediction runs asynchronously."
  }
];

export const figures: Record<"teaser" | "dataRecipe" | "realWorldTasks" | "modelTraining" | "modelInference" | "efficiency" | "egoAblation" | "qualitativeComparison", ImageAsset> = {
  "teaser": {
    "src": "/images/report/overview.png",
    "width": 3300,
    "height": 1575,
    "alt": "InternW0 overview: heterogeneous pretraining data, asynchronous video–action modeling, and simulation results"
  },
  "dataRecipe": {
    "src": "/images/report/egolab.png",
    "width": 2600,
    "height": 482,
    "alt": "EgoLab: egocentric laboratory activities, reconstructed hand annotations, and activity distribution"
  },
  "realWorldTasks": {
    "src": "/images/report/real-world-tasks.png",
    "width": 3135,
    "height": 475,
    "alt": "Five real-world tasks: Make Sandwich, Pick Industrial Parts, Sort Tubes, MoF Experiments, and Quantitative Pipetting"
  },
  "modelTraining": {
    "src": "/images/report/architecture.png",
    "width": 2600,
    "height": 1734,
    "alt": "InternW0 video and action experts coupled through observation-conditioned context routing"
  },
  "modelInference": {
    "src": "/images/report/asynchronous-inference.png",
    "width": 1385,
    "height": 1295,
    "alt": "InternW0 asynchronous inference: a slow video expert guides a fast action expert through context routing"
  },
  "efficiency": {
    "src": "/images/report/efficiency.png",
    "width": 2200,
    "height": 1195,
    "alt": "Critical-path latency and model-side update rate: Motus, Fast-WAM, and InternW0"
  },
  "egoAblation": {
    "src": "/images/report/egolab-ablation.png",
    "width": 1800,
    "height": 1800,
    "alt": "Limited-data RoboTwin Clean2Random ablation comparing no pretraining, robot-only pretraining, and robot plus EgoLab"
  },
  "qualitativeComparison": {
    "src": "/images/report/qualitative-comparison.png",
    "width": 2330,
    "height": 735,
    "alt": "Pouring and pipette tip-attachment examples comparing InternW0, pi 0.5, and Fast-WAM"
  }
};

export const introVideo: VideoAsset = {
  "src": "/videos/intro.mp4",
  "poster": "/videos/intro-poster.jpg",
  "type": "video/mp4",
  "width": 1920,
  "height": 1080,
  "alt": "InternW0 performing a multi-stage laboratory manipulation workflow"
};

export const sections = {
  "introduction": {
    "title": "A Quick Overview of InternW0",
    "lead": "See InternW0 carry out a multi-stage laboratory workflow before exploring the architecture, training data, and evaluation results."
  },
  "model": {
    "title": "Asynchronous video–action modeling with contact-aware control",
    "lead": "InternW0 uses a mixture-of-transformers backbone with separate video and action experts. Observation-conditioned context routing keeps longer-horizon predictions useful as new visual and physical feedback arrives.",
    "trainingDescription": "Joint video–action flow matching learns future visual dynamics and continuous control. A frozen Wan VAE encodes video, while a frozen DINOv3 encoder supplies current visual observations. Robot trajectories supervise both experts; egocentric videos train the video pathway without action labels. Domain-specific interfaces and soft prompts support heterogeneous embodiments, with force and tactile channels added during contact-aware post-training.",
    "inferenceDescription": "Predict slowly, act quickly. The video expert refreshes longer-horizon predictions asynchronously and caches layerwise keys and values. For each action chunk, the latest observation routes and adapts that context before the lightweight action expert generates control. New observations can therefore revise subsequent actions without rerunning the full video predictor at every update."
  },
  "data": {
    "title": "7,233.5 hours across 25 training domains",
    "lead": "Seven datasets combine real-robot trajectories, simulated manipulation, and egocentric laboratory video. A unified 37-dimensional state–action interface and validity masks accommodate different embodiments, while square-root domain sampling balances the training mixture.",
    "figureCaption": "EgoLab contributes 275.4 hours of egocentric laboratory video, covering instrument handling, liquid transfer, mixing, and other wet-lab activities. Reconstructed hand trajectories support filtering; pretraining uses the video-only pathway."
  },
  "benchmarks": {
    "title": "Strong single-arm manipulation and bimanual generalization",
    "lead": "LIBERO evaluates 40 single-arm tasks across spatial, object, goal, and long-horizon suites. RoboTwin 2.0 covers 50 bimanual tasks, with Full and Clean2Random protocols separating in-domain adaptation from generalization to unseen randomized scenes.",
    "caption": "Success rates are reported in percent. Click a benchmark row to view the full comparison and evaluation setting.",
    "ablationTitle": "Egocentric video improves transfer",
    "ablationCaption": "In a limited-data ablation using about 50 hours of robot data, adding about 50 hours of EgoLab improves randomized-scene success from 13.73% to 21.97% (+8.24 percentage points). These ablation results use a smaller corpus than the main Clean2Random result.",
    "efficiencyTitle": "Efficient action updates",
    "efficiencyCaption": "InternW0 takes 60.73 ms per critical-path action update on RTX 5090D, corresponding to a maximum model-side update rate of 16.47 Hz and a 3.13× speedup over Fast-WAM. This measurement includes observation encoding, context routing, and action denoising; asynchronous video-plan generation is excluded."
  },
  "experiments": {
    "title": "From everyday manipulation to scientific workflows",
    "lead": "Five real-world tasks test instruction following, object discrimination, long-horizon coordination, and contact-aware tool use. Four use a dual-arm platform; quantitative pipetting uses a 20-DoF dexterous hand on a 7-DoF arm with hybrid force–position control.",
    "figureCaption": "The real-world suite spans Make Sandwich, Pick Industrial Parts, Sort Tubes, MoF Experiments, and Quantitative Pipetting.",
    "comparisonCaption": "Qualitative comparisons on pouring (top) and pipette tip attachment (bottom). InternW0 aligns the tool before contact-rich execution and uses force feedback to adapt contact, while the illustrated baseline rollouts show misalignment."
  }
};

// Table 1. Robot and video-only supervision are shown separately.
export const dataTables: ReportTable[] = [
  {
    "id": "robot-data",
    "caption": "Robot manipulation data mixture. Six robot datasets supply state–action supervision; domain counts distinguish data sources and configurations rather than unique robot morphologies.",
    "columns": [
      "Source",
      "Type",
      "Domains",
      "Hours",
      "Episodes"
    ],
    "rows": [
      {
        "cells": [
          "InternData-A1",
          "Simulated",
          "6",
          "3,494.3",
          "568,194"
        ]
      },
      {
        "cells": [
          "AgibotWorld",
          "Real",
          "2",
          "2,620.0",
          "158,380"
        ]
      },
      {
        "cells": [
          "RoboCOIN",
          "Real",
          "13",
          "438.1",
          "59,952"
        ]
      },
      {
        "cells": [
          "Galaxea",
          "Real",
          "1",
          "314.9",
          "15,362"
        ]
      },
      {
        "cells": [
          "MolmoAct",
          "Real",
          "1",
          "70.3",
          "3,424"
        ]
      },
      {
        "cells": [
          "RoboDojo",
          "Simulated",
          "1",
          "20.5",
          "3,465"
        ]
      }
    ]
  },
  {
    "id": "egocentric-data",
    "caption": "Egocentric video supervision from EgoLab. Together with the robot datasets, the full mixture contains 811,969 episodes across 25 training domains.",
    "columns": [
      "Source",
      "Hours",
      "Episodes",
      "Supervision"
    ],
    "rows": [
      {
        "cells": [
          "EgoLab",
          "275.4",
          "3,192",
          "Future-video prediction without robot action labels"
        ]
      }
    ]
  }
];

// Tables 2–4. Each comparison retains its original evaluation protocol.
export const benchmarkResults: BenchmarkResult[] = [
  {
    "id": "libero",
    "benchmark": "LIBERO",
    "metric": "Average success rate",
    "value": "98.6%",
    "detailCaption": "LIBERO Full setting (Table 2). Success rates (%) over four task suites; InternW0 is evaluated with 50 rollouts per task across all 40 tasks.",
    "detailColumns": [
      "Method",
      "Spatial",
      "Object",
      "Goal",
      "Long",
      "Average"
    ],
    "detailRows": [
      {
        "cells": [
          "π0",
          "98.0",
          "96.8",
          "94.4",
          "88.4",
          "94.4"
        ]
      },
      {
        "cells": [
          "π0.5",
          "98.8",
          "98.2",
          "98.0",
          "92.4",
          "96.9"
        ]
      },
      {
        "cells": [
          "GR00T-N1.7",
          "97.7",
          "98.5",
          "97.5",
          "94.4",
          "97.0"
        ]
      },
      {
        "cells": [
          "OpenVLA-OFT",
          "97.6",
          "98.4",
          "97.9",
          "94.5",
          "97.1"
        ]
      },
      {
        "cells": [
          "InternVLA-M1",
          "98.0",
          "99.0",
          "93.8",
          "92.6",
          "95.9"
        ]
      },
      {
        "cells": [
          "Xiaomi-Robotics-0",
          "98.8",
          "100.0",
          "98.8",
          "97.2",
          "98.7"
        ]
      },
      {
        "cells": [
          "Motus",
          "96.8",
          "99.8",
          "96.6",
          "97.6",
          "97.7"
        ]
      },
      {
        "cells": [
          "LingBot-VA",
          "98.5",
          "99.6",
          "97.2",
          "98.5",
          "98.5"
        ]
      },
      {
        "cells": [
          "Fast-WAM",
          "98.2",
          "100.0",
          "97.0",
          "95.2",
          "97.6"
        ]
      },
      {
        "cells": [
          "InternW0",
          "99.4",
          "99.4",
          "98.6",
          "97.0",
          "98.6"
        ],
        "highlight": true
      }
    ]
  },
  {
    "id": "robotwin-full",
    "benchmark": "RoboTwin 2.0-Full",
    "metric": "Average success rate",
    "value": "93.12%",
    "detailCaption": "Full setting (Table 3). Models are post-trained with clean and randomized demonstrations and evaluated in both settings. Values are success rates (%).",
    "detailColumns": [
      "Method",
      "Clean",
      "Randomized",
      "Average"
    ],
    "detailRows": [
      {
        "cells": [
          "π0",
          "65.92",
          "58.40",
          "62.16"
        ]
      },
      {
        "cells": [
          "π0.5",
          "82.74",
          "76.76",
          "79.75"
        ]
      },
      {
        "cells": [
          "ABot-M0",
          "81.20",
          "80.40",
          "80.80"
        ]
      },
      {
        "cells": [
          "Motus",
          "88.66",
          "87.02",
          "87.84"
        ]
      },
      {
        "cells": [
          "Fast-WAM",
          "91.88",
          "91.78",
          "91.83"
        ]
      },
      {
        "cells": [
          "LingBot-VA",
          "92.90",
          "91.50",
          "92.20"
        ]
      },
      {
        "cells": [
          "AHA-WAM",
          "93.40",
          "92.20",
          "92.80"
        ]
      },
      {
        "cells": [
          "OpenWAM-α",
          "93.74",
          "93.46",
          "93.60"
        ]
      },
      {
        "cells": [
          "ABot-M0.5",
          "94.00",
          "94.20",
          "94.10"
        ]
      },
      {
        "cells": [
          "InternW0",
          "93.20",
          "93.04",
          "93.12"
        ],
        "highlight": true
      }
    ]
  },
  {
    "id": "robotwin-c2r",
    "benchmark": "RoboTwin 2.0-Clean2Random",
    "metric": "Average success rate",
    "value": "75.60%",
    "detailCaption": "Clean2Random setting (Table 4). Post-training uses only clean demonstrations; randomized scenes are unseen during adaptation. Values are success rates (%).",
    "detailColumns": [
      "Method",
      "Clean",
      "Randomized",
      "Average"
    ],
    "detailRows": [
      {
        "cells": [
          "Fast-WAM",
          "77.8",
          "1.9",
          "39.9"
        ]
      },
      {
        "cells": [
          "X-VLA",
          "68.0",
          "20.9",
          "44.5"
        ]
      },
      {
        "cells": [
          "X-WAM",
          "70.0",
          "25.8",
          "47.9"
        ]
      },
      {
        "cells": [
          "Spatial Forcing",
          "77.2",
          "26.7",
          "52.0"
        ]
      },
      {
        "cells": [
          "π0.5",
          "70.7",
          "46.0",
          "58.4"
        ]
      },
      {
        "cells": [
          "4D-WAM",
          "81.5",
          "41.8",
          "61.6"
        ]
      },
      {
        "cells": [
          "GigaBrain-0.7",
          "66.8",
          "67.9",
          "67.3"
        ]
      },
      {
        "cells": [
          "InternW0",
          "83.20",
          "68.0",
          "75.60"
        ],
        "highlight": true
      }
    ]
  }
];

export const realWorldTasks = [
  {
    "id": "sandwich",
    "title": "Make Sandwich",
    "body": "Pick up two bread slices and a piece of meat, then stack them in the prescribed order."
  },
  {
    "id": "industrial-parts",
    "title": "Pick Industrial Parts",
    "body": "Identify industrial parts and place each one into its matching box."
  },
  {
    "id": "sort-tubes",
    "title": "Sort Tubes",
    "body": "Follow an instruction specifying the arm, tube color, and destination box."
  },
  {
    "id": "mof",
    "title": "MoF Experiments",
    "body": "Complete 15 ordered subtasks for solution preparation, including pouring, funnel removal, flask transfer, stopper insertion, and stirring."
  },
  {
    "id": "pipetting",
    "title": "Quantitative Pipetting",
    "body": "Coordinate five stages of dexterous tool use: pickup and reorientation, tip attachment, aspiration, dispensing, and tip ejection and return."
  }
];

// Table 5. Ordered-subtask progress is distinct from episode success.
export const realWorldResults: ReportTable = {
  "id": "real-world-results",
  "caption": "Results over 15 trials per task with randomized initial object poses (Table 5). Sandwich uses episode success rate; parts and tubes use object-level success rate. MoF and pipetting use ordered-subtask progress rate, with the same VLM for subtask generation across methods. All values are percentages.",
  "columns": [
    "Method",
    "Make Sandwich · SR",
    "Pick Industrial Parts · SR",
    "Sort Tubes · SR",
    "MoF · Progress",
    "Pipetting · Progress"
  ],
  "rows": [
    {
      "cells": [
        "π0.5",
        "73.3",
        "53.1",
        "86.7",
        "50.2",
        "46.7"
      ]
    },
    {
      "cells": [
        "Fast-WAM",
        "40.0",
        "50.6",
        "66.7",
        "10.7",
        "18.7"
      ]
    },
    {
      "cells": [
        "InternW0",
        "73.3",
        "82.7",
        "88.9",
        "68.4",
        "65.3"
      ],
      "highlight": true
    }
  ]
};

// Tables 6–7. Percentages are transcribed from the latest report tables.
export const subtaskResults: (ReportTable & { title: string })[] = [
  {
    "id": "mof-subtasks",
    "caption": "Subtask success rates and overall progress rate (%) from Table 6. Overall progress is the fraction of subtasks completed correctly and in order.",
    "columns": [
      "Subtask",
      "π0.5",
      "Fast-WAM",
      "InternW0"
    ],
    "rows": [
      {
        "cells": [
          "1 · Pick up funnel from rack",
          "100.0",
          "100.0",
          "100.0"
        ]
      },
      {
        "cells": [
          "2 · Insert funnel into flask",
          "100.0",
          "46.7",
          "100.0"
        ]
      },
      {
        "cells": [
          "3 · Pick up graduated cylinder",
          "100.0",
          "13.3",
          "93.3"
        ]
      },
      {
        "cells": [
          "4 · Pour liquid into flask via funnel",
          "73.3",
          "0.0",
          "80.0"
        ]
      },
      {
        "cells": [
          "5 · Place graduated cylinder back",
          "73.3",
          "0.0",
          "80.0"
        ]
      },
      {
        "cells": [
          "6 · Hold flask steady on platform",
          "73.3",
          "0.0",
          "80.0"
        ]
      },
      {
        "cells": [
          "7 · Pick up funnel from flask",
          "73.3",
          "0.0",
          "80.0"
        ]
      },
      {
        "cells": [
          "8 · Insert funnel into rack hole",
          "46.7",
          "0.0",
          "66.7"
        ]
      },
      {
        "cells": [
          "9 · Return to initial position",
          "46.7",
          "0.0",
          "66.7"
        ]
      },
      {
        "cells": [
          "10 · Place flask onto stirrer",
          "33.3",
          "0.0",
          "66.7"
        ]
      },
      {
        "cells": [
          "11 · Pick up stopper from rack",
          "6.7",
          "0.0",
          "66.7"
        ]
      },
      {
        "cells": [
          "12 · Insert stopper into flask",
          "6.7",
          "0.0",
          "66.7"
        ]
      },
      {
        "cells": [
          "13 · Press left button of stirrer",
          "6.7",
          "0.0",
          "26.7"
        ]
      },
      {
        "cells": [
          "14 · Press right button of stirrer",
          "6.7",
          "0.0",
          "26.7"
        ]
      },
      {
        "cells": [
          "15 · Return to initial position",
          "6.7",
          "0.0",
          "26.7"
        ]
      },
      {
        "cells": [
          "Overall progress rate",
          "50.2",
          "10.7",
          "68.4"
        ],
        "highlight": true
      }
    ],
    "title": "MoF Experiments — subtask results"
  },
  {
    "id": "pipetting-subtasks",
    "caption": "Subtask success rates and overall progress rate (%) from Table 7. Contact-aware post-training combines force history with visual and proprioceptive observations.",
    "columns": [
      "Subtask",
      "π0.5",
      "Fast-WAM",
      "InternW0"
    ],
    "rows": [
      {
        "cells": [
          "1 · Pickup & reorientation",
          "93.3",
          "46.7",
          "86.7"
        ]
      },
      {
        "cells": [
          "2 · Tip attachment",
          "40.0",
          "13.3",
          "66.7"
        ]
      },
      {
        "cells": [
          "3 · Liquid aspiration",
          "33.3",
          "13.3",
          "66.7"
        ]
      },
      {
        "cells": [
          "4 · Liquid dispensing",
          "33.3",
          "13.3",
          "60.0"
        ]
      },
      {
        "cells": [
          "5 · Tip ejection & return",
          "33.3",
          "6.7",
          "46.7"
        ]
      },
      {
        "cells": [
          "Overall progress rate",
          "46.7",
          "18.7",
          "65.3"
        ],
        "highlight": true
      }
    ],
    "title": "Quantitative Pipetting — subtask results"
  }
];

export const experimentGroups: ExperimentGroup[] = [
  {
    "id": "everyday-manipulation",
    "title": "Everyday and industrial manipulation",
    "description": "Dual-arm demonstrations of ordered assembly, part sorting, and language-conditioned tube selection.",
    "columns": 3,
    "videos": [
      {
        "id": "make-sandwich",
        "label": "Make Sandwich",
        "condition": "Demo",
        "subject": "Make Sandwich",
        "target": "Task execution",
        "src": "/videos/demos/make-sandwich.mp4",
        "poster": "/videos/demos/make-sandwich.jpg",
        "type": "video/mp4",
        "width": 1920,
        "height": 1080,
        "alt": "InternW0 stacking bread and meat to make a sandwich"
      },
      {
        "id": "pick-industrial-parts",
        "label": "Pick Industrial Parts",
        "condition": "Demo",
        "subject": "Pick Industrial Parts",
        "target": "Task execution",
        "src": "/videos/demos/pick-industrial-parts.mp4",
        "poster": "/videos/demos/pick-industrial-parts.jpg",
        "type": "video/mp4",
        "width": 1920,
        "height": 1080,
        "alt": "InternW0 sorting industrial parts into matching boxes"
      },
      {
        "id": "sort-tubes",
        "label": "Sort Tubes",
        "condition": "Demo",
        "subject": "Sort Tubes",
        "target": "Task execution",
        "src": "/videos/demos/sort-tubes.mp4",
        "poster": "/videos/demos/sort-tubes.jpg",
        "type": "video/mp4",
        "width": 1920,
        "height": 1080,
        "alt": "InternW0 selecting and placing colored tubes with the instructed arm"
      }
    ]
  },
  {
    "id": "mof-experiments",
    "title": "MoF Experiments",
    "description": "Close-up views of flask placement, stopper insertion, and stirrer operation within the 15-stage solution-preparation workflow.",
    "columns": 2,
    "videos": [
      {
        "id": "mof-flask-transfer",
        "label": "Flask placement",
        "condition": "Demo",
        "subject": "Flask placement",
        "target": "Task execution",
        "src": "/videos/demos/A004C048_260910WY.mp4",
        "poster": "/videos/demos/A004C048_260910WY.jpg",
        "type": "video/mp4",
        "width": 1920,
        "height": 1080,
        "alt": "InternW0 transferring a flask onto the stirrer"
      },
      {
        "id": "mof-stopper-stirrer",
        "label": "Stopper insertion & stirring",
        "condition": "Demo",
        "subject": "Stopper insertion & stirring",
        "target": "Task execution",
        "src": "/videos/demos/A004C049_260910YW.mp4",
        "poster": "/videos/demos/A004C049_260910YW.jpg",
        "type": "video/mp4",
        "width": 1920,
        "height": 1080,
        "alt": "InternW0 inserting the flask stopper and operating the stirrer"
      }
    ]
  },
  {
    "id": "quantitative-pipetting",
    "title": "Quantitative Pipetting",
    "description": "A dexterous hand coordinates pipette pickup, tip attachment, aspiration, dispensing, and tip ejection with force-aware control.",
    "columns": 1,
    "videos": [
      {
        "id": "pipetting-video",
        "label": "Quantitative Pipetting",
        "condition": "Demo",
        "subject": "Pipette",
        "target": "Prescribed liquid volume",
        "src": "/videos/demos/quantitative-pipetting.mp4",
        "poster": "/videos/demos/quantitative-pipetting.jpg",
        "type": "video/mp4",
        "width": 1280,
        "height": 720,
        "alt": "InternW0 using a dexterous hand for pipette pickup, tip attachment, liquid transfer, and tip ejection"
      }
    ]
  }
];

export const bibtex = "@misc{cai2026internw0foundationalphysicalworld,\n  title         = {InternW0: A Foundational Physical World Model for Efficient Real-World Interactions},\n  author        = {Jisong Cai and Yao Mu and Ganlin Yang and Zhe Cao and Zhangzheng Tu and Xing Gao\n                   and Kailin Li and Xinyu Zhan and Lixin Yang and Yangkun Zhu and Haoxiang Ma and Ming Zhou\n                   and Qiaojun Yu and Yufei Xue and Liqun He and Yifei Yao and Yifan Zhu and Long Ling\n                   and Bingqi Jiang and Haoyu Guo and Xueyue Zhu and Bowen Zhou and Bin Zhao\n                   and Tianfan Xue and Chunhua Shen and Weinan Zhang},\n  year          = {2026},\n  eprint        = {2609.27656},\n  archivePrefix = {arXiv},\n  primaryClass  = {cs.RO},\n  url           = {https://arxiv.org/abs/2609.27656}\n}";
