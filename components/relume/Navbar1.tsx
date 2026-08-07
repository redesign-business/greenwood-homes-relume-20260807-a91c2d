"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button, type ButtonProps } from "@/components/ui/button";

type NavLink = { url: string; title: string };
type NavButton = ButtonProps & { href?: string };
type Props = { logo: { url?: string; src: string; alt?: string }; navLinks: NavLink[]; buttons: NavButton[] };
export type Navbar1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export function Navbar1(props: Navbar1Props) {
  const { logo, navLinks, buttons } = { ...Navbar1Defaults, ...props };
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  return (
    <section className="site-nav z-[999] flex w-full items-center bg-scheme-background lg:min-h-18 lg:px-[5%]">
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <a href={logo.url}><img src={logo.src} alt={logo.alt} className="nav-logo" /></a>
          <button aria-label="Toggle menu" aria-expanded={open} className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden" onClick={() => setOpen(!open)}>
            <span className="my-1 h-px w-6 bg-scheme-text" /><span className="my-1 h-px w-6 bg-scheme-text" /><span className="my-1 h-px w-6 bg-scheme-text" />
          </button>
        </div>
        <motion.div initial={false} animate={{ height: !isMobile || open ? "auto" : 0 }} className="overflow-hidden px-[5%] lg:flex lg:items-center lg:overflow-visible lg:px-0">
          {navLinks.map((link) => <a key={link.title} href={link.url} onClick={() => setOpen(false)} className="block py-3 text-sm uppercase tracking-[0.14em] lg:px-4 lg:py-2">{link.title}</a>)}
          <div className="mt-5 flex pb-7 lg:mt-0 lg:ml-4 lg:pb-0">{buttons.map(({ href, ...button }, i) => <Button key={i} {...button} asChild><a href={href}>{button.title}</a></Button>)}</div>
        </motion.div>
      </div>
    </section>
  );
}

export const Navbar1Defaults: Props = { logo: { src: "", alt: "Logo" }, navLinks: [], buttons: [] };
