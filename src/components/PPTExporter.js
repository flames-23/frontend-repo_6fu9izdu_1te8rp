import PptxGenJS from 'pptxgenjs';

export function downloadPPT() {
  const pptx = new PptxGenJS();
  pptx.author = 'Travel Proof';
  pptx.company = 'Travel Proof';
  pptx.subject = 'Decentralized Travel History Verification';
  pptx.title = 'Travel Proof: Decentralized Travel History Verification Using VCs & Blockchain';

  const themeColorBlue = '1E3A8A';
  const themeColorTeal = '06B6D4';
  const themeColorPink = 'E6007A';

  // Helper styles
  const titleOpts = { x: 0.6, y: 0.6, w: 9, fontSize: 32, bold: true, color: '1F2937' };
  const subOpts = { x: 0.6, y: 1.6, w: 9, fontSize: 16, color: '4B5563' };
  const bulletOpts = { x: 0.8, y: 1.8, w: 8.8, fontSize: 18, color: '374151', bullet: true, lineSpacingMultiple: 1.2 };

  // Cover
  {
    const slide = pptx.addSlide();
    slide.background = { color: 'FFFFFF' };
    slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.7, fill: { color: themeColorBlue } });
    slide.addText('Travel Proof', { x: 0.6, y: 0.3, fontSize: 14, color: 'FFFFFF', bold: true });
    slide.addText('Travel Proof: Decentralized Travel History Verification', { ...titleOpts, y: 1.2, fontSize: 36 });
    slide.addText('Verifiable Credentials • DIDs • Zero-Knowledge • Polkadot/Substrate', { ...subOpts, y: 2.1 });
    slide.addShape(pptx.ShapeType.rect, { x: 0, y: 6.8, w: 13.33, h: 0.7, fill: { color: themeColorPink } });
  }

  // 1 ABSTRACT
  {
    const slide = pptx.addSlide();
    slide.addText('Abstract', titleOpts);
    slide.addText(
      'Enables users to prove travel history using Verifiable Credentials recorded with on-chain attestations on Polkadot. Preserves privacy via DIDs and ZK proofs while enabling trusted verification and rewards.',
      { x: 0.6, y: 1.4, w: 9.4, fontSize: 20, color: '111827' }
    );
  }

  // 2 Problem Statement
  {
    const slide = pptx.addSlide();
    slide.addText('Problem Statement', titleOpts);
    slide.addText(
      [
        'Centralized records can be lost or forged',
        'Privacy risks: over-sharing personal data',
        'Lack of interoperability across platforms',
        'No on-chain reputation / rewards',
        'Manual, slow verification workflows',
      ],
      bulletOpts
    );
  }

  // 3 Current Solutions & Limitations
  {
    const slide = pptx.addSlide();
    slide.addText('Current Solutions & Limitations', titleOpts);
    slide.addText(
      [
        'Emails/tickets: simple but tamperable and privacy-risky',
        'Pure on-chain logs: immutable but leak data',
        'Few travel-specific VC implementations',
        'Limited DeFi/reward integrations',
      ],
      bulletOpts
    );
  }

  // 4 Architecture
  {
    const slide = pptx.addSlide();
    slide.addText('System Architecture', titleOpts);
    slide.addText(
      [
        'Identity: DIDs + W3C Verifiable Credentials',
        'Backend: Verifier, issuer, oracle validation',
        'Blockchain: Polkadot/Substrate, smart contracts',
        'Storage: IPFS off-chain, on-chain hashes',
        'Frontend: Dashboard + wallet integration',
      ],
      bulletOpts
    );
  }

  // 5 Workflow
  {
    const slide = pptx.addSlide();
    slide.addText('From Travel Event to On-Chain Proof', titleOpts);
    slide.addText(
      [
        'Capture: user submits tickets/receipts',
        'Validate: backend checks via APIs/oracles',
        'Issue VC: signed credential to DID wallet',
        'Register: hash anchored on Polkadot chain',
        'Mint Proof: NFT/reputation badge',
        'Verify/Reward: third parties verify and reward',
      ],
      bulletOpts
    );
  }

  // 6 Technical Stack
  {
    const slide = pptx.addSlide();
    slide.addText('Technical Stack', titleOpts);
    slide.addText(
      [
        'Backend: Rust/Axum (or Node), REST APIs',
        'Blockchain: Polkadot/Substrate, ink! contracts',
        'Identity: W3C DID/VC, ZK proofs, Ed25519/ECDSA',
        'Storage: IPFS + on-chain hashes',
        'Frontend: React + wallet (polkadot.js)',
      ],
      bulletOpts
    );
  }

  // 7 Metrics
  {
    const slide = pptx.addSlide();
    slide.addText('Performance & Security Metrics', titleOpts);
    slide.addText(
      [
        'Security: signatures + immutable ledger',
        'Privacy: selective disclosure via ZK',
        'Performance: fast verification, scalable',
        'Costs: minimize on-chain storage via IPFS',
      ],
      bulletOpts
    );
  }

  // 8 Applications
  {
    const slide = pptx.addSlide();
    slide.addText('Applications', titleOpts);
    slide.addText(
      [
        'Visa/Immigration verification',
        'DeFi rewards for eco-travel and events',
        'Shareable travel badges and journals',
        'Travel industry partnerships and insurance',
      ],
      bulletOpts
    );
  }

  // 9 Research Contributions
  {
    const slide = pptx.addSlide();
    slide.addText('Research Contributions & Innovation', titleOpts);
    slide.addText(
      [
        'Travel-specific VC design and verifier',
        'Proof of Exploration reputation model',
        'DeFi integration on Polkadot',
        'Privacy-preserving verification flows',
      ],
      bulletOpts
    );
  }

  // 10 Conclusion & Future Work
  {
    const slide = pptx.addSlide();
    slide.addText('Conclusion & Future Work', titleOpts);
    slide.addText(
      [
        'VC/DID-based, privacy-first approach works for travel',
        'Polkadot anchoring enables trust and rewards',
        'Next: cross-chain, advanced ZK, IoT, mobile app, partners',
      ],
      bulletOpts
    );
  }

  pptx.writeFile({ fileName: 'Travel-Proof-Presentation.pptx' });
}
