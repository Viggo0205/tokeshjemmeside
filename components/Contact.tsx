'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    alert("Tak for beskeden. Vi kigger på den og ringer tilbage når vi kan.")
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="py-16 bg-neutral-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Kom I Kontakt
          </h2>
          <p className="text-gray-700">
            Ring i åbningstiden - vi tager telefonen selv. Eller skriv en besked her, så 
            ringer vi tilbage når vi kan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Adresse</h3>
                <p className="text-gray-700 text-sm">
                  Industrivej 47B<br/>
                  (Lige efter Shell-tanken, grå bygning)<br/>
                  7100 Vejle
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
                <p className="text-gray-700 text-sm">75 82 34 19</p>
                <p className="text-xs text-gray-500 mt-1">(Bedst at ringe mellem 8-16)</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-700 text-sm">toke@tokesauto.dk</p>
                <p className="text-xs text-gray-500 mt-1">(Svarer ikke hver dag)</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white border-2 border-gray-300">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Praktisk info:</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>- Drop-in til olieskift (vent 20-40 min)</li>
                <li>- Ring før du kommer med større ting</li>
                <li>- Parkering foran eller ved siden af</li>
                <li>- Kontant, kort, eller MobilePay</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-800 font-medium mb-1 text-sm">
                  Navn *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-gray-300 focus:border-gray-800 focus:outline-none"
                  placeholder="Dit navn"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-800 font-medium mb-1 text-sm">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-gray-300 focus:border-gray-800 focus:outline-none"
                  placeholder="din@email.dk"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-800 font-medium mb-1 text-sm">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-gray-300 focus:border-gray-800 focus:outline-none"
                  placeholder="12 34 56 78"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-800 font-medium mb-1 text-sm">
                  Besked *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-gray-300 focus:border-gray-800 focus:outline-none resize-none"
                  placeholder="Hvad er der galt med din bil?"
                />
              </div>

              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-3 font-medium hover:bg-red-700"
              >
                Send besked
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
