import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import profile from "@/assets/profile.png";
import sketchupLogo from "@/assets/sketchup-logo.jfif";
import vrayLogo from "@/assets/vray-logo.png";

const softwareSkills = [
  { name: "AutoCAD", logo: "https://img.icons8.com/color/96/autocad.png" },
  { name: "SketchUp", logo: sketchupLogo },
  { name: "3Ds Max", logo: "https://img.icons8.com/color/96/3ds-max.png" },
  { name: "V-Ray", logo: vrayLogo },
];

const About = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        <FadeIn>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-12">
            About Me
          </h1>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

            {/* Text */}
            <div className="space-y-6 font-body text-muted-foreground leading-relaxed flex flex-col justify-center">
              <p>
                I am an interior design student with a background in computer science and a strong interest in spatial
                planning and functional design. My work focuses on creating interiors that balance aesthetics, usability,
                and thoughtful material selection.
              </p>

              <p>
                Through academic projects I have developed experience in AutoCAD layout planning, 3D visualization, and
                interior concept development. I enjoy exploring how materials, lighting, and spatial design work together
                to create comfortable environments.
              </p>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src={profile}
                alt="Profile"
                className="rounded-lg w-full max-w-sm object-cover"
              />
            </div>

          </div>
        </FadeIn>

        {/* Software Skills */}
        <FadeIn delay={200}>
          <h2 className="font-heading text-2xl text-foreground mt-20 mb-10">
            Software Skills
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {softwareSkills.map((skill, i) => (
            <FadeIn key={skill.name} delay={250 + i * 80}>
              <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
                <span className="font-body text-sm text-foreground text-center">
                  {skill.name}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </Layout>
  );
};

export default About;