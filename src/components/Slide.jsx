import React from 'react';

export default function Slide({ number, title, subtitle, bullets = [], content, visual }) {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-start gap-6">
        <div className="shrink-0">
          <div className="w-12 h-12 rounded-lg bg-[#1E3A8A] text-white grid place-items-center font-bold">{number}</div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">{title}</h2>
          {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
          {content && <p className="mt-4 text-gray-700 leading-relaxed">{content}</p>}
          {bullets.length > 0 && (
            <ul className="mt-4 grid md:grid-cols-2 gap-2 list-disc pl-6 text-gray-700">
              {bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
          {visual}
        </div>
      </div>
    </section>
  );
}
