export default function About() {
  return (
    <section id="about" className="py-16 bg-neutral-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Om Værkstedet
            </h2>
            <p className="text-gray-700 mb-4">
              Startede det her i 2009 efter 6 år hos Volvo-forhandleren i byen. Blev træt af at se 
              almindelige mennesker betale sindssyge priser for simple reparationer. Tænkte jeg kunne 
              gøre det bedre og billigere uden at snyde på kvaliteten.
            </p>
            <p className="text-gray-700 mb-4">
              Det startede i en lille bygning ude ved ringvejen. Nu har vi lidt mere plads, to lifts, 
              og en ordenlig kaffemaskine. Stadig bare mig og min makker Jesper der laver arbejdet.
            </p>
            <p className="text-gray-700 mb-4">
              Vi er ikke det flotteste værksted. Men vi har værktøj der virker, erfaring med de fleste 
              mærker, og vi skal jo selv kunne sove om natten. Hvis vi laver noget lort, retter vi det.
            </p>
            
            <div className="mt-6 p-4 border-l-4 border-primary bg-gray-50">
              <p className="text-sm text-gray-600">
                <strong>15+ år</strong> i branchen<br/>
                <strong>Tidligere:</strong> Volvo mekaniker, Fælledvej Auto<br/>
                <strong>Når jeg ikke er her:</strong> Fisketur ved Gudensgraveærket, eller hjemme med børnene
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 border-2 border-gray-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Åbningstider</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">Man - Tors</span>
                <span>7:30 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Fredag</span>
                <span>7:30 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Lørdag</span>
                <span>Efter aftale</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Søndag</span>
                <span>Lukket</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-gray-300">
              <p className="text-sm text-gray-700">
                <strong>Akut nødsituation?</strong><br/>
                Ring. Hvis jeg kan nå det, gør jeg det. Ellers kender jeg en der bjærger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
