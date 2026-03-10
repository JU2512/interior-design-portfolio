import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

import furniture1 from "@/assets/furniture1.png";
import furniture2 from "@/assets/furniture2.jpeg";

const FurnitureLayout = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        <FadeIn>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-12">
            Furniture Layout
          </h1>
        </FadeIn>

        <FadeIn delay={100}>
          <img src={furniture1} className="w-full mb-16 rounded-sm" />
        </FadeIn>

        <FadeIn delay={200}>
          <img src={furniture2} className="w-full rounded-sm" />
        </FadeIn>

      </div>
    </Layout>
  );
};

export default FurnitureLayout;