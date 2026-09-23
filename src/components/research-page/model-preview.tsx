"use client";

import { useState } from "react";

import { ProjectImage } from "@/components/media/project-image";
import { figures, sections } from "@/data/project-page";

export function ModelPreview() {
  const [mode, setMode] = useState<"training" | "inference">("training");
  const training = mode === "training";

  return (
    <div className="model-preview" data-mode={mode}>
      <div className="tf-toolbar">
        <div aria-label="Diagram mode" className="tf-toggle" role="group">
          <button
            aria-controls="model-diagram"
            aria-pressed={training}
            onClick={() => setMode("training")}
            type="button"
          >
            Training
          </button>
          <button
            aria-controls="model-diagram"
            aria-pressed={!training}
            onClick={() => setMode("inference")}
            type="button"
          >
            Inference
          </button>
        </div>
      </div>
      <div className="model-preview-figure" id="model-diagram">
        <ProjectImage {...(training ? figures.modelTraining : figures.modelInference)} />
      </div>
      <p aria-live="polite" className="tf-blurb">
        {training ? sections.model.trainingDescription : sections.model.inferenceDescription}
      </p>
    </div>
  );
}
