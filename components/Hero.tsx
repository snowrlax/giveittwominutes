import content from "@/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col items-center justify-start px-8 py-16"
    >
      <div className="relative">

        <h1 className="font-body text-7xl md:text-8xl lg:text-9xl text-center leading-[0.95]">
          <span className="block">
            <span className="absolute top-0 right-[10%] h-8 w-8 md:h-12 md:w-12">
              <img src="/Highlight_05.svg" alt="" className="h-full w-full" />
            </span>
            {content.heroHeadingLine1}
          </span>
          <span className="block">{content.heroHeadingLine2}</span>
        </h1></div>
      <p className="mt-16 text-base sm:text-lg uppercase font-semibold text-base-content/80 font-sans">
        {content.heroSubheading}
      </p>
    </section>
  );
}
