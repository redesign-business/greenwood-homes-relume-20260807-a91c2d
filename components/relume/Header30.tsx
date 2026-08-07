import { Button, type ButtonProps } from "@/components/ui/button";

type Props = { heading: string; description: string; buttons: (ButtonProps & { href?: string })[]; image: { src: string; alt?: string } };
export type Header30Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export function Header30(props: Header30Props) {
  const { heading, description, buttons, image } = { ...Header30Defaults, ...props };
  return <section className="hero-section relative px-[5%]">
    <div className="relative z-10 container"><div className="flex min-h-[82svh] items-end justify-start py-16 text-left md:py-24 lg:py-28"><div className="w-full max-w-3xl">
      <p className="hero-kicker">Custom homes, since 1998</p><h1 className="mb-5 text-h1 font-bold text-white md:mb-6">{heading}</h1><p className="max-w-xl text-medium text-white">{description}</p>
      <div className="mt-6 flex items-center gap-4 md:mt-8">{buttons.map(({ href, ...button }, i) => <Button key={i} {...button} asChild><a href={href}>{button.title}</a></Button>)}</div>
    </div></div></div>
    <div className="absolute inset-0 z-0"><img src={image.src} className="size-full object-cover" alt={image.alt} /><div className="hero-overlay absolute inset-0" /></div>
  </section>;
}
export const Header30Defaults: Props = { heading: "", description: "", buttons: [], image: { src: "" } };
