'use client'
import { useState } from 'react'
import Link from 'next/link'

// ─── Shared styles ───────────────────────────────────────────────────────────
const section = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '0 24px',
}

const chip = (color = 'var(--accent)') => ({
  display: 'inline-block',
  padding: '4px 12px',
  borderRadius: '20px',
  fontSize: '12px',
  fontWeight: '500',
  background: 'var(--accent-bg)',
  color: color,
  letterSpacing: '0.03em',
})

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px 80px',
      background: 'var(--bg-primary)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle background decoration */}
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', top: '15%', right: '-5%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(26,107,60,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '20%', left: '-5%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(26,107,60,0.04) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
      </div>

      <div style={{ ...section, textAlign: 'center', position: 'relative' }}>
        {/* Badge */}
        <div className="animate-fade-up" style={{ marginBottom: '28px' }}>
          <span style={chip()}>Senior Scientific Officer · BARI, Bangladesh</span>
        </div>

        {/* Name */}
        <h1 className="animate-fade-up delay-100" style={{
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.04em',
          lineHeight: 1.1,
          marginBottom: '24px',
        }}>
          Mosiur Rahman Apu
        </h1>

        {/* Tagline */}
        <p className="animate-fade-up delay-200" style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
          color: 'var(--text-secondary)',
          fontWeight: '300',
          maxWidth: '640px',
          margin: '0 auto 16px',
          lineHeight: 1.5,
        }}>
          Molecular Plant Breeding · Floriculture · Plant Genomics
        </p>

        <p className="animate-fade-up delay-300" style={{
          fontSize: '16px',
          color: 'var(--text-tertiary)',
          maxWidth: '520px',
          margin: '0 auto 48px',
          lineHeight: 1.7,
        }}>
          13+ years of research at the intersection of applied agricultural science
          and molecular genetics. MAS · SSR · ISSR · SNP markers.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-400" style={{
          display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap',
        }}>
          <Link href="/portfolio" style={{
            padding: '14px 32px', borderRadius: '30px',
            background: 'var(--accent)', color: 'white',
            fontSize: '15px', fontWeight: '500', textDecoration: 'none',
            transition: 'all 0.2s',
          }}>
            View Research
          </Link>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" style={{
            padding: '14px 32px', borderRadius: '30px',
            border: '1px solid var(--border-strong)',
            color: 'var(--text-primary)',
            fontSize: '15px', fontWeight: '500', textDecoration: 'none',
            transition: 'all 0.2s', background: 'transparent',
          }}>
            Download CV
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-up delay-500" style={{
          display: 'flex', gap: '48px', justifyContent: 'center',
          marginTop: '80px', flexWrap: 'wrap',
        }}>
          {[
            { num: '13+', label: 'Years Experience' },
            { num: '7', label: 'Publications' },
            { num: '192', label: 'Accessions Studied' },
            { num: '5', label: 'Crop Species' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <p style={{
                fontSize: '2rem', fontWeight: 700,
                color: 'var(--text-primary)', letterSpacing: '-0.04em',
              }}>{stat.num}</p>
              <p style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginTop: '4px' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
      <div style={section}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px', alignItems: 'center',
        }}>
          {/* Text */}
          <div>
            <p style={{ ...chip(), marginBottom: '20px' }}>About</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '24px', fontWeight: 700 }}>
              Where science meets precision
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px', lineHeight: 1.8 }}>
              I am a Senior Scientific Officer at the Bangladesh Agricultural Research Institute (BARI),
              with over 13 years of experience in floriculture, fruit physiology, vegetable science,
              and plant genomics.
            </p>
            <p style={{ fontSize: '16px', marginBottom: '16px', lineHeight: 1.8 }}>
              My work sits at the interface of applied breeding and molecular technology — using SSR,
              ISSR, and SNP markers to accelerate crop improvement. I recently completed a Master of
              Agricultural Science (Genetics & Breeding) from the University of Western Australia,
              supervised by Dr. Michael Considine and Dr. Sultan Mia.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.8 }}>
              I am currently pursuing a PhD scholarship for 2027 intake, with focus on
              molecular breeding, marker-assisted selection, and population genetics.
            </p>
            <div style={{ marginTop: '32px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {['SSR Markers', 'ISSR', 'SNP', 'MAS', 'Population Genetics', 'Floriculture'].map(tag => (
                <span key={tag} style={{
                  padding: '6px 14px', borderRadius: '20px',
                  fontSize: '13px', fontWeight: '500',
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-secondary)',
                  border: '0.5px solid var(--border)',
                }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                icon: '🎓',
                title: 'Education',
                lines: [
                  'MAgSci — Genetics & Breeding, UWA (2024)',
                  'MS — Genetics & Plant Breeding, BAU',
                  'BSc Ag — Bangladesh Agricultural University',
                ],
              },
              {
                icon: '🔬',
                title: 'Current Position',
                lines: [
                  'Senior Scientific Officer, BARI',
                  'Floriculture Research Division',
                  'Gazipur, Bangladesh',
                ],
              },
              {
                icon: '🌱',
                title: 'Research Interest',
                lines: [
                  'Marker-assisted selection',
                  'Apple & chrysanthemum breeding',
                  'Population genetics & genomics',
                ],
              },
            ].map(card => (
              <div key={card.title} style={{
                background: 'var(--card-bg)',
                border: '0.5px solid var(--border)',
                borderRadius: '16px',
                padding: '20px 24px',
                display: 'flex', gap: '16px', alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: '24px', flexShrink: 0 }}>{card.icon}</span>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '15px', color: 'var(--text-primary)', marginBottom: '6px' }}>{card.title}</p>
                  {card.lines.map(line => (
                    <p key={line} style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Research highlights ──────────────────────────────────────────────────────
function Research() {
  const items = [
    {
      tag: 'Molecular Breeding',
      title: 'Apple Breeding via MAS',
      desc: 'Population genetics and marker-assisted selection across 192 apple accessions using SSR and SCAR markers. Dissertation submitted to Tree Genetics & Genomes.',
      icon: '🍎',
    },
    {
      tag: 'Floriculture',
      title: 'Chrysanthemum Genetics',
      desc: 'SSR and ISSR-based genetic diversity analysis in chrysanthemum cultivars. Contributed to conservation and breeding programs at BARI.',
      icon: '🌸',
    },
    {
      tag: 'Plant Genomics',
      title: 'Molecular Marker Systems',
      desc: 'Development and application of SSR, ISSR, and SNP marker systems for crop improvement, fingerprinting, and phylogenetic studies.',
      icon: '🧬',
    },
    {
      tag: 'Vegetable Science',
      title: 'Tuberose & Marigold Breeding',
      desc: 'Genetic characterization and varietal improvement of ornamental and commercial floricultural species in tropical conditions.',
      icon: '🌼',
    },
    {
      tag: 'Fruit Physiology',
      title: 'Post-harvest Research',
      desc: 'Studies on fruit quality, ripening physiology, and post-harvest management in tropical and subtropical fruit species.',
      icon: '🫐',
    },
    {
      tag: 'Population Genetics',
      title: 'Genetic Diversity Analysis',
      desc: 'Ho, He, PIC, HWE, Na, Ne statistics using GenAlEx 6.5 for conservation and breeding decision-making.',
      icon: '📊',
    },
  ]

  return (
    <section id="research" style={{ padding: '100px 0', background: 'var(--bg-primary)' }}>
      <div style={section}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ ...chip(), marginBottom: '16px' }}>Research Areas</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '16px' }}>
            A career of applied science
          </h2>
          <p style={{ color: 'var(--text-tertiary)', maxWidth: '480px', margin: '0 auto', fontSize: '16px' }}>
            Spanning floriculture, molecular genetics, and genomics — bridging field science with molecular tools.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}>
          {items.map(item => (
            <div key={item.title} style={{
              background: 'var(--card-bg)',
              border: '0.5px solid var(--border)',
              borderRadius: '20px',
              padding: '28px',
              transition: 'all 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'
              e.currentTarget.style.borderColor = 'var(--accent)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.borderColor = 'var(--border)'
            }}
            >
              <span style={{ fontSize: '32px', display: 'block', marginBottom: '16px' }}>{item.icon}</span>
              <span style={{ ...chip(), marginBottom: '12px' }}>{item.tag}</span>
              <h3 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '10px', color: 'var(--text-primary)', marginTop: '8px' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/portfolio" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 32px', borderRadius: '30px',
            border: '1px solid var(--border-strong)',
            color: 'var(--text-primary)', textDecoration: 'none',
            fontSize: '15px', fontWeight: '500', transition: 'all 0.2s',
          }}>
            View all projects →
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mosiurrahman.bari@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailtoLink
    setSent(true)
  }

  return (
    <section id="contact" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
      <div style={{ ...section, maxWidth: '700px' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <p style={{ ...chip(), marginBottom: '16px' }}>Contact</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '16px' }}>
            Let's connect
          </h2>
          <p style={{ color: 'var(--text-tertiary)', fontSize: '16px', lineHeight: 1.7 }}>
            Open to PhD collaborations, research partnerships, and academic discussions.
            Feel free to reach out — especially prospective supervisors!
          </p>
        </div>

        {sent ? (
          <div style={{
            background: 'var(--accent-bg)', border: '1px solid var(--accent)',
            borderRadius: '16px', padding: '32px', textAlign: 'center',
          }}>
            <p style={{ fontSize: '24px', marginBottom: '8px' }}>✓</p>
            <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Opening your email client...</p>
            <p style={{ color: 'var(--text-tertiary)', fontSize: '14px', marginTop: '8px' }}>
              Or email directly: mosiurrahman.bari@gmail.com
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <input
                type="text" placeholder="Your name" required
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
              />
              <input
                type="email" placeholder="Email address" required
                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
              />
            </div>
            <input
              type="text" placeholder="Subject (e.g. PhD collaboration inquiry)"
              value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
              style={inputStyle}
            />
            <textarea
              placeholder="Your message..."
              rows={5} required
              value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
            />
            <button type="submit" style={{
              padding: '16px 32px', borderRadius: '30px',
              background: 'var(--accent)', color: 'white',
              fontSize: '15px', fontWeight: '500',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.2s',
            }}>
              Send Message
            </button>
          </form>
        )}

        {/* Quick contact */}
        <div style={{
          marginTop: '40px', paddingTop: '40px',
          borderTop: '0.5px solid var(--border)',
          display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap',
        }}>
          {[
            { label: 'Email', val: 'mosiurrahman.bari@gmail.com', href: 'mailto:mosiurrahman.bari@gmail.com' },
            { label: 'Institution', val: 'BARI, Gazipur', href: 'https://bari.gov.bd' },
          ].map(item => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>{item.label}</p>
              <a href={item.href} style={{ fontSize: '14px', color: 'var(--accent)', textDecoration: 'none', fontWeight: '500' }}>{item.val}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const inputStyle = {
  padding: '14px 18px',
  borderRadius: '12px',
  border: '0.5px solid var(--border-strong)',
  background: 'var(--bg-primary)',
  color: 'var(--text-primary)',
  fontSize: '15px',
  outline: 'none',
  width: '100%',
  fontFamily: 'inherit',
  transition: 'border-color 0.2s',
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Research />
      <Contact />
    </>
  )
}
