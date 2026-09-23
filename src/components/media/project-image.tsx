import Image from "next/image";

import { MediaPlaceholder } from "@/components/media/media-placeholder";
import type { ImageAsset } from "@/data/project-page";
import { assetPath } from "@/lib/asset-path";
import { cn } from "@/lib/utils";

type ProjectImageProps = ImageAsset & {
  className?: string;
  priority?: boolean;
};

export function ProjectImage({
  src,
  alt,
  width,
  height,
  className,
  priority,
}: ProjectImageProps) {
  if (!src) {
    return (
      <MediaPlaceholder
        className={className}
        height={height}
        label={alt}
        width={width}
      />
    );
  }

  return (
    <Image
      alt={alt}
      className={cn("h-auto w-full rounded-md bg-white", className)}
      height={height}
      priority={priority}
      src={assetPath(src)}
      width={width}
    />
  );
}
