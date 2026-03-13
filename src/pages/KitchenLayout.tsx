import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

import kitchenLayout1 from "@/assets/KitchenLayout1.jpeg";
import kitchenLayout2 from "@/assets/KitchenLayout2.jpeg";

const KitchenLayout = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        {/* Title */}

        <FadeIn>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-12">
            2d Orthographic Projection of Kitchen
          </h1>
        </FadeIn>

        {/* Main Kitchen Drawing */}

        <FadeIn delay={100}>
          <img
            src={kitchenLayout1}
            alt="Kitchen Layout Plan and Elevations"
            className="w-full rounded-sm mb-16"
          />
        </FadeIn>

        {/* Furniture Details */}

        <FadeIn delay={200}>
          <img
            src={kitchenLayout2}
            alt="Kitchen Furniture Detail"
            className="w-full rounded-sm"
          />
        </FadeIn>

      </div>
    </Layout>
  );
};

export default KitchenLayout;