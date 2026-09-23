import { MediaPlaceholder } from "@/components/media/media-placeholder";
import type { VideoAsset } from "@/data/project-page";
import { assetPath } from "@/lib/asset-path";

type ProjectVideoProps = VideoAsset & {
  className?: string;
  autoPlay?: boolean;
};

export function ProjectVideo({
  src,
  poster,
  type,
  width,
  height,
  alt,
  className,
  autoPlay = false,
}: ProjectVideoProps) {
  if (!src) {
    return (
      <MediaPlaceholder
        className={className}
        height={height}
        kind="video"
        label={alt}
        width={width}
      />
    );
  }

  return (
    <video
      aria-label={alt}
      autoPlay={autoPlay}
      className={className}
      controls
      height={height}
      loop={autoPlay}
      muted={autoPlay}
      playsInline
      poster={poster ? assetPath(poster) : undefined}
      preload="metadata"
      width={width}
    >
      <source src={assetPath(src)} type={type} />
      Your browser does not support this video.{" "}
      <a href={assetPath(src)}>Download the video.</a>
    </video>
  );
}
