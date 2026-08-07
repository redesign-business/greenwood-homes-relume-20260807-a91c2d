type Props = { quote: string; logo: { src: string; alt?: string }; avatar: { src: string; alt?: string }; name: string; position: string; companyName: string };
export type Testimonial1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export function Testimonial1(props: Testimonial1Props) {
  const { quote, logo, avatar, name, position, companyName } = { ...Testimonial1Defaults, ...props };
  return <section id="testimonials" className="testimonial-section px-[5%] py-16 md:py-24 lg:py-28"><div className="container w-full max-w-4xl"><div className="flex flex-col items-center text-center">
    <div className="mb-8 inline-block"><img src={logo.src} alt={logo.alt} className="max-h-14" /></div><blockquote className="text-h4 font-bold">{quote}</blockquote>
    <div className="mt-8 flex flex-col items-center"><div className="mb-4 size-20 overflow-hidden rounded-full"><img src={avatar.src} alt={avatar.alt} className="size-full object-cover" /></div><p className="font-semibold">{name}</p><p className="text-sm opacity-70"><span>{position}</span> · <span>{companyName}</span></p></div>
  </div></div></section>;
}
export const Testimonial1Defaults: Props = { quote: "", logo: { src: "" }, avatar: { src: "" }, name: "", position: "", companyName: "" };
