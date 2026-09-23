import { ImageIcon, Play } from "lucide-react";

import { cn } from "@/lib/utils";

type MediaPlaceholderProps = {
  kind?: "image" | "video";
  label: string;
  width: number;
  height: number;
  className?: string;
};

export function MediaPlaceholder({
  kind = "image",
  label,
  width,
  height,
  className,
}: MediaPlaceholderProps) {
  const Icon = kind === "video" ? Play : ImageIcon;

  return (
    <div
      aria-label={label + " placeholder"}
      className={cn("media-placeholder", className)}
      data-media-placeholder={kind}
      role="img"
      style={{ aspectRatio: width + " / " + height }}
    >
      <div aria-hidden="true" className="media-placeholder-content">
        <Icon className="media-placeholder-icon" strokeWidth={1.25} />
        <span>xxx</span>
      </div>
    </div>
  );
}
