import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <div className="flex flex-col">
      <section className="bg-brand-navy text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">About Us</h1>
          <div className="h-1 w-20 bg-brand-green mx-auto mt-4"></div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Your Local Financial Partners</h2>
            <p className="text-gray-600 mb-6">Tanya Cook Accounting (Town & Country Accounting) is a women-owned business based in Goulburn NSW. We pride ourselves on being your partner in financial success.</p>
            <p className="text-gray-600">With years of community experience, we understand the local business landscape and offer a friendly, approachable service.</p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-brand-navy h-40 rounded-xl flex items-center justify-center text-white font-bold">Professional</div>
            <div className="bg-brand-green h-40 rounded-xl mt-8 flex items-center justify-center text-brand-navy font-bold">Friendly</div>
          </div>
        </div>
      </section>
    </div>
  )
}
