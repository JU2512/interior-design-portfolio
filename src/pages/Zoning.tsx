import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

import zoning1 from "@/assets/zoning1.png";
import zoning2 from "@/assets/zoning2.png";
import zoning3 from "@/assets/zoning3.png";
import zoning4 from "@/assets/zoning4.png";

const Zoning = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        <FadeIn>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-12">
            Zoning Layout
          </h1>
        </FadeIn>

        <FadeIn delay={100}>
          <img src={zoning1} className="w-full mb-12 rounded-sm" />
        </FadeIn>

        <FadeIn delay={200}>
          <img src={zoning2} className="w-full mb-12 rounded-sm" />
        </FadeIn>

        <FadeIn delay={300}>
          <img src={zoning3} className="w-full mb-12 rounded-sm" />
        </FadeIn>

        <FadeIn delay={400}>
          <img src={zoning4} className="w-full rounded-sm" />
        </FadeIn>

      </div>
    </Layout>
  );
};

export default Zoning;