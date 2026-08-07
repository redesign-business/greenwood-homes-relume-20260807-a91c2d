import { Button, type ButtonProps } from "@/components/ui/button";
type Props = { heading: string; description: string; buttons: (ButtonProps & { href?: string })[]; image: { src: string; alt?: string } };
export type Cta3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export function Cta3(props: Cta3Props) {
  const { heading, description, buttons, image } = { ...Cta3Defaults, ...props };
  return <section id="contact" className="cta-section relative px-[5%] py-20 md:py-32 lg:py-40"><div className="relative z-10 container"><div className="w-full max-w-2xl"><p className="hero-kicker">Begin a conversation</p><h2 className="mb-5 text-h2 font-bold text-white md:mb-6">{heading}</h2><p className="text-medium text-white">{description}</p><div className="mt-8 flex flex-wrap gap-4">{buttons.map(({ href, ...button }, i) => <Button key={i} {...button} asChild><a href={href}>{button.title}</a></Button>)}</div></div></div><div className="absolute inset-0 z-0"><img src={image.src} className="size-full object-cover" alt={image.alt} /><div className="cta-overlay absolute inset-0" /></div></section>;
}
export const Cta3Defaults: Props = { heading: "", description: "", buttons: [], image: { src: "" } };
