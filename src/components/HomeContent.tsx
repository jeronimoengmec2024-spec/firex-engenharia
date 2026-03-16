import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

export const HomeContent = () => {
  return (
    <section className="py-40 bg-white relative overflow-hidden tech-grid-subtle">
      {/* Background Decorative Technical Visual: Alarms & Detection */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.20] pointer-events-none z-0 overflow-hidden">
        <img
          src="/images/fire_safety_inspection_checklist.png"
          alt="Sistema de Alarme e Detecção de Incêndio"
          className="absolute top-1/2 left-0 w-[60vw] h-auto -translate-y-1/2 grayscale"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-none">
          <span className="tech-label mb-8 block">Guia de Regularização</span>
          <h2 className="hero-title mb-16 text-gradient leading-[1.0] text-4xl md:text-6xl text-left">
            AVCB e Alvará em Montes Claros MG.
          </h2>

          <p className="text-2xl text-slate-800 font-normal leading-relaxed mb-20 border-l-4 border-brand-red pl-8">
            Se você possui uma empresa, condomínio ou indústria, a regularização junto ao Corpo de Bombeiros não é apenas uma obrigação legal, mas uma garantia de segurança para vidas e patrimônio. Neste guia, a <strong>Firex Engenharia</strong> detalha o processo de <strong>AVCB em Montes Claros</strong>.
          </p>

          <div className="p-16 bg-slate-50 border border-slate-200 mb-20 relative group overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck size={120} className="text-brand-red" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-wider">O que é AVCB?</h3>
            <p className="text-slate-800 font-normal leading-relaxed m-0 text-xl">
              O <strong>AVCB (Auto de Vistoria do Corpo de Bombeiros)</strong> é o documento oficial que certifica as condições de segurança contra incêndio e pânico. É o resultado de um processo rigoroso de engenharia e conformidade técnica.
            </p>
          </div>

          <h3 className="hero-title text-4xl mb-12 text-slate-900">O que é Alvará?</h3>
          <p className="text-slate-800 font-normal leading-relaxed mb-20 text-xl">
            O <strong>Alvará do Corpo de Bombeiros</strong> é a licença de funcionamento sob a ótica da segurança contra incêndio. Em Minas Gerais, materializa-se através do AVCB ou do CLCB. Sem este documento, o estabelecimento está irregular e sujeito a sanções graves.
          </p>

          <div className="precision-grid md:grid-cols-2 mb-20">
            <div className="p-12 border border-slate-200 bg-white hover:bg-slate-50 transition-all">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Conformidade Técnica</h3>
              <ul className="space-y-6 text-slate-700 text-base font-normal">
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 bg-brand-red mt-2 flex-shrink-0" />
                  <span><strong className="text-slate-900">AVCB:</strong> Para edificações acima de 750m² ou riscos elevados. Exige PT completo.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 bg-brand-red mt-2 flex-shrink-0" />
                  <span><strong className="text-slate-900">CLCB:</strong> Para baixo risco e menor área (PTS). Processo simplificado, mas com mesmo rigor.</span>
                </li>
              </ul>
            </div>
            <div className="p-12 border border-slate-200 bg-white hover:bg-slate-50 transition-all">
              <h3 className="text-2xl font-bold text-brand-red mb-8 border-b border-brand-red/10 pb-4">Riscos e Penalidades</h3>
              <ul className="space-y-4 text-slate-800 text-base uppercase tracking-widest font-bold">
                <li className="flex items-center gap-3">
                  <AlertTriangle className="text-brand-red w-5 h-5" />
                  Multas Elevadas
                </li>
                <li className="flex items-center gap-3">
                  <AlertTriangle className="text-brand-red w-5 h-5" />
                  Interdição Imediata
                </li>
                <li className="flex items-center gap-3">
                  <AlertTriangle className="text-brand-red w-5 h-5" />
                  Perda de Seguro
                </li>
                <li className="flex items-center gap-3">
                  <AlertTriangle className="text-brand-red w-5 h-5" />
                  Responsabilidade Criminal
                </li>
              </ul>
            </div>
          </div>

          <h3 className="hero-title text-4xl mb-12 text-slate-900 uppercase">Processo de Regularização</h3>
          <p className="text-slate-800 font-normal leading-relaxed mb-12 text-xl">
            A regularização segue marcos técnicos definidos pelo CBMMG:
          </p>

          <div className="space-y-4 mb-20">
            {[
              { step: "01", title: "Diagnóstico Técnico", desc: "Levantamento inicial conforme ITs do Bombeiro MG." },
              { step: "02", title: "Projeto Engenharia", desc: "Dimensionamento de sistemas e saídas de emergência." },
              { step: "03", title: "INFOSCIP MG", desc: "Protocolo digital de análise oficial do projeto." },
              { step: "04", title: "Fase de Execução", desc: "Instalação física de equipamentos e sinalização." },
              { step: "05", title: "Vistoria Final", desc: "Conferência técnica e emissão do documento oficial." }
            ].map((item, i) => (
              <div key={i} className="flex gap-12 p-8 border border-slate-200 bg-slate-50/50 hover:bg-white transition-all group shadow-sm">
                <span className="text-brand-red font-display font-bold text-4xl opacity-30 group-hover:opacity-100 transition-opacity">{item.step}</span>
                <div>
                  <h4 className="text-slate-900 font-bold text-2xl mb-2">{item.title}</h4>
                  <p className="text-slate-700 text-lg font-normal leading-relaxed m-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-16 border border-slate-200 bg-slate-50 mb-20 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-red/5 blur-3xl opacity-20" />
            <h3 className="text-2xl font-bold text-slate-800 mb-10 text-center uppercase tracking-[0.3em]">Excellence Fire Engineering</h3>
            <div className="grid sm:grid-cols-2 gap-12">
              <div className="flex gap-6">
                <CheckCircle2 className="text-brand-red w-7 h-7 flex-shrink-0" />
                <p className="text-slate-800 text-base m-0 leading-relaxed font-bold tracking-tight">Especialistas em INFOSCIP de alta complexidade.</p>
              </div>
              <div className="flex gap-6">
                <CheckCircle2 className="text-brand-red w-7 h-7 flex-shrink-0" />
                <p className="text-slate-800 text-base m-0 leading-relaxed font-bold tracking-tight">Rigor Normativo Inegociável.</p>
              </div>
            </div>
          </div>

          <div className="text-center pt-20 border-t border-slate-200">
            <h3 className="hero-title text-5xl mb-12 text-slate-900">Solicite uma ART.</h3>
            <p className="text-slate-800 mb-16 max-w-2xl mx-auto text-xl font-normal leading-relaxed">
              Assinamos tecnicamente por sua segurança. Entre em contato com nossa equipe de engenharia hoje mesmo.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open('https://wa.me/5538984056240', '_blank')}
              className="btn-fire px-16 py-8 rounded-none font-bold uppercase tracking-[0.4em] text-xs transition-all border border-brand-red group"
            >
              Falar com Engenheiro Responsável
            </motion.button>
          </div>
        </div>
      </div>
    </section>

  );
};
