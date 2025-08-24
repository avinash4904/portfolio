import React, { useState, useEffect } from 'react'
import Portfolio from './Portfolio'

export default function App() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && open) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [open])

  const handleLink = (e, id) => {
    e.preventDefault()
    console.debug('Navbar: handleLink', id)
    setOpen(false)
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      console.warn('Navbar: target not found', id)
    }
  }

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 mx-auto max-w-6xl px-4 z-50" aria-label="Main navigation">
        <div className="glass flex items-center justify-between p-3">
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-xl font-bold">Aviab</a>

          <div className="hidden md:flex items-center gap-6">
            <a href="#projects" onClick={(e) => handleLink(e, '#projects')} className="text-sm hover:underline">Projects</a>
            <a href="#contact" onClick={(e) => handleLink(e, '#contact')} className="text-sm hover:underline">Contact</a>
            <a href="/resume.pdf" className="btn-primary">Resume</a>
          </div>

          <button
            className="md:hidden btn-primary"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => { console.debug('Navbar: toggle', !open); setOpen((v) => !v) }}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass p-4 flex flex-col gap-3">
            <a href="#projects" onClick={(e) => handleLink(e, '#projects')} className="py-2">Projects</a>
            <a href="#contact" onClick={(e) => handleLink(e, '#contact')} className="py-2">Contact</a>
            <a href="/resume.pdf" className="py-2">Resume</a>
          </div>
        )}
      </nav>

      <main id="top" className="pt-28">
        <Portfolio />
      </main>
    </>
  )
}
