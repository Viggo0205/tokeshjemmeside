export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="font-bold mb-2">Toke's Auto Værksted</h3>
            <p className="text-gray-300">
              Startet 2009 · Industrivej 47B, Vejle<br/>
              Ejet og drevet af Toke Hansen
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-2">Kontakt</h4>
            <ul className="space-y-1 text-gray-300">
              <li>Telefon: 75 82 34 19</li>
              <li>Email: toke@tokesauto.dk</li>
              <li>Man-Tors: 7:30-17:00</li>
              <li>Fredag: 7:30-16:00</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Om stedet</h4>
            <p className="text-gray-300 text-xs leading-relaxed">
              Vi laver bremser, motorer, gear, AC, syn, og det meste andet. 
              Ikke det flotteste værksted, men arbejdet er ordentligt og priserne rimelige. 
              Kaffe på kanden.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Toke's Auto Værksted · CVR: 12345678</p>
        </div>
      </div>
    </footer>
  )
}
