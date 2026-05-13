'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [dark, setDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setDark(isDark)

    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newDark = !dark
    setDark(newDark)
    document.documentElement.classList.toggle('dark', newDark)
    localStorage.setItem('theme', newDark ? 'dark' : 'light')
  }

  const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#research', label: 'Research' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/publications', label: 'Publications' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled
        ? 'rgba(255,255,255,0.72)'
        : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      borderBottom: scrolled ? '0.5px solid var(--border)' : 'none',
      transition: 'all 0.3s ease',
    }} className="dark:bg-[rgba(0,0,0,0.72)]">
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', height: '52px',
        }}>
          {/* Logo */}
          <Link href="/" style={{
            fontWeight: 600, fontSize: '17px',
            color: 'var(--text-primary)', textDecoration: 'none',
            letterSpacing: '-0.03em',
          }}>
            MR<span style={{ color: 'var(--accent)' }}>.</span>
          </Link>

          {/* Desktop nav */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '32px',
          }} className="hidden md:flex">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} style={{
                fontSize: '14px', color: 'var(--text-secondary)',
                textDecoration: 'none', transition: 'color 0.2s',
                fontWeight: '400',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Theme toggle */}
            <button onClick={toggleTheme} aria-label="Toggle theme" style={{
              width: '36px', height: '36px', borderRadius: '50%',
              border: '0.5px solid var(--border-strong)',
              background: 'var(--bg-secondary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', fontSize: '16px', transition: 'all 0.2s',
            }}>
              {dark ? '☀️' : '🌙'}
            </button>

            {/* CV Button */}
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" style={{
              padding: '8px 18px', borderRadius: '20px',
              background: 'var(--accent)', color: 'white',
              fontSize: '13px', fontWeight: '500',
              textDecoration: 'none', transition: 'all 0.2s',
              display: 'none',
            }} className="md:block">
              CV
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--text-primary)', fontSize: '20px', padding: '4px',
              }}
              className="md:hidden"
              aria-label="Menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            padding: '16px 0 24px',
            borderTop: '0.5px solid var(--border)',
            display: 'flex', flexDirection: 'column', gap: '4px',
          }}>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: '10px 4px', fontSize: '16px',
                  color: 'var(--text-secondary)', textDecoration: 'none',
                  borderBottom: '0.5px solid var(--border)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
