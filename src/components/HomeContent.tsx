import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, AlertTriangle, ArrowRight } from 'lucide-react';

export const HomeContent = () => {
  return (
    <section className="py-24 md:py-40 bg-white relative overflow-hidden tech-grid-subtle">
      {/* Background Decorative Technical Visual: Alarms & Detection */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.20] pointer-events-none z-0 overflow-hidden">
        <img
          src="/images/fire_safety_inspection_checklist.png"
          alt="Sistema de Alarme e Detecção de Incêndio"
          className="absolute top-1/2 left-0 w-[60vw] h-auto -translate-y-1/2 grayscale"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-none text-center md:text-left">
          <span className="tech-label mb-8 block">Guia de Regularização</span>
          <h2 className="hero-title mb-16 text-gradient leading-[1.1] text-left">
            AVCB e Alvará em Montes Claros MG.
          </h2>

          <div className="prose prose-lg max-w-none text-slate-800 space-y-12 font-normal leading-relaxed text-justify md:text-left">
            <p className="text-xl md:text-2xl font-bold text-slate-900 border-l-4 border-brand-red pl-6 py-2">
              Sua empresa está segura e em dia com o Corpo de Bombeiros?
            </p>

            <p className="text-lg md:text-xl">
              A regularização de uma edificação não é apenas uma obrigação legal, mas uma garantia de segurança técnica e patrimonial. Em Minas Gerais, o processo é regido pelo Decreto Estadual 47.998/2020 e pelas Instruções Técnicas (ITs) do CBMMG.
            </p>

            <div className="grid md:grid-cols-2 gap-12 not-prose">
              <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="text-brand-red font-bold text-xl mb-4 text-left">AVCB: O que é?</h3>
                <p className="text-base text-slate-800 text-left m-0">O Auto de Vistoria do Corpo de Bombeiros é o documento que certifica que a edificação possui as condições de segurança contra incêndio previstas por lei.</p>
              </div>
              <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="text-brand-red font-bold text-xl mb-4 text-left">CLCB: O que é?</h3>
                <p className="text-base text-slate-800 text-left m-0">O Certificado de Licenciamento do Corpo de Bombeiros é voltado para edificações de baixo risco, com processo simplificado de emissão.</p>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-10 md:p-16 rounded-3xl relative overflow-hidden group not-prose">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-4xl font-bold mb-4">Evite Multas e Interdições.</h3>
                  <p className="text-zinc-400 text-base md:text-lg">Realizamos o levantamento completo, projeto e protocolo no INFOSCIP.</p>
                </div>
                <button
                  onClick={() => window.open('https://wa.me/5538984056240', '_blank')}
                  className="w-full md:w-auto px-10 py-5 bg-brand-red hover:bg-brand-ember text-white rounded-full font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 whitespace-nowrap"
                >
                  Falar com Especialista
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="precision-grid grid-cols-1 md:grid-cols-2 gap-px mt-20 not-prose overflow-hidden rounded-2xl border border-slate-200">
              <div className="p-8 md:p-10 bg-white">
                <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4 uppercase tracking-wider">Conformidade Técnica</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start">
                    <div className="w-1.5 h-1.5 bg-brand-red mt-2 flex-shrink-0" />
                    <span className="text-sm md:text-base"><strong className="text-slate-900">AVCB:</strong> Para riscos elevados ou grandes áreas.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-1.5 h-1.5 bg-brand-red mt-2 flex-shrink-0" />
                    <span className="text-sm md:text-base"><strong className="text-slate-900">CLCB:</strong> Processo simplificado para baixo risco.</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 md:p-10 bg-slate-50">
                <h3 className="text-xl font-bold text-brand-red mb-6 border-b border-brand-red/10 pb-4 uppercase tracking-wider">Penalidades</h3>
                <ul className="space-y-3">
                  {['Multas Elevadas', 'Interdição', 'Perda de Seguro', 'Criminal'].map((risk) => (
                    <li key={risk} className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-800">
                      <AlertTriangle className="text-brand-red w-4 h-4" />
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
