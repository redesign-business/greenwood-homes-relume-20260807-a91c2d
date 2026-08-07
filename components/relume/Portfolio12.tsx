import { Badge } from "@/components/ui/badge";
import { Button, type ButtonProps } from "@/components/ui/button";
import { ChevronRight } from "relume-icons";

type Project = { title: string; description: string; image: { src: string; alt?: string }; url: string; button: ButtonProps; tags: { label: string; url: string }[] };
type Props = { tagline: string; heading: string; description: string; projects: Project[]; button: ButtonProps & { href?: string } };
export type Portfolio12Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export function Portfolio12(props: Portfolio12Props) {
  const { tagline, heading, description, projects, button } = { ...Portfolio12Defaults, ...props };
  return <section id="portfolio" className="portfolio-section px-[5%] py-16 md:py-24 lg:py-28"><div className="container">
    <header className="mb-12 max-w-2xl md:mb-18"><p className="section-kicker mb-3 font-semibold md:mb-4">{tagline}</p><h2 className="mb-5 text-h2 font-bold md:mb-6">{heading}</h2><p className="text-medium">{description}</p></header>
    <div className="columns-1 after:block md:columns-2 md:gap-x-8 lg:columns-3">{projects.map((project) => <article key={project.title} className="project-card mb-10 break-inside-avoid"><div className="mb-5 overflow-hidden"><a href={project.url}><img src={project.image.src} className="project-image w-full rounded-image object-cover" alt={project.image.alt} /></a></div><h3 className="mb-2 text-h5 font-bold"><a href={project.url}>{project.title}</a></h3><p>{project.description}</p><div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <Badge key={tag.label}><a href={tag.url}>{tag.label}</a></Badge>)}</div><Button {...project.button} asChild className="mt-5"><a href={project.url}>{project.button.title}<ChevronRight className="size-5" /></a></Button></article>)}</div>
    <footer className="mt-8 flex justify-start md:mt-14"><Button {...button} asChild><a href={button.href}>{button.title}</a></Button></footer>
  </div></section>;
}
export const Portfolio12Defaults: Props = { tagline: "", heading: "", description: "", projects: [], button: { title: "" } };
