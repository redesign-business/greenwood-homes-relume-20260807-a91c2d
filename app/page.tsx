import { Cta3 } from "@/components/relume/Cta3";
import { Footer3 } from "@/components/relume/Footer3";
import { Header30 } from "@/components/relume/Header30";
import { Navbar1 } from "@/components/relume/Navbar1";
import { Portfolio12 } from "@/components/relume/Portfolio12";
import { Stats10 } from "@/components/relume/Stats10";
import { Testimonial1 } from "@/components/relume/Testimonial1";

const logo = "/images/gwhweblogo1020-4faa02ba82.png";
const projectButton = { title: "Discuss your home", variant: "link" as const, size: "link" as const };

export default function Home() {
  return (
    <main>
      <Navbar1
        logo={{ url: "#top", src: logo, alt: "Greenwood Homes" }}
        navLinks={[
          { title: "Portfolio", url: "#portfolio" },
          { title: "About", url: "#about" },
          { title: "Testimonials", url: "#testimonials" },
        ]}
        buttons={[{ title: "Discuss your home", href: "#contact", size: "sm" }]}
      />
      <div id="top">
        <Header30
          heading="Where building a home is a work of art."
          description="Award-winning custom homes, renovations, and construction management across the West and Hawaii."
          buttons={[{ title: "Discuss your home", href: "#contact", variant: "alternate" }]}
          image={{ src: "/images/19-6e303dc678.jpg", alt: "Clear Creek Tahoe custom home by Greenwood Homes" }}
        />
      </div>
      <div id="about">
        <Stats10
          heading="Quality construction, professionally delivered since 1998."
          stats={[
            { percentage: "50+", heading: "Custom homes completed" },
            { percentage: "7", heading: "Tahoe Quarterly awards" },
            { percentage: "5", heading: "States with full construction divisions" },
          ]}
          image={{ src: "/images/kahalawai_04-b3ab15fa86.jpeg", alt: "Custom ocean-view residence interior" }}
        />
      </div>
      <Portfolio12
        tagline="Selected residences"
        heading="Built for the place. Built for a lifetime."
        description="From the Sierra to Kauai, each residence pairs demanding craftsmanship with a disciplined, transparent building process."
        projects={[
          {
            title: "Austin Cabin",
            description: "A richly detailed Martis Camp residence recognized with a 2014 Craftsmanship Award.",
            image: { src: "/images/xlg_121-02a614edd7.jpg", alt: "Austin Cabin at dusk in Martis Camp" },
            url: "#contact",
            button: projectButton,
            tags: [{ label: "Lake Tahoe", url: "#portfolio" }, { label: "Award winner", url: "#about" }],
          },
          {
            title: "Mali‘e",
            description: "Indoor-outdoor island architecture shaped around water, horizon, and effortless living.",
            image: { src: "/images/014-2ca92fe409.jpg", alt: "Mali'e residence and infinity pool in Hawaii" },
            url: "#contact",
            button: projectButton,
            tags: [{ label: "Hawaii", url: "#portfolio" }, { label: "Custom home", url: "#portfolio" }],
          },
          {
            title: "Minimalist Luxury",
            description: "A composed mountain home where modern lines meet the quiet texture of the forest.",
            image: { src: "/images/incline-village-minimalist-luxury-greenwood-homes-013-1024x683-e680462b0c.jpg", alt: "Minimalist luxury home in Incline Village" },
            url: "#contact",
            button: projectButton,
            tags: [{ label: "Incline Village", url: "#portfolio" }, { label: "Mountain modern", url: "#portfolio" }],
          },
        ]}
        button={{ title: "Discuss your home", href: "#contact", variant: "secondary" }}
      />
      <Testimonial1
        quote="“Our home was completed under time and under budget. The quality of work and Greenwood’s subcontractors were first class.”"
        logo={{ src: "/images/tq-logo-med-ivory-c176412731.png", alt: "Tahoe Quarterly Mountain Home Awards" }}
        avatar={{ src: "/images/incline-village-contemporary-remodel-greenwood-homes-002-1024x683-1c2b3f3db6.jpg", alt: "Incline Village custom home interior" }}
        name="Incline Village homeowner"
        position="Client reference"
        companyName="5,000 sq ft custom home"
      />
      <Cta3
        heading="Your vision deserves an experienced builder."
        description="Start with a practical conversation about feasibility, budget, schedule, and the standards that will define your home."
        buttons={[{ title: "Discuss your home", href: "https://greenwood-homes.com/contact/", variant: "alternate" }]}
        image={{ src: "/images/001-1-e4c77d9f13.jpg", alt: "Custom residence in Hawaii by Greenwood Homes" }}
      />
      <Footer3
        logo={{ url: "#top", src: logo, alt: "Greenwood Homes" }}
        address={{ label: "Our offices", value: "Incline Village, Nevada · Coeur d’Alene, Idaho · Kauai, Hawaii" }}
        contact={{ label: "Licensed General Contractor", phone: "", email: "" }}
        columnLinks={[
          { links: [{ title: "Portfolio", url: "#portfolio" }, { title: "About", url: "#about" }, { title: "Testimonials", url: "#testimonials" }] },
          { links: [{ title: "California", url: "#about" }, { title: "Nevada", url: "#about" }, { title: "Hawaii · Idaho · Utah", url: "#about" }] },
        ]}
        footerText="© 2026 Greenwood Homes. Quality construction, professionally delivered."
        footerLinks={[{ title: "Discuss your home", url: "https://greenwood-homes.com/contact/" }]}
      />
    </main>
  );
}
