import React from 'react';
import Spline from '@splinetool/react-spline';
import { Globe, ShieldCheck, BadgeCheck } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-[#0b0f1a]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80 pointer-events-none" />
      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col items-start justify-center text-white">
        <span className="inline-flex items-center gap-2 text-sm md:text-base px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/10 mb-4">
          <Globe className="w-4 h-4" />
          Polkadot Hackathon • Final Year Project
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Travel Proof: Decentralized Travel History Verification
        </h1>
        <p className="mt-4 max-w-3xl text-sm md:text-lg text-white/80">
          Verifiable Credentials + DIDs + Zero-Knowledge Proofs on Polkadot/Substrate to create a privacy-preserving, trustless proof of exploration.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm px-3 py-1 rounded-full bg-[#E6007A]/20 text-[#ff89c0] border border-[#E6007A]/30">
            <ShieldCheck className="w-4 h-4" /> W3C DID/VC
          </span>
          <span className="inline-flex items-center gap-2 text-xs md:text-sm px-3 py-1 rounded-full bg-teal-500/20 text-teal-200 border border-teal-400/30">
            <BadgeCheck className="w-4 h-4" /> ZK Selective Disclosure
          </span>
        </div>
      </div>
    </section>
  );
}
