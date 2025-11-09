import React from 'react';
import Slide from './Slide';
import { CheckCircle2, Shield, Network, Wallet, Rocket } from 'lucide-react';

export default function SlideDeck() {
  return (
    <div className="bg-white">
      {/* SLIDE 1: ABSTRACT */}
      <Slide
        number={1}
        title="ABSTRACT"
        content={
          'Travel Proof enables users to prove travel history using Verifiable Credentials (VCs) and blockchain attestations on Polkadot/Substrate. It replaces centralized confirmations with cryptographically verifiable records while preserving privacy through DIDs and Zero-Knowledge Proofs. The system bridges real-world travel events with on-chain identity, enabling trusted proofs without leaking personal information. Architecture implements W3C DID/VC standards, stores metadata off-chain (IPFS), records hashes on-chain via Polkadot smart contracts, and includes a reward layer for DeFi/DAO participation.'
        }
        visual={
          <div className="mt-6 p-4 rounded-xl border bg-gradient-to-r from-[#1E3A8A]/10 via-[#06B6D4]/10 to-[#E6007A]/10">
            <div className="flex items-center gap-4 text-sm text-gray-700">
              <Shield className="text-[#1E3A8A]" />
              <span>Blockchain + Travel theme • Polkadot integrated</span>
            </div>
          </div>
        }
      />

      {/* SLIDE 2: INTRODUCTION */}
      <Slide
        number={2}
        title="Problem Statement"
        bullets={[
          'Centralized dependencies (emails/tickets can be lost/tampered)',
          'Privacy concerns (requires sharing complete personal info)',
          'No interoperability between platforms',
          'No on-chain reputation for DeFi rewards',
          'Trust issues with document verification',
        ]}
        visual={
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border">
              <p className="font-semibold">Objectives</p>
              <ul className="mt-2 space-y-1 text-gray-700 list-disc pl-5">
                <li>Trustless verification replacing centralized systems</li>
                <li>Privacy preservation using DID/VCs</li>
                <li>Reward mechanisms for verified travel</li>
                <li>On-chain reputation ("Proof of Exploration")</li>
                <li>Polkadot/Substrate integration</li>
              </ul>
            </div>
          </div>
        }
      />

      {/* SLIDE 3: EXISTING METHODOLOGY */}
      <Slide
        number={3}
        title="Current Solutions & Limitations"
        content={
          'Traditional email/ticket and centralized databases are simple and fast but forgeable and privacy-risky. Pure blockchain approaches without VCs are immutable but leak data and lack selective disclosure.'
        }
        visual={
          <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-lg border">
              <p className="font-semibold mb-2">Research Foundation</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>W3C Verifiable Credentials (2019)</li>
                <li>W3C Decentralized Identifiers (2022)</li>
                <li>Health Passport Systems (2023)</li>
                <li>Privacy-preserving credential research</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border md:col-span-2">
              <p className="font-semibold mb-2">Limitations</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>No travel-specific VC implementations</li>
                <li>Limited DeFi integration</li>
                <li>No "Proof of Exploration" concept</li>
              </ul>
            </div>
          </div>
        }
      />

      {/* SLIDE 4: PROPOSED ARCHITECTURE */}
      <Slide
        number={4}
        title="Travel Proof System Architecture"
        bullets={[
          'Identity Layer: DIDs + Verifiable Credentials (W3C-compliant)',
          'Backend Service: Rust/Node.js verifier, VC issuer, oracle validation',
          'Blockchain Layer: Polkadot/Substrate, smart contracts, NFT minting',
          'Storage: Off-chain metadata (IPFS), on-chain hashes',
          'Frontend: Dashboard, Web3 wallet integration, badge display',
        ]}
        visual={
          <div className="mt-6 p-4 rounded-xl border bg-white">
            <div className="flex flex-wrap gap-4 text-gray-700">
              <span className="inline-flex items-center gap-2"><Network className="text-[#06B6D4]"/> Data Flow</span>
              <span className="inline-flex items-center gap-2"><Wallet className="text-[#E6007A]"/> DID Wallet</span>
              <span className="inline-flex items-center gap-2"><Shield className="text-[#1E3A8A]"/> Smart Contracts</span>
            </div>
          </div>
        }
      />

      {/* SLIDE 5: IMPLEMENTATION WORKFLOW */}
      <Slide
        number={5}
        title="From Travel Event to On-Chain Proof"
        bullets={[
          'Capture: User uploads travel data (tickets/receipts)',
          'Validate: Backend verifies via APIs/oracle',
          'Issue VC: Signed credential to user\'s DID wallet',
          'Register: Submit credential hash to Polkadot chain',
          'Mint Proof: Smart contract creates NFT/reputation badge',
          'Verify & Reward: Third parties verify, partners reward activity',
        ]}
        visual={<div className="mt-6 p-4 rounded-lg border">Circular workflow with 6 steps • Privacy-preserving highlights</div>}
      />

      {/* SLIDE 6: TECHNICAL STACK */}
      <Slide
        number={6}
        title="Implementation Details"
        bullets={[
          'Backend: Rust, Axum, PostgreSQL, SubXT',
          'Blockchain: Polkadot/Substrate, ink! smart contracts',
          'Identity: W3C DID/VC, Ed25519/ECDSA, Zero-Knowledge Proofs',
          'Storage: IPFS (off-chain), Polkadot (on-chain hashes)',
          'Frontend: React/Next.js, Polkadot.js wallet',
        ]}
        visual={
          <div className="mt-6 p-4 rounded-lg border">
            <p className="text-gray-700">Features: RESTful API, SHA-256 hashing, transaction submission, DID wallet integration</p>
          </div>
        }
      />

      {/* SLIDE 7: METRICS & EVALUATION */}
      <Slide
        number={7}
        title="Performance & Security Metrics"
        bullets={[
          'Security: Ed25519 signatures, SHA-256, immutable blockchain records, W3C compliance',
          'Performance: <5s verification, ~1000 TPS (Polkadot), 90% storage cost reduction, scalable parachain',
          'Privacy: Data minimization, selective disclosure, zero data leakage',
        ]}
        visual={
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 text-green-700"><CheckCircle2/> Trustless verification</span>
            <span className="inline-flex items-center gap-2 text-green-700"><CheckCircle2/> Privacy preservation</span>
            <span className="inline-flex items-center gap-2 text-green-700"><CheckCircle2/> Reward layer</span>
            <span className="inline-flex items-center gap-2 text-green-700"><CheckCircle2/> On-chain reputation</span>
          </div>
        }
      />

      {/* SLIDE 8: APPLICATIONS */}
      <Slide
        number={8}
        title="Real-World Use Cases"
        bullets={[
          'Visa/Immigration: Tamper-proof travel history, streamlined verification',
          'DeFi Rewards: Eco-traveler tokens, event participation rewards, travel-based staking',
          'Travel Journals: NFT badges, shareable "Proof of Exploration" profiles',
          'Proof-Based DAOs: Travel-based governance, community building, reputation systems',
          'Travel Industry: Hotel/airline partnerships, insurance, corporate travel, tourism boards',
        ]}
        visual={<div className="mt-6 p-4 rounded-lg border">Market: $8+ trillion travel industry • Web3-native services</div>}
      />

      {/* SLIDE 9: CONTRIBUTIONS */}
      <Slide
        number={9}
        title="Research Contributions & Innovation"
        bullets={[
          'Travel-specific VC implementation',
          '"Proof of Exploration" concept',
          'DeFi-travel integration',
          'Privacy-preserving verification',
          'Polkadot/Substrate SSI implementation',
        ]}
        visual={
          <div className="mt-6 p-4 rounded-lg border">
            <p className="text-gray-700">Impact: Academic, Industry, Web3 ecosystem, Users</p>
            <p className="text-gray-700 mt-2">Future: Cross-chain compatibility, advanced ZKPs, IoT integration, AI/ML fraud detection</p>
          </div>
        }
      />

      {/* SLIDE 10: CONCLUSION */}
      <Slide
        number={10}
        title="Conclusion & Future Work"
        bullets={[
          'W3C DID/VC architecture',
          'Privacy-preserving verification',
          'Polkadot integration',
          'Reward layer',
          'On-chain reputation',
        ]}
        visual={
          <div className="mt-6 p-4 rounded-xl border bg-gradient-to-r from-[#1E3A8A]/10 via-[#06B6D4]/10 to-[#E6007A]/10">
            <div className="flex items-center gap-3 text-[#1E3A8A]">
              <Rocket />
              <span className="text-gray-800">Future: Cross-chain support, advanced ZKPs, IoT integration, mobile app, partnerships, governance token</span>
            </div>
          </div>
        }
      />
    </div>
  );
}
