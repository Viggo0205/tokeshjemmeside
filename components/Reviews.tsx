export default function Reviews() {
  const reviews = [
    {
      name: "Mette K.",
      date: "3 uger siden",
      text: "Min generator døde på Netto's p-plads. Fik fat i Toke samme eftermiddag. Han kom ud, fik den startet og kørte den direkte ind på værkstedet. Ny generator næste dag. Ikke billigt men han kunne have taget mere."
    },
    {
      name: "Lars P.",
      date: "2 måneder siden", 
      text: "Har brugt stedet i 4 år nu. Ikke altid superh hurtige, men de laver ordentligt arbejde. Forrige uge havde jeg bremser der pibede - de viste mig billederne af slitage og hvad der skulle laves. Kunne godt lide ikke at føle mig snydt."
    },
    {
      name: "Jens M.",
      date: "1 måned siden",
      text: "Check engine lys kom på. Forhandleren ville have 2800 bare for at kigge. Toke scannede den for 300 kr, sagde det bare var en sensor. Bestilte delen selv online, han satte den i for 400 kr arbejde. Kommer igen."
    },
    {
      name: "Helle J.",
      date: "6 uger siden",
      text: "Havde en mærkelig bankelyd fra højre side. De fandt ud af det var støddæmperen. Fik prisen på forhånd, intet ekstra. Godt nok lidt rod derude men det er jeg ligeglad med når arbejdet er i orden."
    },
    {
      name: "Michael R.",
      date: "4 måneder siden",
      text: "Brugte dem første gang til olieskift. Ventetid var fin, de tjekkede andre ting uden at prøve at sælge mig noget. De sagde mine bremser havde måske 6 måneder tilbage. Det sætter jeg pris på - at de ikke bare prøver at presse alt ned i halsen på en."
    },
    {
      name: "Søren T.",
      date: "2 uger siden",
      text: "AC virkede ikke. De fandt en lækage, rettede den og fyldte op. Tog 2 dage fordi de skulle vente på en del, men prisen var som aftalt. Hunden var sød. Kaffen var dårlig men det okay."
    }
  ]

  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Hvad Folk Siger
        </h2>
        <p className="text-gray-700 mb-8">
          Ikke alle 5 stjerner, men vi prøver at gøre det ordentligt.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-neutral-50 p-5 border-l-4 border-gray-300"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-gray-900">{review.name}</h3>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-neutral-100 border border-gray-200 max-w-xl">
          <p className="text-sm text-gray-600">
            <strong>Vil du skrive en anmeldelse?</strong><br/>
            Det sætter vi pris på. Find os på Google eller bare fortæl dine venner hvis vi gjorde det godt.
            Hvis vi lavede noget lort, så ring hellere - så vi kan rette det.
          </p>
        </div>
      </div>
    </section>
  )
}
