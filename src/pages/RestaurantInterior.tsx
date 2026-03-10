import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import ImageGallery from "@/components/ImageGallery";

/* images */

import zoning from "@/assets/zoning_autocad.jpeg";
import furniture from "@/assets/furniture_autocad.jpeg";
import flooring from "@/assets/flooring_autocad.jpeg";
import lighting from "@/assets/lighting_autocad.jpeg";
import ceiling from "@/assets/ceiling_autocad.jpeg";
import a1 from "@/assets/a1.jpeg";

/* drawings */

const plans = [
  {
    label: "Zoning Layout",
    src: zoning,
  },
  {
    label: "Furniture Layout",
    src: furniture,
  },
  {
    label: "Flooring Layout",
    src: flooring,
  },
  {
    label: "Lighting Layout",
    src: lighting,
  },
  {
    label: "Ceiling Layout",
    src: ceiling,
  },
];

const RestaurantInterior = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        {/* Title */}

        <FadeIn>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-2">
            Restaurant Interior – Traditional & Industrial Theme
          </h1>

          <p className="font-body text-sm text-primary mb-6">
            Commercial Interior
          </p>
        </FadeIn>

        {/* Description */}

        <FadeIn delay={100}>
          <p className="max-w-3xl font-body text-muted-foreground leading-relaxed mb-16">
            This project explores a restaurant design where the dining areas follow
            a traditional theme while the bar area incorporates an industrial style
            using exposed materials, metal finishes, and modern lighting.
          </p>
        </FadeIn>

        {/* Drawings */}

        <FadeIn delay={200}>
          <h2 className="font-heading text-2xl text-foreground mb-6">
            Drawings & Plans
          </h2>

          <ImageGallery images={plans} columns={2} />
        </FadeIn>

        {/* Orthographic */}

        <FadeIn delay={300}>
          <h2 className="font-heading text-2xl text-foreground mt-20 mb-6">
            2D Orthographic Projection
          </h2>

          <Link
            to="/projects/restaurant-interior/orthographic"
            className="block border border-border rounded-sm overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={a1}
              alt="2D Orthographic Projection"
              className="w-full h-[260px] object-cover"
            />

            <p className="text-center text-sm font-body py-3">
              Open Orthographic Drawings
            </p>

          </Link>

        </FadeIn>

      </div>
    </Layout>
  );
};

export default RestaurantInterior;