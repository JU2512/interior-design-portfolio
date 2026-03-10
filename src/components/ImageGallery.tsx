import { useState } from "react";
import { Link } from "react-router-dom";
import PlaceholderImage from "./PlaceholderImage";
import FullscreenViewer from "./FullscreenViewer";

interface GalleryImage {
  label: string;
  src?: string;
  link?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/4";
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: number;
}

const ImageGallery = ({ images, columns = 3 }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const gridCols =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  const selected = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <>
      <div className={`grid ${gridCols} gap-6`}>
        {images.map((img, i) => {

          // NAVIGATION CARD
          if (img.link) {
            return (
              <Link key={i} to={img.link} className="block">
                <div className="overflow-hidden rounded-sm border border-border hover:shadow-lg transition">
                  <PlaceholderImage label={img.label} aspectRatio="4/3" />
                  <p className="text-sm font-body text-center py-3">
                    {img.label}
                  </p>
                </div>
              </Link>
            );
          }

          // IMAGE PREVIEW CARD
          return (
            <div
              key={i}
              className="cursor-pointer overflow-hidden rounded-sm border border-border hover:shadow-lg transition"
              onClick={() => setSelectedIndex(i)}
            >
              {img.src ? (
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full object-cover"
                  style={{ aspectRatio: img.aspectRatio || "4/3" }}
                />
              ) : (
                <PlaceholderImage
                  label={img.label}
                  aspectRatio={img.aspectRatio || "4/3"}
                />
              )}

              <p className="text-sm font-body text-center py-3">
                {img.label}
              </p>
            </div>
          );
        })}
      </div>

      <FullscreenViewer
        label={selected?.label ?? null}
        src={selected?.src}
        onClose={() => setSelectedIndex(null)}
      />
    </>
  );
};

export default ImageGallery;