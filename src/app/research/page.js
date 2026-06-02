import Link from 'next/link'

export const metadata = {
  title: 'Research Statement — Md. Mosiur Rahman',
  description: 'Research vision, past contributions, current projects, and PhD research plan of Md. Mosiur Rahman — molecular plant breeder and Senior Scientific Officer at BARI.',
}

const section = { maxWidth: '820px', margin: '0 auto', padding: '0 24px' }

export default function ResearchStatementPage() {
  return (
    <div style={{ paddingTop: '44px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <div style={section}>

        {/* Header */}
        <div style={{
          paddingTop: '64px',
          paddingBottom: '48px',
          borderBottom: '0.5px solid var(--border)',
          marginBottom: '64px',
        }}>
          <span style={{
            display: 'inline-block',
            padding: '4px 14px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: '600',
            background: 'var(--accent-bg)',
            color: 'var(--accent)',
            marginBottom: '20px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}>
            Research Statement
          </span>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            marginBottom: '20px',
            lineHeight: 1.15,
          }}>
            Molecular Breeding for<br />
            <span style={{ color: 'var(--accent)' }}>Sustainable Crop Improvement</span>
          </h1>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-tertiary)',
            maxWidth: '640px',
            lineHeight: 1.8,
          }}>
            Md. Mosiur Rahman &middot; Senior Scientific Officer, BARI &middot; MAgSci (UWA, 2024)
          </p>
        </div>

        {/* Section: Research Vision */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '1.35rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '20px',
            paddingBottom: '12px',
            borderBottom: '0.5px solid var(--border)',
            letterSpacing: '-0.02em',
          }}>
            Research Vision
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '16px' }}>
            My research is motivated by a single question: how can molecular tools translate into tangible gains for smallholder farmers and agricultural systems in South and Southeast Asia? Over 13 years at the Bangladesh Agricultural Research Institute (BARI), I have pursued this question through the integration of molecular marker technology — SSR, ISSR, SCAR, and SNP markers — with classical plant breeding to develop superior varieties of ornamental and food crops.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.9 }}>
            My core thesis is that <strong style={{ color: 'var(--text-primary)' }}>precision in parent selection</strong> is the highest-leverage point in a breeding program. By characterising germplasm diversity at the molecular level before crossing, we eliminate guesswork, reduce breeding cycles, and increase the probability of fixed heterosis. This philosophy guides every project I lead or contribute to.
          </p>
        </section>

        {/* Section: Past Research */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '1.35rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '20px',
            paddingBottom: '12px',
            borderBottom: '0.5px solid var(--border)',
            letterSpacing: '-0.02em',
          }}>
            Past Research Contributions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              {
                period: '2023–2024',
                title: 'Marker-Assisted Parent Selection in Apple Germplasm (MAgSci Dissertation, UWA)',
                body: 'My dissertation at The University of Western Australia examined population structure and genetic diversity across 192 apple accessions using SSR, SCAR, and SNP markers. Analysed on the ABI 3130xl Genetic Analyser and scored with GeneMapper v5.0, the data were processed using GenAlEx 6.5 to calculate pairwise genetic distance matrices, construct UPGMA dendrograms, and perform principal coordinates analysis. The study identified distinct heterotic groups suitable for hybrid parent selection — a framework directly applicable to ornamental and vegetable crops at BARI. This work was supervised by Assoc. Prof. Michael Considine and Dr. Sultan Mia (UWA / Murdoch University) under the Australia Awards Scholarship.',
              },
              {
                period: '2018–2020',
                title: 'Varietal Evaluation and Planting Material Optimisation for Tuberose',
                body: 'As co-investigator, evaluated variety performance and planting material types for tuberose (Polianthes tuberosa) production at BARI. The study assessed effects on growth, flowering time, and bulb yield across multiple planting cycles. Results were published in Journal of Ornamental Plants 10(3), 135–143 (2020), contributing to improved production protocols for one of Bangladesh\'s major cut-flower crops.',
              },
              {
                period: '2016–2019',
                title: 'Chrysanthemum Quality Improvement through Varietal and Disbudding Studies',
                body: 'As Principal Investigator, conducted multi-season trials on varietal performance and disbudding regimes for quality chrysanthemum production. First-authored results published in the Bulletin of the Institute of Tropical Agriculture, Kyushu University (42, 7–11, 2019), demonstrating that targeted disbudding combined with adapted varieties increased cut-flower stem length and floret quality by measurable margins under tropical field conditions.',
              },
            ].map((item) => (
              <div key={item.title} style={{
                background: 'var(--card-bg)',
                border: '0.5px solid var(--card-border)',
                borderRadius: '16px',
                padding: '28px 32px',
                boxShadow: 'var(--card-shadow)',
              }}>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '8px',
                }}>
                  {item.period}
                </div>
                <h3 style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                  lineHeight: 1.4,
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', lineHeight: 1.8 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Current Research */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '1.35rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '20px',
            paddingBottom: '12px',
            borderBottom: '0.5px solid var(--border)',
            letterSpacing: '-0.02em',
          }}>
            Current Research (2025–Present)
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '24px' }}>
            I currently lead two BARI-funded projects as Principal Investigator that operationalise the molecular breeding framework developed during my MAgSci dissertation:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {[
              {
                icon: '🌻',
                title: 'SSR/ISSR/SNP characterisation of marigold germplasm for hybrid parent selection',
                body: 'Characterising diversity across collected marigold accessions using SSR, ISSR, and SNP markers. Genetic distance analysis and heterotic group assignment will guide selection of crossing parents for hybrid variety development — the first molecular hybrid breeding program for marigold at BARI.',
              },
              {
                icon: '🌺',
                title: 'Morphological and molecular characterisation of indigenous orchids for conservation',
                body: 'Documenting and conserving indigenous ground orchid diversity in Bangladesh. Combining morphological descriptors with molecular fingerprinting to establish a germplasm database, identify threatened accessions, and select parents for improvement programs targeting the emerging ornamental orchid market.',
              },
            ].map((item) => (
              <div key={item.title} style={{
                background: 'var(--bg-secondary)',
                border: '0.5px solid var(--border-accent)',
                borderRadius: '16px',
                padding: '24px 28px',
              }}>
                <span style={{ fontSize: '28px', display: 'block', marginBottom: '12px' }}>{item.icon}</span>
                <h3 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '10px', lineHeight: 1.5 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-tertiary)', lineHeight: 1.8 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: PhD Plan */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '1.35rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '20px',
            paddingBottom: '12px',
            borderBottom: '0.5px solid var(--border)',
            letterSpacing: '-0.02em',
          }}>
            PhD Research Plan (2027 Intake)
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '20px' }}>
            I am seeking a PhD position (2027 intake) in Australia, ideally in a group working on <strong style={{ color: 'var(--text-primary)' }}>molecular breeding, marker-assisted selection, genomic selection, or population genetics</strong> in crops relevant to food security or horticultural systems.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '20px' }}>
            My proposed research direction builds directly on my MAgSci dissertation and current BARI projects: <strong style={{ color: 'var(--text-primary)' }}>developing a genomic selection framework for floriculture crops</strong> — an area where quantitative genomics lags decades behind cereal crops. Specific questions I am motivated to address:
          </p>
          <ul style={{ paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {[
              'Can GWAS and genomic prediction models (GBLUP, BGLR) be effectively implemented in small ornamental crop populations (&lt;500 lines) where training sets are constrained by cost?',
              'How does population structure in genetically narrow ornamental germplasm affect LD decay and marker-trait association mapping?',
              'What is the optimal marker density for reliable genomic estimated breeding values (GEBVs) in cross-pollinated ornamental species?',
              'How can GxE interaction be modelled to identify broadly adapted versus location-specific genotypes across Bangladesh agro-ecological zones?',
            ].map((q, i) => (
              <li key={i} style={{
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
              }}>
                <span style={{
                  flexShrink: 0,
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'var(--accent-bg)',
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  fontWeight: 700,
                  marginTop: '2px',
                }}>
                  {i + 1}
                </span>
                <span dangerouslySetInnerHTML={{ __html: q }} />
              </li>
            ))}
          </ul>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.9 }}>
            I bring a rare combination of strengths to this programme: field breeding experience in tropical systems, wet-lab molecular skills (DNA extraction through fragment analysis), and quantitative data analysis capability in R (lme4, ASReml, AGHmatrix, BGLR). I am funded through BARI Government service and would seek scholarship support (Australia Awards, IPRS, or RTP) for tuition and living costs.
          </p>
        </section>

        {/* Section: Methodological Skills */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '1.35rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '20px',
            paddingBottom: '12px',
            borderBottom: '0.5px solid var(--border)',
            letterSpacing: '-0.02em',
          }}>
            Methodological Competencies
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {[
              {
                area: 'Molecular',
                items: ['DNA extraction & NanoDrop quantification', 'PCR design & optimisation', 'SSR / ISSR / SCAR / SNP genotyping', 'Capillary electrophoresis (ABI 3130xl)', 'GeneMapper v5.0 fragment scoring'],
              },
              {
                area: 'Bioinformatics & Statistics',
                items: ['GenAlEx 6.5 — diversity indices, PCoA', 'PowerMarker — cluster analysis', 'R: lme4, ASReml, AGHmatrix, BGLR, ggplot2', 'MSTAT-C, SPSS, STAR', 'MEGA — phylogenetic trees'],
              },
              {
                area: 'Breeding & Field',
                items: ['Germplasm collection & curation', 'Controlled hybridisation', 'Alpha-lattice & RCBD trial design', 'BLUP estimation & GxE analysis', 'In-vitro propagation & freeze-drying'],
              },
              {
                area: 'Scientific Communication',
                items: ['7 peer-reviewed publications (SCIE + Scopus)', 'Q1 journal manuscript preparation', 'Research project management (PI)', 'Grant proposal writing (BARI)', 'International collaboration (BD–AU)'],
              },
            ].map((cat) => (
              <div key={cat.area} style={{
                background: 'var(--card-bg)',
                border: '0.5px solid var(--card-border)',
                borderRadius: '14px',
                padding: '20px 22px',
                boxShadow: 'var(--card-shadow)',
              }}>
                <p style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--accent)',
                  marginBottom: '12px',
                }}>
                  {cat.area}
                </p>
                {cat.items.map((item) => (
                  <p key={item} style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px', lineHeight: 1.5 }}>
                    · {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{
          background: 'var(--bg-secondary)',
          border: '0.5px solid var(--border)',
          borderRadius: '20px',
          padding: '40px',
          textAlign: 'center',
          marginBottom: '80px',
        }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
            Interested in collaboration or PhD supervision?
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', marginBottom: '28px', maxWidth: '480px', margin: '0 auto 28px' }}>
            I welcome enquiries from potential PhD supervisors and research collaborators working in molecular breeding, genomic selection, or plant genetics.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="mailto:mosiurrahman.bari@gmail.com"
              style={{
                padding: '12px 28px',
                borderRadius: '9999px',
                background: 'var(--accent)',
                color: 'white',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Email Me
            </a>
            <Link
              href="/publications"
              style={{
                padding: '12px 28px',
                borderRadius: '9999px',
                border: '1px solid var(--border-strong)',
                color: 'var(--text-primary)',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              View Publications
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
