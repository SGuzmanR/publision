import LogoAnimation from "./LogoAnimation";
import Marquee from "./Marquee";

const Hero = () => {
  return (
    <section className="h-screen">
      <div className="w-full h-full flex flex-col justify-end max-sm:justify-center items-start pb-12 gap-6">
        <div className="relative w-full flex flex-col justify-between items-end paddingX h-auto">
          <LogoAnimation /> 
          <p className="absolute md:bottom-[65%] max-md:bottom-[-20%] sm:bottom-[58%] max-sm:bottom-[-30%] max-sm:text-[35px] max-[380px]:bottom-[-35%] max-[380px]:text-[25px] font-caveat text-red text-4xl">Damos imagen a tus ideas</p>
        </div>

        <Marquee />
      </div>
    </section>
  );
};

export default Hero;