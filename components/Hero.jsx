import LogoAnimation from "./LogoAnimation";

const Hero = () => {
  return (
    <section className="h-screen">
      <div className="w-full h-full flex flex-col justify-end items-start paddingX pb-12 gap-6">
        <div className="w-full flex flex-row justify-between items-end">
          <LogoAnimation /> 

          <p className="font-caveat text-red text-4xl text-nowrap">Damos imagen a tus ideas</p>
        </div>

        <div className="flex flex-row overflow-hidden gap-16 -translate-x-28">
          <span className="text-7xl font-bold text-nowrap">PUBLICIDAD SIN LIMITES</span>
          <span className="text-7xl font-bold text-nowrap">PUBLICIDAD SIN LIMITES</span>
          <span className="text-7xl font-bold text-nowrap">PUBLICIDAD SIN LIMITES</span>
        </div>
      </div>
    </section>
  )
}

export default Hero