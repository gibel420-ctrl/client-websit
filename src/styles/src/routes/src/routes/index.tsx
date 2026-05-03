import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-brand-navy text-white py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Expert Accounting for Your <span className="text-brand-green">Town & Country</span> Needs</h1>
            <p className="text-xl mb-8 opacity-90">Tanya Cook Accounting provides professional, friendly, and reliable tax and bookkeeping services in Goulburn NSW.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-brand-green text-brand-navy font-bold py-3 px-8 rounded-lg shadow-lg">Book a Free Consultation</Link>
              <Link to="/services" className="border-2 border-brand-green text-brand-green py-3 px-8 rounded-lg">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div><p className="text-3xl font-bold text-brand-navy">Women-Owned</p><p className="text-gray-600">Local Business</p></div>
          <div><p className="text-3xl font-bold text-brand-navy">Goulburn Based</p><p className="text-gray-600">Serving NSW</p></div>
          <div><p className="text-3xl font-bold text-brand-navy">Professional</p><p className="text-gray-600">Reliable & Friendly</p></div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-green">
              <h3 className="font-bold text-xl mb-4">Tax Returns</h3>
              <p className="text-gray-600">Maximizing your benefits with precision and local expertise.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-green">
              <h3 className="font-bold text-xl mb-4">Bookkeeping</h3>
              <p className="text-gray-600">Comprehensive solutions to keep your business organized.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-green">
              <h3 className="font-bold text-xl mb-4">BAS & GST</h3>
              <p className="text-gray-600">Hassle-free preparation and ATO compliance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
