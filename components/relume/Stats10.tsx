type Props = { heading: string; stats: { percentage: string; heading: string }[]; image: { src: string; alt?: string } };
export type Stats10Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export function Stats10(props: Stats10Props) {
  const { heading, stats, image } = { ...Stats10Defaults, ...props };
  return <section className="stats-section relative px-[5%] py-16 md:py-24 lg:py-28"><div className="relative z-10 container">
    <div className="mb-12 max-w-2xl md:mb-18 lg:mb-20"><h2 className="text-h3 font-bold text-white">{heading}</h2></div>
    <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">{stats.map((stat, i) => <div key={i} className="border-l border-white/60 pl-8"><p className="mb-2 text-[3.5rem] leading-[1.1] font-bold text-white md:text-[4rem] lg:text-[5rem]">{stat.percentage}</p><h3 className="text-h6 font-bold text-white">{stat.heading}</h3></div>)}</div>
  </div><div className="absolute inset-0 z-0"><img src={image.src} className="size-full object-cover" alt={image.alt} /><div className="stats-overlay absolute inset-0" /></div></section>;
}
export const Stats10Defaults: Props = { heading: "", stats: [], image: { src: "" } };
