import React from 'react'
import HeroCover from './components/HeroCover'
import Navbar from './components/Navbar'
import SlideDeck from './components/SlideDeck'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <HeroCover />

      <main id="deck" className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="py-10">
            <h2 id="abstract" className="text-2xl md:text-3xl font-extrabold">Travel Proof: Decentralized Travel History Verification Using Verifiable Credentials and Blockchain</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              A 10-slide academic presentation crafted for a final year project and the Polkadot Hackathon. It covers the problem, research context, architecture, workflow, stack, metrics, applications, contributions, and conclusion. Colors: Deep blue, Teal, and Polkadot pink. Modern, professional, tech-forward style.
            </p>
          </div>
        </div>
        <SlideDeck />
      </main>

      <footer id="contact" className="border-t border-black/5 py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-semibold">Get in touch</p>
            <p className="text-sm text-gray-600">Ready to showcase at the Polkadot Hackathon or your final year review.</p>
          </div>
          <div className="text-sm text-gray-600">
            Built with React + Tailwind • Spline 3D cover • Polkadot theme
          </div>
        </div>
      </footer>
    </div>
  )
}
