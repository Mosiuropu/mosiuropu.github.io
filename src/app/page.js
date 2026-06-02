'use client'
import { useState } from 'react'
import Link from 'next/link'

// ─── Helpers ───────────────────────────────────────────────────
const section = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '0 24px',
}

const badge = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '4px 14px',
  borderRadius: '9999px',
  fontSize: '12px',
  fontWeight: '600',
  background: 'var(--accent-bg)',
  color: 'var(--accent)',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
}

const sectionTitle = {
  fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
  fontWeight: 700,
  marginBottom: '8px',
  color: 'var(--text-primary)',
}

const sectionSubtitle = {
  fontSize: '15px',
  color: 'var(--text-tertiary)',
  maxWidth: '520px',
  lineHeight: 1.7,
}

// ─── Hero ──────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px 60px',
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background orbs */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '-8%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '5%',
            left: '-5%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            background:
              'radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 60%)',
            borderRadius: '50%',
          }}
        />
      </div>

      <div style={{ ...section, textAlign: 'center', position: 'relative' }}>
        {/* Badge */}
        <div className="animate-fade-up" style={{ marginBottom: '32px' }}>
          <span style={badge}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            Senior Scientific Officer &middot; BARI
          </span>
        </div>

        {/* Name */}
        <h1
          className="animate-fade-up delay-100"
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.05em',
            lineHeight: 1.05,
            marginBottom: '20px',
          }}
        >
          Mosiur{' '}
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'var(--accent)',
            }}
          >
            Rahman
          </span>{' '}
          Apu
        </h1>

        {/* Tagline */}
        <p
          className="animate-fade-up delay-200"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--text-secondary)',
            fontWeight: '400',
            maxWidth: '620px',
            margin: '0 auto 12px',
            lineHeight: 1.6,
          }}
        >
          Molecular Plant Breeding &middot; Floriculture &middot; Plant Genomics
        </p>

        <p
          className="animate-fade-up delay-250"
          style={{
            fontSize: '15px',
            color: 'var(--text-tertiary)',
            maxWidth: '500px',
            margin: '0 auto 48px',
            lineHeight: 1.8,
          }}
        >
          13+ years advancing agricultural science through marker-assisted
          selection, population genetics, and applied molecular breeding
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up delay-300"
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link
            href="/portfolio"
            style={{
              padding: '14px 32px',
              borderRadius: '9999px',
              background: 'var(--accent)',
              color: 'white',
              fontSize: '14px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.2s',
              border: 'none',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            View Research
          </Link>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '14px 32px',
              borderRadius: '9999px',
              border: '1px solid var(--border-strong)',
              color: 'var(--text-primary)',
              fontSize: '14px',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 0.2s',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-strong)'
              e.currentTarget.style.color = 'var(--text-primary)'
            }}
          >
            Download CV
          </a>
        </div>

        {/* Stats */}
        <div
          className="animate-fade-up delay-400"
          style={{
            display: 'flex',
            gap: '56px',
            justifyContent: 'center',
            marginTop: '72px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { num: '13+', label: 'Years Experience' },
            { num: '7', label: 'Peer-Reviewed' },
            { num: '5', label: 'Research Projects' },
            { num: '4', label: 'Crop Species' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontSize: '2.2rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
              >
                {stat.num}
              </p>
              <p
                style={{
                  fontSize: '12px',
                  color: 'var(--text-quaternary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  fontWeight: '500',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── About ─────────────────────────────────────────────────────
function About() {
  return (
    <section
      id="about"
      style={{
        padding: '100px 0',
        background: 'var(--bg-secondary)',
      }}
    >
      <div style={section}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={badge}>About</span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            alignItems: 'start',
          }}
        >
          {/* Bio */}
          <div>
            <h2 style={sectionTitle}>
              Scientist, plant breeder, and molecular biologist
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--text-secondary)',
                marginBottom: '20px',
                lineHeight: 1.8,
              }}
            >
              I am a Senior Scientific Officer at the Horticulture Research Centre,
              Bangladesh Agricultural Research Institute (BARI), with over 13 years
              of dedicated service in agricultural research and development.
            </p>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--text-secondary)',
                marginBottom: '20px',
                lineHeight: 1.8,
              }}
            >
              My expertise spans floriculture, fruit physiology, vegetable science,
              and plant genomics. I specialize in molecular marker technologies
              — including SSR, ISSR, SCAR, and SNP markers — applying them to
              crop improvement through marker-assisted selection (MAS) and
              population genetics.
            </p>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--text-secondary)',
                marginBottom: '20px',
                lineHeight: 1.8,
              }}
            >
              I recently completed a Master of Agricultural Science (Genetics and
              Breeding) at The University of Western Australia under the Australia
              Awards Scholarship, where my dissertation focused on marker-based
              parent selection in apple germplasm.
            </p>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
              }}
            >
              I am actively seeking PhD opportunities (2027 intake) in molecular
              breeding, marker-assisted selection, or population genetics to
              deepen my impact on global food security.
            </p>

            {/* Keywords */}
            <div
              style={{
                marginTop: '32px',
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
              }}
            >
              {[
                'SSR Markers',
                'ISSR',
                'SNP',
                'MAS',
                'Population Genetics',
                'Floriculture',
                'GenAlEx',
                'PCR',
                'Electrophoresis',
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: '500',
                    background: 'var(--bg-elevated)',
                    color: 'var(--text-secondary)',
                    border: '0.5px solid var(--border)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              {
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                ),
                title: 'Education',
                lines: [
                  'MAgSci — Genetics & Breeding, UWA (2024)',
                  'MS — Horticulture, SAU (2013)',
                  'BSc Agriculture (Hons), SAU (2009)',
                ],
              },
              {
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                ),
                title: 'Current Position',
                lines: [
                  'Senior Scientific Officer, BARI',
                  'Horticulture Research Centre',
                  'Gazipur-1701, Bangladesh',
                ],
              },
              {
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                ),
                title: 'Research Focus',
                lines: [
                  'Marker-Assisted Selection (MAS)',
                  'Genetic diversity & population genetics',
                  'Floriculture & ornamental breeding',
                ],
              },
              {
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
                title: 'Australia Awards Scholar',
                lines: [
                  'Recipient, Australia Awards Scholarship (2022)',
                  'UWA — Genetics & Breeding program',
                  'Dissertation: Apple germplasm via MAS',
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: 'var(--card-bg)',
                  border: '0.5px solid var(--card-border)',
                  borderRadius: '16px',
                  padding: '20px 24px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  boxShadow: 'var(--card-shadow)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'var(--accent-bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: '14px',
                      color: 'var(--text-primary)',
                      marginBottom: '4px',
                    }}
                  >
                    {card.title}
                  </p>
                  {card.lines.map((line) => (
                    <p
                      key={line}
                      style={{
                        fontSize: '13px',
                        color: 'var(--text-tertiary)',
                        lineHeight: 1.6,
                      }}
                    >
                      {line}
                    </p>
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

// ─── Experience ────────────────────────────────────────────────
function Experience() {
  const roles = [
    {
      period: 'Oct 2012 – Present',
      title: 'Senior Scientific Officer (formerly Scientific Officer)',
      org: 'Horticulture Research Centre, BARI, Gazipur',
      items: [
        'Lead molecular breeding research in floriculture — MAS, SSR/ISSR/SNP characterization, hybrid parent selection',
        'Design and conduct laboratory and field experiments for crop improvement',
        'Perform statistical data analysis using R, SPSS, GenAlEx, STAR, and MS Excel',
        'Prepare scientific manuscripts, research reports, and project proposals',
        'Coordinate international collaborations and supervise field trial networks',
        'Develop the Floriculture Research Roadmap 2025–2030 for Bangladesh',
      ],
    },
  ]

  const projects = [
    {
      period: '2025 – Present',
      title: 'Principal Investigator',
      org: 'SSR/ISSR/SNP-based characterisation of marigold germplasm for hybrid parent selection · Funded: BARI',
    },
    {
      period: '2025 – Present',
      title: 'Principal Investigator',
      org: 'Morphological and molecular characterisation of indigenous ground orchids for conservation and improvement · Funded: BARI',
    },
    {
      period: '2019 – 2022',
      title: 'Co-Investigator',
      org: 'Botrytis gray mold of Lilium in Bangladesh: Diagnosis, basic study and control · Published: Heliyon 10(12), e33165 (2024)',
    },
    {
      period: '2016 – 2019',
      title: 'Principal Investigator',
      org: 'Varieties and disbudding effect on quality chrysanthemum production · Published: Bull. ITA, Kyushu University 42, 7–11 (2019)',
    },
    {
      period: '2015 – 2018',
      title: 'Co-Investigator',
      org: 'Evaluation, characterisation and improved cultivation of Lilium in Bangladesh · Multiple publications in BJAR, J. Ornamental Horticulture, Current Horticulture',
    },
  ]

  return (
    <section
      id="experience"
      style={{ padding: '100px 0', background: 'var(--bg-primary)' }}
    >
      <div style={section}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={badge}>Experience</span>
          <h2 style={{ ...sectionTitle, marginTop: '16px' }}>
            13+ years in agricultural research
          </h2>
          <p style={sectionSubtitle}>
            From scientific officer to leading molecular breeding initiatives at
            one of South Asia&rsquo;s largest agricultural research institutes
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '32px',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          {roles.map((role) => (
            <div
              key={role.title}
              style={{
                background: 'var(--card-bg)',
                border: '0.5px solid var(--card-border)',
                borderRadius: '20px',
                padding: '32px',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    background: 'var(--accent-bg)',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    letterSpacing: '0.03em',
                  }}
                >
                  {role.period}
                </span>
              </div>
              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '4px',
                }}
              >
                {role.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-tertiary)',
                  marginBottom: '20px',
                }}
              >
                {role.org}
              </p>
              <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                {role.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      padding: '6px 0',
                      paddingLeft: '20px',
                      position: 'relative',
                      lineHeight: 1.6,
                      borderBottom: '0.5px solid var(--border)',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '12px',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'var(--accent)',
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div style={{ marginTop: '56px', maxWidth: '800px', margin: '56px auto 0' }}>
          <h3
            style={{
              fontSize: '18px',
              fontWeight: 600,
              marginBottom: '24px',
              color: 'var(--text-primary)',
            }}
          >
            Key Research Projects
          </h3>
          <div
            style={{
              display: 'grid',
              gap: '12px',
            }}
          >
            {projects.map((proj) => (
              <div
                key={proj.title}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  padding: '18px 24px',
                  background: 'var(--card-bg)',
                  border: '0.5px solid var(--card-border)',
                  borderRadius: '14px',
                  boxShadow: 'var(--card-shadow)',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = 'var(--border-accent)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = 'var(--card-border)')
                }
              >
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    whiteSpace: 'nowrap',
                    paddingTop: '2px',
                    flexShrink: 0,
                    minWidth: '100px',
                  }}
                >
                  {proj.period}
                </span>
                <div>
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '2px',
                    }}
                  >
                    {proj.title}
                  </p>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-tertiary)',
                    }}
                  >
                    {proj.org}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Education ─────────────────────────────────────────────────
function Education() {
  const degrees = [
    {
      period: '2023 – 2024',
      degree: 'Master of Agricultural Science (Genetics & Breeding)',
      school: 'The University of Western Australia, Australia',
      details: [
        'WAM: 71.938 | GPA: 5.813 / 7.0',
        'Dissertation: Marker-based parent selection in apple germplasm',
        'Australia Awards Scholarship recipient',
        'Supervised by Dr. Michael Considine & Dr. Sultan Mia',
      ],
    },
    {
      period: '2011 – 2013',
      degree: 'Master of Science in Horticulture',
      school: 'Sher-e-Bangla Agricultural University, Bangladesh',
      details: [
        'CGPA: 3.61 / 4.00',
        'Thesis: Morpho-physiological variability and correlation studies in ridge gourd',
      ],
    },
    {
      period: '2006 – 2009',
      degree: 'Bachelor of Science in Agriculture (Honours)',
      school: 'Sher-e-Bangla Agricultural University, Bangladesh',
      details: ['CGPA: 3.56 / 4.00'],
    },
  ]

  return (
    <section
      style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}
    >
      <div style={section}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={badge}>Education</span>
          <h2 style={{ ...sectionTitle, marginTop: '16px' }}>
            Academic background
          </h2>
          <p style={sectionSubtitle}>
            Training across three universities in two countries, culminating in
            advanced molecular genetics research
          </p>
        </div>

        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Timeline line */}
          <div
            style={{
              position: 'absolute',
              left: '20px',
              top: '32px',
              bottom: '32px',
              width: '1px',
              background: 'var(--border-strong)',
            }}
          />

          {degrees.map((deg, i) => (
            <div
              key={deg.degree}
              className={i > 0 ? 'animate-fade-up' : ''}
              style={{
                display: 'flex',
                gap: '24px',
                marginBottom: '32px',
                position: 'relative',
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  width: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  flexShrink: 0,
                  paddingTop: '4px',
                }}
              >
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    border: '3px solid var(--accent-bg)',
                    zIndex: 1,
                  }}
                />
              </div>

              {/* Content */}
              <div
                style={{
                  flex: 1,
                  background: 'var(--card-bg)',
                  border: '0.5px solid var(--card-border)',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  boxShadow: 'var(--card-shadow)',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    background: 'var(--accent-bg)',
                    padding: '3px 10px',
                    borderRadius: '9999px',
                    display: 'inline-block',
                    marginBottom: '10px',
                  }}
                >
                  {deg.period}
                </span>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                  }}
                >
                  {deg.degree}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-tertiary)',
                    marginBottom: '12px',
                  }}
                >
                  {deg.school}
                </p>
                {deg.details.length > 0 && (
                  <ul
                    style={{
                      padding: 0,
                      margin: 0,
                      listStyle: 'none',
                    }}
                  >
                    {deg.details.map((d) => (
                      <li
                        key={d}
                        style={{
                          fontSize: '13px',
                          color: 'var(--text-secondary)',
                          padding: '3px 0',
                          paddingLeft: '16px',
                          position: 'relative',
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: '10px',
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            background: 'var(--text-quaternary)',
                          }}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Skills ────────────────────────────────────────────────────
function Skills() {
  const categories = [
    {
      title: 'Molecular Techniques',
      icon: '🧬',
      skills: [
        'DNA extraction & purification',
        'PCR amplification & optimization',
        'SSR / ISSR / SCAR / SNP marker analysis',
        'Agarose & PAGE electrophoresis',
        'Marker-assisted selection (MAS)',
        'GeneMapper v5.0',
        'ABI 3130xl Genetic Analyser',
        'NanoDrop 1000 spectrophotometry',
        'Freeze-drying (lyophilisation)',
      ],
    },
    {
      title: 'Breeding & Field Research',
      icon: '🌱',
      skills: [
        'Hybridization & crossing techniques',
        'Nursery & germplasm management',
        'Field trial design & execution (alpha-lattice, RCBD)',
        'Phenotypic data collection',
        'In-vitro conservation',
        'BLUPs / BLUP-based genotype evaluation',
        'GxE interaction analysis',
      ],
    },
    {
      title: 'Statistical & Data Analysis',
      icon: '📊',
      skills: [
        'R (ggplot2, tidyverse, lme4, ASReml, AGHmatrix, BGLR)',
        'SPSS & STAR software',
        'MSTAT-C',
        'GenAlEx 6.5 (population genetics)',
        'MS Excel (advanced)',
        'PowerMarker & MEGA',
      ],
    },
    {
      title: 'Professional Skills',
      icon: '🔬',
      skills: [
        'Scientific writing & reporting (Q1 journals)',
        'Research project management (PI & Co-PI)',
        'International collaboration (Australia–Bangladesh)',
        'Research roadmap planning',
        'GIS application',
      ],
    },
  ]

  return (
    <section
      style={{ padding: '100px 0', background: 'var(--bg-primary)' }}
    >
      <div style={section}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={badge}>Skills & Expertise</span>
          <h2 style={{ ...sectionTitle, marginTop: '16px' }}>
            Tools of the trade
          </h2>
          <p style={sectionSubtitle}>
            Combining molecular biology, field breeding, and bioinformatics to
            drive crop improvement
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.title}
              style={{
                background: 'var(--card-bg)',
                border: '0.5px solid var(--card-border)',
                borderRadius: '20px',
                padding: '28px',
                boxShadow: 'var(--card-shadow)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow =
                  '0 12px 40px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--card-shadow)'
              }}
            >
              <span
                style={{ fontSize: '28px', display: 'block', marginBottom: '16px' }}
              >
                {cat.icon}
              </span>
              <h3
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                }}
              >
                {cat.title}
              </h3>
              <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-tertiary)',
                      padding: '5px 0',
                      borderBottom: '0.5px solid var(--border)',
                      lineHeight: 1.5,
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Publications ──────────────────────────────────────────────
function Publications() {
  const pubs = [
    {
      year: '2024',
      authors: 'Alam, M. M., Alam, K. M., Momotaz, R., Arifunnahar, M., Bhuyin Apu, M. M. R., & Siddique, S. S.',
      title: 'Botrytis gray mold of Lilium in Bangladesh: Diagnosis, basic study and control',
      journal: 'Heliyon',
      volume: '10(12), e33165',
      doi: 'https://doi.org/10.1016/j.heliyon.2024.e33165',
      note: 'SCIE + Scopus (Elsevier/Cell Press)',
    },
    {
      year: '2020',
      authors: 'Alam, M. K., Bell, R. W., Hasanuzzaman, M. et al. [incl. Apu, M. M. R.]',
      title: 'Rice establishment techniques and implications for soil properties, global warming potential, and crop yields',
      journal: 'Agronomy',
      volume: '10, 888',
      doi: 'https://doi.org/10.3390/agronomy10060888',
      note: 'SCIE + Scopus (MDPI)',
    },
    {
      year: '2019',
      authors: 'Apu, M. R. B., Ambia, K., Naznin, A., Khan, F. N., Saha, K. C., & Halder, S. C.',
      title: 'Varieties and disbudding effect on quality chrysanthemum production',
      journal: 'Bulletin of the Institute of Tropical Agriculture, Kyushu University',
      volume: '42, 7–11',
      doi: 'https://doi.org/10.11189/bita.42.7',
      note: 'First Author · J-STAGE',
    },
    {
      year: '2020',
      authors: 'Khan, F. N., Naznin, A., Ambia, K., & Bhuyin, M. M. R.',
      title: 'Effect of varieties and planting materials on growth, flowering and bulb production in tuberose',
      journal: 'Journal of Ornamental Plants',
      volume: '10(3), 135–143',
      note: 'Peer-Reviewed',
    },
    {
      year: '2022',
      authors: 'Ambia, K., Khan, F. N., Naznin, A., Bhuiyin, M. M. R., & Ara, K. A.',
      title: 'Characterization and evaluation of Lilium in Bangladesh',
      journal: 'Bangladesh Journal of Agricultural Research',
      volume: '47(1), 39–50',
      doi: 'https://doi.org/10.3329/bjar.v47i1.64853',
      note: 'Peer-Reviewed',
    },
    {
      year: '2024',
      authors: 'Khan, F. N., Ambia, K., Naznin, A., Bhuiyin, M. M. R., & Rashid, M. T.',
      title: 'Bulb preservation influenced by various temperature and media on flower and bulb production in Lilium',
      journal: 'Current Horticulture',
      volume: '12(1), 35–42',
      doi: 'https://doi.org/10.48165/chr.2023.11.3.11',
      note: 'Peer-Reviewed',
    },
    {
      year: '2015',
      authors: 'Khan, M. H., Bhuiyan, S. R., Saha, K. C., Bhuyin, M. R. et al.',
      title: 'Variability, correlation and path coefficient analysis of bitter gourd',
      journal: 'Bangladesh Journal of Agricultural Research',
      volume: '40(4), 607–618',
      note: 'Peer-Reviewed',
    },
  ]

  const years = [...new Set(pubs.map((p) => p.year))].sort((a, b) => b - a)

  return (
    <section
      style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}
    >
      <div style={{ ...section, maxWidth: '780px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={badge}>Publications</span>
          <h2 style={{ ...sectionTitle, marginTop: '16px' }}>
            Peer-reviewed research
          </h2>
          <p style={sectionSubtitle}>
            7 articles in SCI, SCOPUS, and peer-reviewed journals spanning
            floriculture, molecular genetics, and crop science
          </p>
        </div>

        {years.map((year) => (
          <div key={year} style={{ marginBottom: '40px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px',
              }}
            >
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'var(--text-tertiary)',
                  letterSpacing: '0.05em',
                }}
              >
                {year}
              </span>
              <div
                style={{
                  flex: 1,
                  height: '0.5px',
                  background: 'var(--border)',
                }}
              />
            </div>
            {pubs
              .filter((p) => p.year === year)
              .map((pub, i) => (
                <div
                  key={i}
                  style={{
                    background: 'var(--card-bg)',
                    border: '0.5px solid var(--card-border)',
                    borderRadius: '16px',
                    padding: '22px 26px',
                    marginBottom: '14px',
                    boxShadow: 'var(--card-shadow)',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = 'var(--border-accent)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = 'var(--card-border)')
                  }
                >
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '6px',
                      lineHeight: 1.5,
                    }}
                  >
                    {pub.title}
                  </p>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-tertiary)',
                      marginBottom: '4px',
                      fontStyle: 'italic',
                    }}
                  >
                    {pub.authors}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '13px',
                        color: 'var(--accent)',
                        fontWeight: '500',
                      }}
                    >
                      {pub.journal}
                      {pub.volume && (
                        <span style={{ color: 'var(--text-tertiary)', fontWeight: 400 }}>
                          {' '}· {pub.volume}
                        </span>
                      )}
                    </span>
                    {pub.note && (
                      <span
                        style={{
                          fontSize: '11px',
                          color: 'var(--text-quaternary)',
                          background: 'var(--bg-tertiary)',
                          padding: '2px 8px',
                          borderRadius: '9999px',
                        }}
                      >
                        {pub.note}
                      </span>
                    )}
                    {pub.doi && (
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '11px',
                          color: 'var(--accent)',
                          textDecoration: 'none',
                          opacity: 0.7,
                          fontWeight: 500,
                        }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                        onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
                      >
                        DOI ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Contact ───────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:mosiurrahman.bari@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailtoLink
    setSent(true)
  }

  return (
    <section
      id="contact"
      style={{ padding: '100px 0', background: 'var(--bg-primary)' }}
    >
      <div style={{ ...section, maxWidth: '680px' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span style={badge}>Contact</span>
          <h2 style={{ ...sectionTitle, marginTop: '16px' }}>
            Let&rsquo;s connect
          </h2>
          <p
            style={{
              ...sectionSubtitle,
              margin: '0 auto',
            }}
          >
            Open to PhD collaborations, research partnerships, and academic
            discussions. Prospective supervisors are especially welcome to
            reach out.
          </p>
        </div>

        {sent ? (
          <div
            style={{
              background: 'var(--accent-bg)',
              border: '0.5px solid var(--border-accent)',
              borderRadius: '20px',
              padding: '40px 32px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: '28px',
                marginBottom: '12px',
                color: 'var(--accent)',
              }}
            >
              ✉
            </p>
            <p
              style={{
                fontWeight: 600,
                color: 'var(--text-primary)',
                fontSize: '16px',
              }}
            >
              Opening your email client&hellip;
            </p>
            <p
              style={{
                color: 'var(--text-tertiary)',
                fontSize: '14px',
                marginTop: '8px',
              }}
            >
              Or email directly:{' '}
              <a
                href="mailto:mosiurrahman.bari@gmail.com"
                style={{ color: 'var(--accent)', textDecoration: 'none' }}
              >
                mosiurrahman.bari@gmail.com
              </a>
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}
            >
              <input
                type="text"
                placeholder="Your name"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                style={inputStyle}
              />
              <input
                type="email"
                placeholder="Email address"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                style={inputStyle}
              />
            </div>
            <input
              type="text"
              placeholder="Subject (e.g., PhD collaboration inquiry)"
              value={form.subject}
              onChange={(e) =>
                setForm({ ...form, subject: e.target.value })
              }
              style={inputStyle}
            />
            <textarea
              placeholder="Your message..."
              rows={5}
              required
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              style={{
                ...inputStyle,
                resize: 'vertical',
                fontFamily: 'inherit',
                minHeight: '120px',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '16px 32px',
                borderRadius: '9999px',
                background: 'var(--accent)',
                color: 'white',
                fontSize: '14px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Send Message
            </button>
          </form>
        )}

        {/* Direct contact */}
        <div
          style={{
            marginTop: '48px',
            paddingTop: '40px',
            borderTop: '0.5px solid var(--border)',
            display: 'flex',
            gap: '40px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {[
            {
              label: 'Email',
              val: 'mosiurrahman.bari@gmail.com',
              href: 'mailto:mosiurrahman.bari@gmail.com',
            },
            {
              label: 'Phone',
              val: '+880 1711 742927',
              href: 'tel:+8801711742927',
            },
            {
              label: 'ORCID',
              val: '0000-0002-6690-7903',
              href: 'https://orcid.org/0000-0002-6690-7903',
            },
            {
              label: 'ResearchGate',
              val: 'Mosiur-Rahman-Apu',
              href: 'https://www.researchgate.net/profile/Mosiur-Apu',
            },
            {
              label: 'LinkedIn',
              val: 'mosiur-rahman-apu',
              href: 'https://linkedin.com/in/mosiur-rahman-apu',
            },
            {
              label: 'Institution',
              val: 'BARI, Gazipur',
              href: 'https://bari.gov.bd',
            },
            {
              label: 'Location',
              val: 'Gazipur-1701, Bangladesh',
              href: 'https://maps.google.com/?q=Gazipur+1701+Bangladesh',
            },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontSize: '11px',
                  color: 'var(--text-quaternary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '4px',
                  fontWeight: 600,
                }}
              >
                {item.label}
              </p>
              <a
                href={item.href}
                style={{
                  fontSize: '13px',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                {item.val}
              </a>
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
  background: 'var(--bg-elevated)',
  color: 'var(--text-primary)',
  fontSize: '14px',
  outline: 'none',
  width: '100%',
  fontFamily: 'inherit',
  transition: 'border-color 0.2s, box-shadow 0.2s',
}

// ─── Memberships & Awards ──────────────────────────────────────
function Honors() {
  const items = [
    {
      title: 'Professional Memberships',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      items: [
        'Plant Breeding and Genetics Society of Bangladesh (PBGSB)',
        'Bangladesh Society for Horticultural Science (BSHS)',
        'Krishi Gobeshona Foundation (KIB)',
      ],
    },
    {
      title: 'Awards & Recognition',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
      items: [
        'Australia Awards Scholarship (2022) — competitive postgraduate scholarship funded by the Australian Government',
        'China MARA Seminar (2019) — competitive nomination for agricultural technology training in China',
      ],
    },
    {
      title: 'Training & Certifications',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      items: [
        'Plant Biotechnology & Molecular Breeding (BARI, 2018)',
        'Agricultural Technology (China MARA, 2019)',
        'Scientific Writing & Publishing (UWA, 2023)',
        'GIS Application in Agriculture (BARI, 2017)',
        'PTE Academic Score: 66 (2022)',
      ],
    },
  ]

  return (
    <section
      style={{
        padding: '100px 0',
        background: 'var(--bg-primary)',
        borderTop: '0.5px solid var(--border)',
      }}
    >
      <div style={section}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={badge}>Honors & Affiliations</span>
          <h2 style={{ ...sectionTitle, marginTop: '16px' }}>
            Beyond the lab
          </h2>
          <p style={sectionSubtitle}>
            Professional memberships, awards, and continued learning
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {items.map((section) => (
            <div
              key={section.title}
              style={{
                background: 'var(--card-bg)',
                border: '0.5px solid var(--card-border)',
                borderRadius: '20px',
                padding: '28px',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'var(--accent-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                {section.icon}
              </div>
              <h3
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                }}
              >
                {section.title}
              </h3>
              <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                {section.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-tertiary)',
                      padding: '6px 0',
                      borderBottom: '0.5px solid var(--border)',
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── References ────────────────────────────────────────────────
function ReferencesBlock() {
  const refs = [
    {
      name: 'Assoc. Prof. Michael Considine',
      role: 'Principal Research Fellow · MAgSci Dissertation Supervisor',
      org: 'School of Molecular Sciences & Institute of Agriculture, UWA',
      email: 'michael.considine@uwa.edu.au',
      address: 'The University of Western Australia, Perth WA 6009, Australia',
      orcid: 'https://orcid.org/0000-0002-4468-6820',
    },
    {
      name: 'Dr. Sultan Mia',
      role: 'Adjunct Senior Lecturer · MAgSci Co-Supervisor',
      org: 'University of Western Australia & Murdoch University',
      email: 'sultan.mia@uwa.edu.au',
      address: 'Centre for Crop and Food Innovation, Murdoch University, 90 South St, Murdoch WA 6150',
    },
  ]

  return (
    <section
      style={{
        padding: '80px 0',
        background: 'var(--bg-secondary)',
        borderTop: '0.5px solid var(--border)',
      }}
    >
      <div style={{ ...section, maxWidth: '700px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={badge}>References</span>
          <h2 style={{ ...sectionTitle, marginTop: '16px' }}>
            Academic references
          </h2>
          <p style={sectionSubtitle}>
            Available upon request. The following references have kindly agreed to
            support my academic and professional endeavors.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '20px',
          }}
        >
          {refs.map((ref) => (
            <div
              key={ref.name}
              style={{
                background: 'var(--card-bg)',
                border: '0.5px solid var(--card-border)',
                borderRadius: '16px',
                padding: '24px 28px',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'var(--accent-bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '16px',
                    fontWeight: 700,
                    color: 'var(--accent)',
                  }}
                >
                  {ref.name.split(' ').pop()[0]}
                  {ref.name.split(' ')[1]?.[0]}
                </div>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '2px',
                    }}
                  >
                    {ref.name}
                  </p>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--accent)',
                      fontWeight: '500',
                      marginBottom: '4px',
                    }}
                  >
                    {ref.role} &middot; {ref.org}
                  </p>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-tertiary)',
                      lineHeight: 1.6,
                    }}
                  >
                    <a
                      href={`mailto:${ref.email}`}
                      style={{
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = 'var(--accent)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = 'var(--text-secondary)')
                      }
                    >
                      {ref.email}
                    </a>
                    <br />
                    {ref.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: 'center',
            marginTop: '32px',
            padding: '20px',
            background: 'var(--accent-bg)',
            borderRadius: '12px',
            border: '0.5px solid var(--border-accent)',
          }}
        >
          <p
            style={{
              fontSize: '13px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}
          >
            Additional references from the Bangladesh Agricultural Research Institute
            are available upon request.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Page ───────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Publications />
      <Honors />
      <ReferencesBlock />
      <Contact />
    </>
  )
}
