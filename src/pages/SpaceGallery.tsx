import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import PlaceholderImage from "@/components/PlaceholderImage";
import FullscreenViewer from "@/components/FullscreenViewer";
import { useState } from "react";
import drawingArea1 from "@/assets/drawing-area-1.png";
import drawingArea2 from "@/assets/drawing-area-2.png";
import drawingArea3 from "@/assets/drawing-area-3.png";
import livingRoom1 from "@/assets/living-room-1.png";
import livingRoom2 from "@/assets/living-room-2.png";
import diningArea1 from "@/assets/dining-area-1.png";
import kitchen1 from "@/assets/kitchen-1.png";
import kitchen2 from "@/assets/kitchen-2.png";
import kitchen3 from "@/assets/kitchen-3.png";
import kidsBedroom1 from "@/assets/kids-bedroom-1.png";
import kidsBedroom2 from "@/assets/kids-bedroom-2.png";
import parentsBedroom1 from "@/assets/parents-bedroom-1.png";
import parentsBedroom2 from "@/assets/parents-bedroom-2.png";
import parentsBedroom3 from "@/assets/parents-bedroom-3.jpg";
import masterBedroom1 from "@/assets/master-bedroom-1.png";
import masterBedroom2 from "@/assets/master-bedroom-2.png";
import masterBedroom3 from "@/assets/master-bedroom-3.png";
import walkIn1 from "@/assets/walk-in-wardrobe-1.png";
import walkIn2 from "@/assets/walk-in-wardrobe-2.png";
import walkIn3 from "@/assets/walk-in-wardrobe-3.jpg";

import pooja1 from "@/assets/pooja-cabinet-1.png";

interface SpaceImage {
  label: string;
  src?: string;
}

interface SpaceInfo {
  title: string;
  description: string;
  images: SpaceImage[];
}

const spaceData: Record<string, SpaceInfo> = {
  "living-room": {
    title: "Living Room",
    description:
      "The living room follows a modern contemporary design language that emphasizes openness, comfort, and visual balance. Neutral tones combined with warm textures and clean furniture lines create a welcoming environment while maintaining a refined and uncluttered aesthetic.",
    images: [{ label: "Living Room – View 1", src: livingRoom1 }, { label: "Living Room – View 2", src: livingRoom2 }],
  },
  "drawing-area": {
    title: "Drawing Area",
    description:
      "The drawing area serves as a transitional space that bridges formal and informal zones of the residence. Thoughtful material choices and balanced proportions create a versatile environment suited for both relaxation and creative engagement.",
    images: [
      { label: "Drawing Area – View 1", src: drawingArea1 },
      { label: "Drawing Area – View 2", src: drawingArea2 },
      { label: "Drawing Area – View 3", src: drawingArea3 },
    ],
  },
  "dining-area": {
    title: "Dining Area",
    description:
      "The dining area is designed to maintain a seamless connection with the surrounding spaces while providing a defined setting for social interaction. The layout focuses on simplicity, balanced lighting, and a cohesive material palette that complements the overall interior theme.",
    images: [{ label: "Dining Area – View 1", src: diningArea1 }],
  },
  kitchen: {
    title: "Kitchen",
    description:
      "The kitchen design prioritizes functionality and efficiency while maintaining a clean and modern appearance. Organized cabinetry, optimized workspace planning, and subtle lighting create a practical environment that integrates smoothly with the overall interior design.",
    images: [{ label: "Kitchen – View 1", src: kitchen1 }, { label: "Kitchen – View 2", src: kitchen2 }, { label: "Kitchen – View 3", src: kitchen3 }],
  },
  "kids-bedroom": {
    title: "Kids Bedroom",
    description:
      "The kids bedroom is designed to create a comfortable and engaging environment that supports both relaxation and daily activities. Soft colors, playful elements, and efficient furniture placement ensure the space remains functional while maintaining a cheerful atmosphere.",
    images: [{ label: "Kids Bedroom – View 1", src: kidsBedroom1 }, { label: "Kids Bedroom – View 2", src: kidsBedroom2 }],
  },
  "parents-bedroom": {
    title: "Parents Bedroom",
    description:
      "The parents bedroom focuses on creating a calm and restful environment through balanced lighting, minimal decorative elements, and a warm neutral color palette. The design emphasizes comfort and simplicity while maintaining an elegant visual character.",
    images: [{ label: "Parents Bedroom – View 1", src: parentsBedroom1 }, { label: "Parents Bedroom – View 2", src: parentsBedroom2 }, { label: "Parents Bedroom – View 3", src: parentsBedroom3 }],
  },
  "master-bedroom": {
    title: "Master Bedroom",
    description:
      "The master bedroom is designed as a private retreat that combines modern aesthetics with a sense of comfort and sophistication. Soft textures, controlled lighting, and a carefully planned layout contribute to a relaxing and visually harmonious space.",
    images: [{ label: "Master Bedroom – View 1", src: masterBedroom1 }, { label: "Master Bedroom – View 2", src: masterBedroom2 }, { label: "Master Bedroom – View 3", src: masterBedroom3 }],
  },
  "walk-in-wardrobe": {
    title: "Walk-in Wardrobe",
    description:
      "The walk-in wardrobe is planned to maximize storage efficiency while maintaining a clean and organized layout. Structured shelving, accessible storage zones, and balanced lighting create a practical dressing space that complements the overall interior design.",
    images: [
  { label: "Walk-in Wardrobe – View 1", src: walkIn1 },
  { label: "Walk-in Wardrobe – View 2", src: walkIn2 },
  { label: "Walk-in Wardrobe – View 3", src: walkIn3 },
],
  },
  "pooja-cabinet": {
    title: "Pooja Cabinet",
    description:
      "The pooja cabinet is designed as a dedicated spiritual space within the residence. Clean lines and warm material tones create a serene setting that respects tradition while harmonizing with the modern contemporary aesthetic of the home.",
    images: [{ label: "Pooja Cabinet – View 1", src: pooja1 }],
  },
};

/** 3 images: hero + description left / 2 stacked images right */
const ThreeImageLayout = ({
  data,
  onImageClick,
}: {
  data: SpaceInfo;
  onImageClick: (img: SpaceImage) => void;
}) => (
  <>
    <FadeIn delay={100}>
      <PlaceholderImage
        label={data.images[0].label}
        src={data.images[0].src}
        aspectRatio="16/9"
        className="rounded-md w-full hover:shadow-lg transition-shadow duration-300"
        onClick={() => onImageClick(data.images[0])}
      />
    </FadeIn>

    <FadeIn delay={200}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-20 items-start">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <p className="font-body text-muted-foreground text-[18px] leading-[1.75] max-w-[480px]">
            {data.description}
          </p>
        </div>
        <div className="lg:col-span-7 flex flex-col gap-5">
          <PlaceholderImage
            label={data.images[1].label}
            src={data.images[1].src}
            aspectRatio="16/9"
            className="rounded-md hover:shadow-lg transition-shadow duration-300"
            onClick={() => onImageClick(data.images[1])}
          />
          <PlaceholderImage
            label={data.images[2].label}
            src={data.images[2].src}
            aspectRatio="16/9"
            className="rounded-md hover:shadow-lg transition-shadow duration-300"
            onClick={() => onImageClick(data.images[2])}
          />
        </div>
      </div>
    </FadeIn>
  </>
);

/** 2 images: hero + image left / description right */
const TwoImageLayout = ({
  data,
  onImageClick,
}: {
  data: SpaceInfo;
  onImageClick: (img: SpaceImage) => void;
}) => (
  <>
    <FadeIn delay={100}>
      <PlaceholderImage
        label={data.images[0].label}
        src={data.images[0].src}
        aspectRatio="16/9"
        className="rounded-md w-full hover:shadow-lg transition-shadow duration-300"
        onClick={() => onImageClick(data.images[0])}
      />
    </FadeIn>

    <FadeIn delay={200}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-20 items-start">
        <div className="lg:col-span-8">
          <PlaceholderImage
            label={data.images[1].label}
            src={data.images[1].src}
            aspectRatio="4/3"
            className="rounded-md hover:shadow-lg transition-shadow duration-300"
            onClick={() => onImageClick(data.images[1])}
          />
        </div>
        <div className="lg:col-span-4 flex flex-col justify-center">
          <p className="font-body text-muted-foreground text-[18px] leading-[1.75] max-w-[480px]">
            {data.description}
          </p>
        </div>
      </div>
    </FadeIn>
  </>
);

/** 1 image: hero + description below */
const OneImageLayout = ({
  data,
  onImageClick,
}: {
  data: SpaceInfo;
  onImageClick: (img: SpaceImage) => void;
}) => (
  <>
    <FadeIn delay={100}>
      <PlaceholderImage
        label={data.images[0].label}
        src={data.images[0].src}
        aspectRatio="16/9"
        className="rounded-md w-full hover:shadow-lg transition-shadow duration-300"
        onClick={() => onImageClick(data.images[0])}
      />
    </FadeIn>

    <FadeIn delay={200}>
      <p className="max-w-[480px] font-body text-muted-foreground text-[18px] leading-[1.75] mt-20">
        {data.description}
      </p>
    </FadeIn>
  </>
);

const SpaceGallery = () => {
  const { space } = useParams<{ space: string }>();
  const data = space ? spaceData[space] : null;
  const [viewerImage, setViewerImage] = useState<SpaceImage | null>(null);

  if (!data) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
          <h1 className="font-heading text-2xl text-foreground mb-4">Space not found</h1>
          <Link to="/projects/duplex-residence" className="font-body text-primary hover:underline">
            ← Back to Duplex Residence
          </Link>
        </div>
      </Layout>
    );
  }

  const imageCount = data.images.length;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <FadeIn>
          <Link
            to="/projects/duplex-residence"
            className="font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-10 inline-block"
          >
            ← Back to Duplex Residence
          </Link>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-2">{data.title}</h1>
          <p className="font-body text-sm text-primary mb-20">Modern Contemporary Duplex Residence</p>
        </FadeIn>

        {imageCount >= 3 && <ThreeImageLayout data={data} onImageClick={setViewerImage} />}
        {imageCount === 2 && <TwoImageLayout data={data} onImageClick={setViewerImage} />}
        {imageCount === 1 && <OneImageLayout data={data} onImageClick={setViewerImage} />}
      </div>

      <FullscreenViewer
        label={viewerImage?.label ?? null}
        src={viewerImage?.src}
        onClose={() => setViewerImage(null)}
      />
    </Layout>
  );
};

export default SpaceGallery;
