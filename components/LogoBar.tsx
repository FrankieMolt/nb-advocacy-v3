import Image from 'next/image';

export function LogoBar() {
  const logos = [
    { src: "/logos/irving-oil.svg", alt: "Irving Oil" },
    { src: "/logos/mccain.svg", alt: "McCain Foods" },
    { src: "/logos/cooke-aquaculture.svg", alt: "Cooke Aquaculture" },
    { src: "/logos/nb-power.svg", alt: "NB Power" },
    { src: "/logos/moosehead.svg", alt: "Moosehead Breweries" },
  ];

  return (
    <div className="py-16 border-y border-neutral-900 mb-16 relative group">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-4 text-sm font-black uppercase tracking-[0.4em] text-white">
        Entities of Interest
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-20 grayscale contrast-150 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000">
        {logos.map((logo, i) => (
          <Image
            key={i}
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={40}
            className="h-8 md:h-10 w-auto object-contain"
            loading="lazy"
            unoptimized
          />
        ))}
      </div>
    </div>
  );
}
