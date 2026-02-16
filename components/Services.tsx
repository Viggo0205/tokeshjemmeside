export default function Services() {
  const services = [
    {
      title: 'Bremser',
      description: 'Piber? Skrækkeligt lyd når du bremser? Eller bare dårlig bremsefølelse? Tjekker belægning, skiver, kalibre. De fleste bremse-jobs er færdige samme dag.'
    },
    {
      title: 'Motor Diagnostik',
      description: 'Check engine lys tændt? Vi har scanneren og har set det meste. Læser ikke bare fejlkoder og sender dig hjem - vi finder ud af hvad der faktisk er galt.'
    },
    {
      title: 'Olieskift & Væsker',
      description: 'Drop ind uden tidsbestilling. Olie, filter, tjek af andre væsker. Som regel igennem på under en time. Bruger ordentlig olie, ikke det billigste lort.'
    },
    {
      title: 'Gear',
      description: 'Gear der hopper, ru skift, eller mærkelig lyd? Vi tjekker og skifter væske. Større gear-ting sender vi videre til en gut vi stoler på.'
    },
    {
      title: 'AC Reparation',
      description: 'AC blæser lunken luft? Lækage-test, kompressor tjek, genopfyldning. Sommeren er lang nok som den er.'
    },
    {
      title: 'Syn & Eftersyn',
      description: 'Periodesyn her hos os. Hvis den ikke består fortæller vi hvad der skal laves, og du bestemmer om vi skal gøre det eller ej.'
    }
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Hvad Vi Laver
          </h2>
          <p className="text-gray-700">
            Almindelige reparationer og service. Hvis det er noget helt specielt, 
            kender vi nogen der kan hjælpe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="border-l-4 border-red-800 bg-neutral-50 p-5"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-1.5">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
