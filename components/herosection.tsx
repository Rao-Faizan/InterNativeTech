
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20">
      <div className="absolute inset-0 z-10  bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/80 to-black/40"></div>
      <div className="container relative z-30 mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center animate-fadeInUp">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4 text-white transition-all duration-300 hover:text-green-600">
            AMAZING WORKS
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Creativity involves breaking out of expected & repeatable patterns to look at things differently than ever before.
          </p>
        </div>
      </div>
    </section>
  )
}
