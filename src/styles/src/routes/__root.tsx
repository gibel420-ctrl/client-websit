import { HeadContent, Outlet, Scripts, createRootRouteWithContext, Link } from '@tanstack/react-router'
import * as React from 'react'
import type { QueryClient } from '@tanstack/react-query'
import appCss from '~/styles/app.css?url'

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Tanya Cook Accounting' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Scripts />
    </div>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-navy flex items-center justify-center rounded-lg group-hover:bg-brand-green transition-colors">
             <span className="text-white font-bold text-xl italic">TC</span>
          </div>
          <div className="flex flex-col">
            <span className="text-brand-navy font-bold text-lg leading-tight">Tanya Cook</span>
            <span className="text-gray-500 text-xs tracking-widest uppercase">Accounting</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-brand-navy font-medium hover:text-brand-green transition-colors">Home</Link>
          <Link to="/about" className="text-brand-navy font-medium hover:text-brand-green transition-colors">About Us</Link>
          <Link to="/services" className="text-brand-navy font-medium hover:text-brand-green transition-colors">Services</Link>
          <Link to="/contact" className="text-brand-navy font-medium hover:text-brand-green transition-colors">Contact</Link>
          <Link to="/contact" className="bg-brand-green text-brand-navy font-bold py-2 px-5 rounded hover:bg-brand-green/90 shadow-sm">Book Now</Link>
        </div>
        <button className="md:hidden text-brand-navy" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t p-6 flex flex-col gap-4 shadow-xl">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-green">Tanya Cook Accounting</h4>
            <p className="text-gray-400 text-sm">Town & Country Accounting. Professional, friendly, and reliable accounting services in Goulburn NSW.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-green">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-green">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>1/378 Auburn St, Goulburn NSW 2580</li>
              <li>0403 277 066</li>
              <li>Mon-Fri: 9am - 5pm</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-green">Ownership</h4>
            <p className="text-gray-400 text-sm italic">Proudly a Women-Owned & Operated Local Business.</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Tanya Cook Accounting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
