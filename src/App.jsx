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
     

      <main id="top" className="pt-28">
        <Portfolio />
      </main>
    </>
  )
}
