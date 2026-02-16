import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Services() {
  const services = [
    {
      title: "Brake Repair & Replacement",
      description: "Squeaking? Grinding? Spongy pedal? We check pads, rotors, calipers, and lines. Most brake jobs done same day. We'll tell you what you need and what can wait."
    },
    {
      title: "Engine Diagnostics",
      description: "Check engine light on? We've got the scan tools and 20+ years experience to figure out what's actually wrong. Not just reading codes—actually fixing the problem."
    },
    {
      title: "Oil Changes & Fluid Service",
      description: "Quick oil changes, transmission fluid, coolant, power steering. We use quality fluids and filters. In and out in under an hour most days. No appointment needed for oil changes."
    },
    {
      title: "Transmission Service & Repair",
      description: "Slipping gears? Rough shifting? We diagnose transmission issues and handle fluid changes, filter replacements, and minor repairs. For major rebuilds, we work with a trusted specialist."
    },
    {
      title: "AC Repair & Recharge",
      description: "AC blowing warm? We check for leaks, test the compressor, and recharge the system. Most AC work done in a day. Summer heat is no joke around here."
    },
    {
      title: "State Inspections",
      description: "We're licensed for state safety and emissions inspections. Bring your vehicle in—if it doesn't pass, we'll tell you what needs fixing and give you a straight estimate."
    },
    {
      title: "Electrical Systems",
      description: "Dead battery? Alternator issues? Weird electrical gremlins? We trace wiring problems, replace starters and alternators, and fix lighting issues."
    },
    {
      title: "Suspension & Steering",
      description: "Clunking over bumps? Car pulling to one side? We inspect and replace shocks, struts, ball joints, tie rods, and alignment work."
    }
  ]

  return (
    <main>
      <Header />
      <section style={{
        padding: '100px 20px 60px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '15px',
          color: '#1a1a1a',
          fontWeight: '700'
        }}>
          What We Do
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#444',
          marginBottom: '50px',
          maxWidth: '700px'
        }}>
          We handle most repairs and maintenance. If it's something we don't do in-house, 
          we'll point you to someone who does it right.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {services.map((service, index) => (
            <div key={index} style={{
              borderLeft: '4px solid #b91c1c',
              paddingLeft: '20px',
              paddingBottom: '20px'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '10px',
                color: '#1a1a1a',
                fontWeight: '600'
              }}>
                {service.title}
              </h3>
              <p style={{
                color: '#555',
                lineHeight: '1.6',
                fontSize: '0.95rem'
              }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '60px',
          padding: '30px',
          backgroundColor: '#f5f5f5',
          borderLeft: '5px solid #2c2c2c'
        }}>
          <h3 style={{
            fontSize: '1.4rem',
            marginBottom: '12px',
            color: '#1a1a1a'
          }}>
            Don't see what you need?
          </h3>
          <p style={{
            color: '#444',
            lineHeight: '1.6',
            marginBottom: '15px'
          }}>
            Give us a call. We work on most makes and models. If it's something specialized 
            or we're backed up, we'll let you know upfront and can usually recommend somebody good.
          </p>
          <a href="/contact" style={{
            display: 'inline-block',
            padding: '12px 28px',
            backgroundColor: '#b91c1c',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: '600',
            marginTop: '10px'
          }}>
            Get in Touch
          </a>
        </div>
      </section>
      <Footer />
    </main>
  )
}
