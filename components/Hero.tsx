export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-neutral-100">
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
          Hvor man går hen når bilen driller
        </h1>
        <p className="text-base text-gray-700 mb-3 max-w-2xl leading-relaxed">
          Startet i 2009 af en gut der blev træt af forhandler-priser. Vi fikser det meste, 
          tager ikke røven på folk, og kaffemaskinen kører som regel.
        </p>
        <p className="text-sm text-gray-500 mb-8 max-w-2xl leading-relaxed">
          Mest bremser, motor-ting, og hverdags-reparationer. Hvis det er noget virkelig 
          specialiseret, kender vi nogen der kan.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <a href="#contact" className="bg-red-800 text-white px-5 py-2.5 text-sm font-semibold hover:bg-red-900">
            Kontakt os
          </a>
          <a href="#services" className="border-2 border-gray-900 text-gray-900 px-5 py-2.5 text-sm font-semibold hover:bg-gray-900 hover:text-white">
            Se ydelser
          </a>
          <a href="tel:75823419" className="text-gray-700 px-5 py-2.5 text-sm font-semibold underline underline-offset-4">
            Ring: 75 82 34 19
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl">
          <div className="bg-white border border-gray-200 p-4">
            <p className="text-xs font-bold text-gray-800 uppercase tracking-wide mb-1">Olieskift</p>
            <p className="text-xs text-gray-500">Drop-in, ingen tidsbestilling</p>
          </div>
          <div className="bg-white border border-gray-200 p-4">
            <p className="text-xs font-bold text-gray-800 uppercase tracking-wide mb-1">Åbningstider</p>
            <p className="text-xs text-gray-500">Man-Tors 7:30-17 · Fre 7:30-16</p>
          </div>
          <div className="bg-white border border-gray-200 p-4">
            <p className="text-xs font-bold text-gray-800 uppercase tracking-wide mb-1">Adresse</p>
            <p className="text-xs text-gray-500">Industrivej 47B, 7100 Vejle</p>
          </div>
        </div>
      </div>
    </section>
  )
}
