import React from 'react';
import { Github, FileDown } from 'lucide-react';
import { downloadPPT } from './PPTExporter';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2 font-extrabold tracking-tight text-[#0b0f1a]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E6007A]" />
          Travel Proof
        </div>
        <nav className="flex items-center gap-3 text-sm">
          <a href="#deck" className="px-3 py-1.5 rounded-md hover:bg-black/5">Slides</a>
          <a href="#abstract" className="px-3 py-1.5 rounded-md hover:bg-black/5">Abstract</a>
          <a href="#contact" className="px-3 py-1.5 rounded-md hover:bg-black/5">Contact</a>
          <button onClick={downloadPPT} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#1E3A8A] text-white">
            <FileDown className="w-4 h-4" /> Download PPTX
          </button>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5">
            <Github className="w-5 h-5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
