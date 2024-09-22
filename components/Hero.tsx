// import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center bg-white py-16">
      {/* Hero title */}
      <div className="text-center">
        <h1 className="text-[42px] md:text-6xl lg:text-8xl font-serif tracking-tight">
          Khushi Ladies Corner
        </h1>
        <div className="flex justify-center gap-4 mt-4"></div>
      </div>
    </section>
  );
};

export default Hero;
