import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

/* hero images */
import livingRoom from "@/assets/living-room-1.png";
import drawingArea from "@/assets/drawing-area-1.png";
import diningArea from "@/assets/dining-area-1.png";
import kitchen from "@/assets/kitchen-1.png";
import kidsBedroom from "@/assets/kids-bedroom-1.png";
import parentsBedroom from "@/assets/parents-bedroom-1.png";
import masterBedroom from "@/assets/master-bedroom-1.png";
import walkin from "@/assets/walk-in-wardrobe-1.png";
import pooja from "@/assets/pooja-cabinet-1.png";

import moodboard from "@/assets/mood-board.jpeg";

/* autocad images */
import autoFurniture from "@/assets/auto_furniture.jpeg";

/* AUTOCAD DRAWING PREVIEW IMAGES */

import zoning1 from "@/assets/zoning1.png";
import furniture1 from "@/assets/furniture1.png";
import ceiling1 from "@/assets/ceiling1.png";
import lighting1 from "@/assets/lighting1.png";


/* AUTOCAD DRAWINGS */

const autocadDrawings = [
  {
    title: "Zoning",
    slug: "zoning",
    image: zoning1,
  },
  {
    title: "Furniture Layout",
    slug: "furniture-layout",
    image: furniture1,
  },
  {
    title: "Ceiling Layout",
    slug: "ceiling-layout",
    image: ceiling1,
  },
  {
    title: "Lighting Layout",
    slug: "lighting-layout",
    image: lighting1,
  },
];



/* 3D VISUALIZATIONS */

const spaces = [
  { title: "Drawing Area", slug: "drawing-area", image: drawingArea },
  { title: "Pooja Unit", slug: "pooja-cabinet", image: pooja },
  { title: "Living Area", slug: "living-room", image: livingRoom },
  { title: "Kitchen", slug: "kitchen", image: kitchen },
  { title: "Dining Area", slug: "dining-area", image: diningArea },
  { title: "Master Bedroom", slug: "master-bedroom", image: masterBedroom },
  { title: "Walk-in Wardrobe", slug: "walk-in-wardrobe", image: walkin },
  { title: "Parents Bedroom", slug: "parents-bedroom", image: parentsBedroom },
  { title: "Kids Bedroom", slug: "kids-bedroom", image: kidsBedroom },
];



const DuplexResidence = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        {/* TITLE */}

        <FadeIn>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-2">
            Modern Contemporary Duplex Residence
          </h1>

          <p className="font-body text-sm text-primary mb-6">
            Residential Interior
          </p>

          <p className="font-body text-xs text-muted-foreground mb-10">
            AutoCAD · SketchUp · V-Ray 
          </p>
        </FadeIn>



        {/* DESCRIPTION */}

        <FadeIn delay={100}>
          <p className="max-w-3xl font-body text-muted-foreground leading-relaxed mb-16">
            This duplex residence is designed using a modern contemporary approach that emphasizes openness,
            balanced proportions, and a calm neutral material palette. The design focuses on creating comfortable
            living environments through clean furniture arrangements, controlled lighting, and a cohesive visual
            language that connects all interior spaces.
          </p>
        </FadeIn>



        {/* CONCEPT */}

        <FadeIn delay={150}>
          <h2 className="font-heading text-2xl text-foreground mb-6">
            Concept
          </h2>

          <img
            src={moodboard}
            alt="Moodboard"
            className="w-full rounded-sm object-cover"
          />
        </FadeIn>



        {/* AUTOCAD DRAWINGS */}

        <FadeIn delay={200}>
          <h2 className="font-heading text-2xl text-foreground mt-20 mb-8">
            AutoCAD Drawings
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {autocadDrawings.map((drawing, i) => (

              <FadeIn key={drawing.slug} delay={220 + i * 60}>

                <Link
                  to={`/projects/duplex-residence/autocad/${drawing.slug}`}
                  className="group block"
                >

                  <div className="overflow-hidden rounded-sm">

                    <div className="transition-transform duration-500 group-hover:scale-105">

                      {drawing.image ? (

                        <img
                          src={drawing.image}
                          alt={drawing.title}
                          className="w-full h-[260px] object-cover"
                        />

                      ) : (

                        <div className="w-full h-[260px] bg-muted flex items-center justify-center text-sm text-muted-foreground">
                          {drawing.title}
                        </div>

                      )}

                    </div>

                  </div>

                  <h3 className="mt-3 font-body text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                    {drawing.title}
                  </h3>

                </Link>

              </FadeIn>

            ))}

          </div>

        </FadeIn>



        {/* 3D VISUALIZATIONS */}

        <FadeIn delay={250}>
          <h2 className="font-heading text-2xl text-foreground mt-20 mb-8">
            3D Visualizations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {spaces.map((space, i) => (

              <FadeIn key={space.slug} delay={280 + i * 60}>

                <Link
                  to={`/projects/duplex-residence/${space.slug}`}
                  className="group block"
                >

                  <div className="overflow-hidden rounded-sm">

                    <div className="transition-transform duration-500 group-hover:scale-105">

                      <img
                        src={space.image}
                        alt={space.title}
                        className="w-full h-[260px] object-cover"
                      />

                    </div>

                  </div>

                  <h3 className="mt-3 font-body text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                    {space.title}
                  </h3>

                </Link>

              </FadeIn>

            ))}

          </div>

        </FadeIn>

      </div>
    </Layout>
  );
};

export default DuplexResidence;