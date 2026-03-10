import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

import a1 from "@/assets/a1.jpeg";
import a2 from "@/assets/a2.jpeg";
import a3 from "@/assets/a3.jpeg";
import a4 from "@/assets/a4.jpeg";

const images = [
  { src: a1, label: "Orthographic Projection – Cafe Dining Area" },
  { src: a2, label: "Orthographic Projection – Owner Cabin" },
  { src: a3, label: "Orthographic Projection – Takeaway Reception" },
  { src: a4, label: "Orthographic Projection – Banquet Hall" },
];

const RestaurantOrthographic = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        <FadeIn>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-12">
            2D Orthographic Projection
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {images.map((img, i) => (

            <FadeIn key={i} delay={120 + i * 60}>

              <img
                src={img.src}
                alt={img.label}
                className="w-full rounded-sm"
              />

              <p className="mt-3 text-sm text-muted-foreground">
                {img.label}
              </p>

            </FadeIn>

          ))}

        </div>

      </div>
    </Layout>
  );
};

export default RestaurantOrthographic;