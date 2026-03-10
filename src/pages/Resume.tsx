import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin } from "lucide-react";
// @ts-ignore
import html2pdf from "html2pdf.js";

const Resume = () => {

  const downloadResume = () => {
    const element = document.getElementById("resume-content");
    const button = document.getElementById("download-btn");

    if (!element) return;

    // hide button in pdf
    if (button) button.style.display = "none";

    const options: any = {
      margin: 0.5,
      filename: "deepak-urade-resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 2,
        scrollY: 0
      },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait"
      },
      pagebreak: {
        mode: ["avoid-all", "css", "legacy"]
      }
    };

    html2pdf()
      .set(options)
      .from(element)
      .save()
      .then(() => {
        if (button) button.style.display = "inline-flex";
      });
  };

  return (
    <Layout>

      {/* resume container */}
      <div
        id="resume-content"
        className="max-w-[850px] mx-auto px-6 py-12"
      >

        <FadeIn>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-2">
            Deepak Urade
          </h1>

          <div className="flex flex-wrap gap-4 font-body text-sm text-muted-foreground mt-3 mb-12">

            <a
              href="mailto:deepakurade2@gmail.com"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Mail size={14}/> deepakurade2@gmail.com
            </a>

            <a
              href="tel:+919390173272"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Phone size={14}/> +91 9390173272
            </a>

            <span className="flex items-center gap-1.5">
              <MapPin size={14}/> Hyderabad
            </span>

          </div>
        </FadeIn>

        {/* Career Objective */}

        <FadeIn delay={100}>
          <h2 className="font-heading text-2xl text-foreground mb-4">
            Career Objective
          </h2>

          <p className="font-body text-muted-foreground leading-relaxed mb-12">
            To obtain an entry-level Interior Designer role where I can apply my
            skills in space planning, AutoCAD, 3Ds Max, SketchUp and material
            selection to create functional and aesthetic interiors while
            continuing to learn and grow professionally.
          </p>
        </FadeIn>

        {/* Education */}

        <FadeIn delay={150}>
          <h2 className="font-heading text-2xl text-foreground mb-8">
            Education
          </h2>
        </FadeIn>

        <div className="space-y-8 mb-12">

          <FadeIn delay={180}>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-heading text-lg text-foreground">
                PG Diploma in Interior Design
              </h3>

              <p className="font-body text-sm text-muted-foreground">
                Aesthetic Of Interior Academy
              </p>

              <p className="font-body text-xs text-primary mt-1">
                2024 – 2025 · Percentage: 9.00
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={220}>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-heading text-lg text-foreground">
                Bachelor of Science (B.Sc) Computer Science
              </h3>

              <p className="font-body text-sm text-muted-foreground">
                Aurora Degree College
              </p>

              <p className="font-body text-xs text-primary mt-1">
                2021 – 2024 · Percentage: 8.00
              </p>
            </div>
          </FadeIn>

        </div>

        {/* Trainings */}

        <FadeIn delay={250}>
          <h2 className="font-heading text-2xl text-foreground mb-8">
            Trainings / Certifications
          </h2>
        </FadeIn>

        <div className="space-y-8 mb-12">

          <FadeIn delay={280}>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-heading text-lg text-foreground">
                3Ds Max
              </h3>

              <p className="font-body text-sm text-muted-foreground">
                Aesthetic Of Interior Academy, Hyderabad
              </p>

              <p className="font-body text-xs text-primary mt-1">
                Oct 2025 – Present
              </p>
            </div>
          </FadeIn>

        </div>

        {/* Projects */}

        <FadeIn delay={300}>
          <h2 className="font-heading text-2xl text-foreground mb-8">
            Projects
          </h2>
        </FadeIn>

        <div className="space-y-8 mb-12">

          <FadeIn delay={330}>
            <div className="border-l-2 border-primary pl-6">

              <h3 className="font-heading text-lg text-foreground">
                Design Studio 2
              </h3>

              <p className="font-body text-xs text-primary mt-1 mb-2">
                Aug 2025 – Sep 2025
              </p>

              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Developed complete restaurant layout drawings in AutoCAD
                including space planning, furniture layout, and detailed
                2D plans.
              </p>

            </div>
          </FadeIn>

          <FadeIn delay={370}>
            <div className="border-l-2 border-primary pl-6">

              <h3 className="font-heading text-lg text-foreground">
                Design Studio 1
              </h3>

              <p className="font-body text-xs text-primary mt-1 mb-2">
                Jan 2025 – Jun 2025
              </p>

              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Developed a complete hand drafted 4BHK residential project
                including layouts, furniture planning, detailed drawings
                and interior perspective views.
              </p>

            </div>
          </FadeIn>

        </div>

        {/* Skills */}

        <FadeIn delay={400}>
          <h2 className="font-heading text-2xl text-foreground mb-6">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3 mb-12">
            {["AutoCAD","SketchUp","3Ds Max","V-Ray"].map((skill) => (
              <span
                key={skill}
                className="font-body text-sm px-4 py-2 bg-card border border-border rounded-sm text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Extracurricular */}

        <FadeIn delay={430}>
          <h2 className="font-heading text-2xl text-foreground mb-6">
            Extracurricular Activities
          </h2>

          <ul className="space-y-3 mb-12">

            {[
              "Created interior design case studies and concept presentations",
              "Conducted site visits and studied materials, lighting, and finishes",
              "Hand drafted a 4BHK flat layout and interior perspective drawings with proper detailing"
            ].map((item,i)=>(
              <li
                key={i}
                className="font-body text-sm text-muted-foreground flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"/>
                {item}
              </li>
            ))}

          </ul>
        </FadeIn>

        {/* Download Button */}

        <FadeIn delay={460}>
          <Button
            id="download-btn"
            onClick={downloadResume}
            className="rounded-none px-8 py-5 gap-2"
          >
            <Download size={16}/> Download Resume
          </Button>
        </FadeIn>

      </div>

    </Layout>
  );
};

export default Resume;