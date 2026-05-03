import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: ContactComponent,
})

function ContactComponent() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <div className="flex flex-col">
      <section className="bg-brand-navy text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </section>
      <section className="py-20 container mx-auto px-6 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3 space-y-8">
          <div><h4 className="font-bold">Address</h4><p className="text-gray-600">1/378 Auburn St, Goulburn NSW 2580</p></div>
          <div><h4 className="font-bold">Phone</h4><p className="text-gray-600">0403 277 066</p></div>
          <div><h4 className="font-bold">Hours</h4><p className="text-gray-600">Mon-Fri: 9am - 5pm</p></div>
        </div>
        <div className="lg:w-2/3 bg-gray-50 p-10 rounded-2xl">
          {submitted ? (
            <div className="text-center py-10"><h3 className="text-2xl font-bold">Message Sent!</h3><p>We'll be in touch soon.</p></div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
              <input type="text" placeholder="Your Name" required className="w-full p-4 border rounded-lg" />
              <input type="email" placeholder="Email Address" required className="w-full p-4 border rounded-lg" />
              <textarea placeholder="How can we help?" required rows={5} className="w-full p-4 border rounded-lg"></textarea>
              <button className="w-full bg-brand-green text-brand-navy font-bold py-4 rounded-lg">Schedule Your Appointment</button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
