/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { LocalBusinessSchema, FAQSchema } from './components/SEO';
import { HomeContent } from './components/HomeContent';
import {
  ShieldCheck,
  FileText,
  Flame,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  HardHat,
  ClipboardCheck,
  Building2,
  AlertTriangle,
  Award,
  Clock,
  Scale,
  ShoppingCart,
  Utensils,
  Activity,
  Home,
  Wrench,
  Search,
  PenTool,
  Send,
  Star
} from 'lucide-react';

import { segmentsData } from './data/segments';

// --- SEO & Metadata Components ---

const SEOData = () => (
  <Helmet>
    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="FIREX Engenharia" />
    <meta property="og:url" content="https://firexengenharia.com.br" />
    <meta property="og:title" content="FIREX | AVCB e Projetos de Combate a Incêndio – Montes Claros MG" />
    <meta property="og:description" content="Especialistas em PPCI, AVCB, CLCB e regularização no Corpo de Bombeiros (CBMMG). Engenheiro Mecânico habilitado CREA-MG. Atendimento em todo o Norte de MG." />
    <meta property="og:image" content="https://firexengenharia.com.br/social-image.jpg" />
    <meta property="og:image:alt" content="FIREX Engenharia – Projetos contra Incêndio Montes Claros" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="FIREX | AVCB e Projetos de Combate a Incêndio – Montes Claros MG" />
    <meta name="twitter:description" content="Especialistas em PPCI, AVCB, CLCB e regularização no Corpo de Bombeiros (CBMMG). Engenheiro Mecânico habilitado CREA-MG." />
    <meta name="twitter:image" content="https://firexengenharia.com.br/social-image.jpg" />
  </Helmet>
);

// --- UI Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Segmentos', href: '#segmentos' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="flex flex-col">
              <span className="font-display font-bold text-3xl tracking-tight text-slate-900 leading-none group-hover:text-brand-red transition-colors">
                <span className="text-brand-red">FIRE</span>
                <span className="text-brand-red">X</span>
              </span>
              <span className="tech-label text-[10px] mt-1 opacity-70">Engenharia de Combate a Incêndio</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-bold text-slate-800 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => window.open('https://wa.me/5538984056240', '_blank')}
              className="btn-fire px-8 py-3 text-white text-xs uppercase tracking-widest font-bold"
            >
              🔥 Contato Direto
            </button>
          </div>

          <button
            className="md:hidden text-slate-900 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white md:hidden flex flex-col"
          >
            <div className="flex justify-between items-center p-8 border-b border-slate-200">
              <span className="font-display font-bold text-2xl tracking-tight text-slate-900 leading-none">
                <span className="text-brand-red">FIRE</span>
                <span className="text-brand-red">X</span>
              </span>
              <button className="text-slate-900 p-2" onClick={() => setIsOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 flex flex-col justify-center">
              <div className="space-y-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="block text-4xl font-bold text-slate-900 hover:text-brand-red transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <div className="mt-16 space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="h-px w-full bg-white/10"
                />

                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    onClick={() => window.open('https://wa.me/5538984056240', '_blank')}
                    className="flex flex-col items-center justify-center gap-3 p-6 bg-brand-red/10 border border-brand-red/20 rounded-xl text-white"
                  >
                    <Phone className="w-6 h-6 text-brand-red" />
                    <span className="text-xs uppercase tracking-widest font-bold">WhatsApp</span>
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    onClick={() => window.location.href = 'mailto:contato@firex.com.br'}
                    className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 border border-white/10 rounded-xl text-slate-900"
                  >
                    <Mail className="w-6 h-6 text-brand-red" />
                    <span className="text-xs uppercase tracking-widest font-bold">E-mail</span>
                  </motion.button>
                </div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  onClick={() => window.open('https://wa.me/5538984056240', '_blank')}
                  className="w-full bg-brand-red text-white py-6 rounded-xl text-base uppercase tracking-[0.3em] font-bold shadow-lg shadow-brand-red/20"
                >
                  Solicitar Análise Técnica
                </motion.button>
              </div>
            </div>

            {/* Technical Grid Background for Mobile Menu */}
            <div className="absolute inset-0 -z-10 opacity-[0.20] pointer-events-none tech-grid-subtle" />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FloatingElement = ({ delay, className }: any) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, 0]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay
    }}
    className={`absolute pointer-events-none opacity-10 ${className}`}
  >
    <div className="w-24 h-24 border border-white rounded-full" />
  </motion.div>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-white tech-grid-subtle">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1583907608920-9418311a7f6c?auto=format&fit=crop&q=80&w=2000"
        alt="Extintor e Equipamento PPCI Profissional"
        className="w-full h-full object-cover opacity-70"
        referrerPolicy="no-referrer"
      />
      <div className="industrial-overlay" />
    </div>

    {/* Floating Elements */}
    <FloatingElement delay={0} className="top-1/4 left-10" />
    <FloatingElement delay={2} className="bottom-1/4 right-10" />
    <FloatingElement delay={1} className="top-1/2 right-1/4" />

    {/* Background Decorative Elements */}
    <div className="absolute top-0 left-0 w-full h-full opacity-[0.30] pointer-events-none z-0">
      <img
        src="/images/fire_extinguisher_wall.png"
        alt="Equipamentos PPCI Elegantes"
        className="absolute top-1/4 left-10 w-[40vw] h-auto grayscale"
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-5xl"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-brand-red" />
          <span className="tech-label">
            Autoridade Técnica Regional em MG
          </span>
        </div>
        <h1 className="hero-title mb-10 text-gradient">
          Engenharia de precisão <br /> e Projetos contra <br /> Incêndio (PPCI).
        </h1>
        <p className="text-lg md:text-xl text-slate-900 max-w-2xl mb-14 leading-relaxed font-normal">
          Especialistas em AVCB, Projetos Técnicos e regularização normativa de alto padrão.
          Segurança técnica e conformidade jurídica para o setor industrial e corporativo.
        </p>
        <div className="flex flex-col sm:flex-row gap-8">
          <button
            onClick={() => window.open('https://wa.me/5538984056240', '_blank')}
            className="group flex items-center gap-6 px-12 py-6 bg-brand-red text-white text-sm uppercase tracking-[0.3em] font-bold hover:bg-brand-ember transition-all duration-700 glow-subtle"
          >
            Solicitar Análise Técnica
            <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
          </button>
          <button className="px-12 py-6 border border-white/10 text-slate-900 text-sm uppercase tracking-[0.3em] font-bold hover:bg-white/5 transition-all duration-500">
            Nossa Expertise
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Partners = () => (
  <section className="py-20 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
      <span className="text-brand-red text-xs uppercase tracking-[0.4em] font-bold text-center block">Empresas que Confiam</span>
    </div>
    <div className="flex gap-12 animate-marquee whitespace-nowrap">
      {[
        "VALE", "GERDAU", "PETROBRAS", "AMBEV", "FIAT", "NESTLÉ", "WEG", "SUZANO", "VOTORANTIM", "BRF"
      ].map((partner, i) => (
        <div key={i} className="flex items-center gap-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer">
          <div className="text-2xl font-bold text-slate-900 font-display tracking-tighter">{partner}</div>
          <div className="w-2 h-2 bg-brand-red rounded-full" />
        </div>
      ))}
    </div>
  </section>
);

const RiskAssessmentTool = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ type: '', area: '', height: '' });

  const types = [
    { id: 'comercio', label: 'Comércio/Serviços', icon: ShoppingCart },
    { id: 'industria', label: 'Indústria/Logística', icon: Building2 },
    { id: 'saude', label: 'Saúde/Clínicas', icon: Activity },
    { id: 'residencial', label: 'Condomínio Residencial', icon: Home }
  ];

  const areas = [
    { id: 'small', label: 'Até 200mÂ²', desc: 'Geralmente isento ou PTS' },
    { id: 'medium', label: '200mÂ² a 750mÂ²', desc: 'Projeto Técnico Simplificado' },
    { id: 'large', label: 'Acima de 750mÂ²', desc: 'Projeto Técnico Completo' }
  ];

  const heights = [
    { id: 'low', label: 'Até 12m', desc: 'Edificações Baixas' },
    { id: 'mid', label: '12m a 24m', desc: 'Edificações Médias' },
    { id: 'high', label: 'Acima de 24m', desc: 'Edificações Altas' }
  ];

  const getResult = () => {
    if (data.area === 'small' && data.height === 'low') {
      return "Sua edificação pode ser isenta ou enquadrada em licenciamento simplificado. Recomendamos uma vistoria diagnóstica para confirmar.";
    }
    if (data.area === 'medium' || data.height === 'mid') {
      return "Enquadramento provável em Projeto Técnico Simplificado (PTS). Exige extintores, sinalização e iluminação de emergência. A altura média pode exigir brigada de incêndio.";
    }
    if (data.area === 'large' || data.height === 'high') {
      return "Enquadramento em Projeto Técnico (PT). Exige sistemas complexos como hidrantes, alarmes e possivelmente sprinklers devido Ã  grande área ou altura elevada.";
    }
    return "Enquadramento em Projeto Técnico (PT). Exige sistemas complexos como hidrantes, alarmes e possivelmente sprinklers.";
  };

  return (
    <section className="py-40 bg-white relative overflow-hidden tech-grid-subtle">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-red text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Ferramenta de Diagnóstico</span>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-8">Simulador de AVCB.</h2>
          <p className="text-slate-800 font-normal">Descubra o provável enquadramento da sua edificação em poucos cliques.</p>
        </div>

        <div className="glass-surface p-12 rounded-3xl premium-border relative overflow-hidden">
          {/* Subtle Background Image */}
          <div className="absolute inset-0 z-0 opacity-[0.20] pointer-events-none">
            <img loading="lazy" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800&h=800&grayscale=true" alt="" className="w-full h-full object-cover" />
          </div>

          <div className="relative z-10">
            {step === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">Qual o tipo da sua edificação?</h3>
                <div className="grid grid-cols-2 gap-6">
                  {types.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => { setData({ ...data, type: t.id }); setStep(2); }}
                      className="p-8 border border-slate-200 bg-white/[0.01] hover:bg-brand-red/10 hover:border-brand-red/50 transition-all group text-center"
                    >
                      <t.icon className="w-8 h-8 text-brand-red mx-auto mb-4 group-hover:text-brand-red transition-colors" />
                      <span className="text-base uppercase tracking-widest font-bold text-slate-900 group-hover:text-slate-900">{t.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">Qual a área total construída?</h3>
                <div className="space-y-4">
                  {areas.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => { setData({ ...data, area: a.id }); setStep(3); }}
                      className="w-full p-8 border border-slate-200 bg-white/[0.01] hover:bg-brand-red/10 hover:border-brand-red/50 transition-all group flex justify-between items-center text-left"
                    >
                      <div>
                        <div className="text-slate-900 font-bold mb-1">{a.label}</div>
                        <div className="text-base text-slate-800 uppercase tracking-widest">{a.desc}</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-brand-red group-hover:text-brand-red group-hover:translate-x-2 transition-all" />
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(1)} className="mt-8 text-xs uppercase tracking-widest text-slate-900 hover:text-slate-900 transition-colors">â† Voltar</button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">Qual a altura da edificação?</h3>
                <div className="space-y-4">
                  {heights.map((h) => (
                    <button
                      key={h.id}
                      onClick={() => { setData({ ...data, height: h.id }); setStep(4); }}
                      className="w-full p-8 border border-slate-200 bg-white/[0.01] hover:bg-brand-red/10 hover:border-brand-red/50 transition-all group flex justify-between items-center text-left"
                    >
                      <div>
                        <div className="text-slate-900 font-bold mb-1">{h.label}</div>
                        <div className="text-base text-slate-800 uppercase tracking-widest">{h.desc}</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-brand-red group-hover:text-brand-red group-hover:translate-x-2 transition-all" />
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(2)} className="mt-8 text-xs uppercase tracking-widest text-slate-900 hover:text-slate-900 transition-colors">â† Voltar</button>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                <div className="w-20 h-20 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <ShieldCheck className="w-10 h-10 text-brand-red" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Resultado Preliminar</h3>
                <p className="text-slate-900 text-lg font-normal leading-relaxed mb-12">
                  {getResult()}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button
                    onClick={() => window.open('https://wa.me/5538984056240', '_blank')}
                    className="px-12 py-4 bg-brand-red text-white text-xs uppercase tracking-widest font-bold hover:bg-brand-ember transition-all"
                  >
                    Validar com Engenheiro
                  </button>
                  <button onClick={() => setStep(1)} className="px-12 py-4 border border-white/10 text-slate-900 text-xs uppercase tracking-widest font-bold hover:bg-white/5 transition-all">
                    Reiniciar
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessTimeline = () => {
  const steps = [
    {
      step: "01",
      title: "Diagnóstico Técnico",
      desc: "Vistoria in loco para mapeamento de riscos e levantamento de sistemas existentes.",
      icon: Search,
      color: "brand-gold"
    },
    {
      step: "02",
      title: "Engenharia de Projeto",
      desc: "Desenvolvimento técnico das plantas e memoriais conforme as ITs vigentes.",
      icon: PenTool,
      color: "brand-red"
    },
    {
      step: "03",
      title: "Protocolo Estratégico",
      desc: "Submissão digital no INFOSCIP com acompanhamento rigoroso da análise.",
      icon: Send,
      color: "brand-orange"
    },
    {
      step: "04",
      title: "Certificação Final",
      desc: "Vistoria conclusiva e emissão do AVCB/CLCB com validade jurídica.",
      icon: Award,
      color: "brand-gold"
    }
  ];

  return (
    <section className="py-40 bg-white relative overflow-hidden tech-grid-subtle">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.08 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        style={{ y: "10%" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://i.imgur.com/rKV03cG.jpeg"
          alt="Metodologia Background"
          className="w-full h-full object-cover grayscale brightness-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-brand-dark/70 to-transparent" />
      </motion.div>

      {/* Background Decorative Technical Visual: Blueprint */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.20] pointer-events-none z-0 overflow-hidden">
        <img
          src="/images/fire_safety_technical_project.png"
          alt="Desenho Técnico PPCI - Autocad Blueprint"
          className="absolute top-1/2 left-0 w-[50vw] h-auto -translate-y-1/2 grayscale"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-2xl">
            <span className="text-brand-red text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Metodologia de Aprovação</span>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.0]">
              Jornada da <br /> <span className="text-gradient">Conformidade.</span>
            </h2>
          </div>
          <p className="text-slate-800 max-w-sm text-lg font-normal leading-relaxed">
            Um processo estruturado para garantir que sua edificação transite do risco Ã  certificação total com agilidade técnica.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-px bg-white/5 border border-slate-200">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative p-12 bg-white hover:bg-white/[0.02] transition-all duration-700 group overflow-hidden"
            >
              {/* Step Number Background */}
              <span className="absolute -bottom-4 -right-4 text-9xl font-bold text-slate-900/[0.02] group-hover:text-slate-900/[0.05] transition-all duration-700 select-none">
                {item.step}
              </span>

              <div className="relative z-10">
                <div className={`w-12 h-12 mb-10 flex items-center justify-center border border-white/10 group-hover:border-${item.color}/50 transition-all duration-500`}>
                  <item.icon className={`w-5 h-5 text-slate-800 group-hover:text-${item.color === 'brand-red' ? 'brand-red' : 'brand-gold'} transition-colors`} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-tight group-hover:translate-x-2 transition-transform duration-500">
                  {item.title}
                </h3>

                <p className="text-slate-800 text-base font-normal leading-relaxed mb-12">
                  {item.desc}
                </p>

                <div className="flex items-center gap-4">
                  <div className={`h-px w-8 bg-zinc-800 group-hover:w-16 group-hover:bg-${item.color === 'brand-red' ? 'brand-red' : 'brand-gold'} transition-all duration-700`} />
                  <span className="text-xs uppercase tracking-widest text-zinc-700 group-hover:text-slate-900 transition-colors">Fase {item.step}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ icon: Icon, title, desc, features, bgImage }: any) => (
  <div className="p-16 bg-white hover:bg-white/[0.02] transition-all duration-700 group flex flex-col h-full relative overflow-hidden border border-slate-200">
    {/* Background Image on Hover */}
    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000">
      <img loading="lazy" src={bgImage} alt="" className="w-full h-full object-cover scale-110 group-hover:scale-100 grayscale hover:grayscale-0 transition-all duration-1000" />
    </div>

    <div className="relative z-10">
      <div className="w-16 h-16 mb-12 flex items-center justify-center border border-slate-200 group-hover:border-brand-red/50 transition-all duration-700 bg-slate-50">
        <Icon className="w-8 h-8 text-brand-red group-hover:scale-110 transition-all" />
      </div>
      <h3 className="text-3xl font-bold mb-8 text-slate-900 leading-tight group-hover:text-brand-red transition-colors">{title}</h3>
      <p className="text-slate-800 text-base leading-relaxed mb-12 font-normal flex-grow">{desc}</p>
      <div className="space-y-4">
        {features.map((f: string, i: number) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 bg-brand-red rounded-full" />
            <span className="text-xs text-slate-900 uppercase tracking-[0.2em] font-bold">{f}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TechnicalParallax = ({ image, title, subtitle }: any) => (
  <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
    <motion.div
      initial={{ scale: 1.2 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 z-0"
    >
      <img loading="lazy" src={image} alt="" className="w-full h-full object-cover opacity-20 grayscale" />
      <div className="absolute inset-0 bg-white/80" />
    </motion.div>

    <div className="relative z-10 text-center px-6">
      <span className="tech-label mb-8 block">{subtitle}</span>
      <h2 className="hero-title text-slate-900">{title}</h2>
    </div>

    {/* Technical Lines Overlay */}
    <div className="absolute inset-0 pointer-events-none opacity-10">
      <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
      <div className="absolute top-0 left-3/4 w-px h-full bg-white" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-white" />
    </div>
  </section>
);

const Services = () => (
  <section id="servicos" className="py-40 bg-white relative overflow-hidden tech-grid-subtle">
    {/* Background Image with Effect */}
    <motion.div
      initial={{ scale: 1.1, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 0.05 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 z-0"
    >
      <img
        src="https://i.imgur.com/kQ2jwEt.jpeg"
        alt="Background Engineering"
        className="w-full h-full object-cover grayscale"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-brand-dark" />
    </motion.div>

    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
        <div className="max-w-3xl">
          <span className="tech-label mb-6 block">Soluções de Engenharia</span>
          <h2 className="hero-title text-gradient">
            Rigor Técnico. <br /> Aprovação Ágil.
          </h2>
        </div>
        <p className="text-slate-800 max-w-md text-lg leading-relaxed font-normal">
          Desenvolvemos projetos técnicos que equilibram rigor normativo e viabilidade operacional, garantindo aprovação ágil e segurança jurídica total.
        </p>
      </div>

      <div className="precision-grid lg:grid-cols-3">
        <ServiceItem
          icon={FileText}
          title="Projeto Técnico AVCB"
          desc="Elaboração estratégica de sistemas de combate a incêndio conforme as Instruções Técnicas (ITs) do CBMMG."
          features={["Cálculo Hidráulico", "Sinalização", "Saídas de Emergência"]}
          bgImage="https://images.unsplash.com/photo-1503387762-592dec5832f2?auto=format&fit=crop&q=80&w=800&h=600&grayscale=true"
        />
        <ServiceItem
          icon={ShieldCheck}
          title="Regularização AVCB"
          desc="Gestão integral do processo de licenciamento, do protocolo digital Ã  vistoria final certificada."
          features={["Protocolo INFOSCIP", "Acompanhamento", "Certificação Final"]}
          bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=600&grayscale=true"
        />
        <ServiceItem
          icon={HardHat}
          title="Adequações Técnicas"
          desc="Supervisão e execução de melhorias em sistemas existentes para conformidade normativa rigorosa."
          features={["Retrofit de Sistemas", "Testes de Estanqueidade", "ART de Execução"]}
          bgImage="https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?auto=format&fit=crop&q=80&w=800&h=600&grayscale=true"
        />
        <ServiceItem
          icon={ClipboardCheck}
          title="Consultoria Estratégica"
          desc="Análise de riscos e viabilidade técnica para novos empreendimentos ou ampliações industriais complexas."
          features={["Due Diligence", "Análise de Risco", "Parecer Técnico"]}
          bgImage="https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=800&h=600&grayscale=true"
        />
        <ServiceItem
          icon={Scale}
          title="Segurança Jurídica"
          desc="Assessoria técnica para redução de passivos e proteção de responsabilidade civil de gestores e síndicos."
          features={["Laudos Periciais", "Defesa de Multas", "Gestão de Riscos"]}
          bgImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800&h=600&grayscale=true"
        />
        <ServiceItem
          icon={Clock}
          title="Renovação Periódica"
          desc="Monitoramento e renovação programada de licenças para evitar interrupções operacionais e multas."
          features={["Checklist Preventivo", "Vistoria Prévia", "Renovação Ágil"]}
          bgImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800&h=600&grayscale=true"
        />
      </div>
    </div>
  </section>
);

const ExecutionServices = () => (
  <section id="execucao" className="py-40 bg-white relative overflow-hidden tech-grid-subtle">
    {/* Background Decorative Technical Visual: Hydrant Network */}
    <div className="absolute top-0 left-0 w-full h-full opacity-[0.20] pointer-events-none z-0 overflow-hidden">
      <img
        src="/images/industrial_fire_protection.png"
        alt="Sistema de Hidrantes Industrial"
        className="absolute bottom-0 right-0 w-[60vw] h-auto grayscale"
      />
    </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div className="flex flex-col lg:flex-row gap-24 items-center">
        {/* ... (motion.div for images remains same) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 order-2 lg:order-1"
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="aspect-square rounded-2xl overflow-hidden premium-border">
                <img loading="lazy" src="https://i.imgur.com/9JWs6YJ.jpeg" alt="Equipamento Técnico" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden premium-border">
                <img loading="lazy" src="https://i.imgur.com/6iESExa.jpeg" alt="Execução Técnica" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden premium-border">
                <img loading="lazy" src="https://i.imgur.com/fN5aDW6.jpeg" alt="Trabalho em Campo" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-700" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="aspect-square rounded-2xl overflow-hidden premium-border">
                <img loading="lazy" src="https://i.imgur.com/wUu7acL.jpeg" alt="Instalação Profissional" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden premium-border">
                <img loading="lazy" src="https://i.imgur.com/bB3u0aO.jpeg" alt="Sinalização de Emergência" className="w-full h-full object-cover scale-90 opacity-50 hover:opacity-100 transition-all duration-700" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 order-1 lg:order-2"
        >
          <span className="tech-label mb-6 block">Mão de Obra Especializada</span>
          <h2 className="hero-title mb-12 text-gradient">Execução e <br /> Instalação.</h2>
          <p className="text-slate-800 text-lg font-normal leading-relaxed mb-12">
            Não basta ter um bom projeto; a execução precisa ser impecável. Nossa equipe técnica realiza a instalação completa de todos os sistemas de prevenção e combate a incêndio, garantindo que o que foi projetado funcione perfeitamente na prática.
          </p>

          <div className="precision-grid">
            {[
              { title: "Sistemas de Hidrantes", desc: "Instalação de redes de tubulação, bombas, abrigos e mangueiras conforme normas técnicas." },
              { title: "Alarme e Detecção", desc: "Montagem de centrais endereçáveis, detectores de fumaça e acionadores manuais." },
              { title: "Iluminação e Sinalização", desc: "Implementação de rotas de fuga fotoluminescentes e blocos autônomos de emergência." },
              { title: "Sistemas de Supressão", desc: "Instalação de sprinklers, sistemas de CO2 e agentes limpos para áreas críticas." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 border border-slate-200 bg-white/[0.01] hover:bg-white/[0.03] transition-all group">
                <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/20 transition-colors">
                  <Wrench className="text-brand-red w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-1">{item.title}</h4>
                  <p className="text-slate-800 text-base font-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const MeetTheTeam = () => (
  <section id="sobre" className="py-40 bg-slate-50 relative overflow-hidden tech-grid-subtle">
    {/* Background Decorative Technical Visual: Engineering Expertise */}
    <div className="absolute top-0 left-0 w-full h-full opacity-[0.20] pointer-events-none z-0 overflow-hidden">
      <img
        src="/images/fire_safety_inspection_checklist.png"
        alt="Engenharia de Incêndio de Precisão"
        className="absolute top-0 right-0 w-[50vw] h-auto grayscale"
      />
    </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="tech-label mb-6 block">Sobre a FIREX</span>
          <h2 className="hero-title mb-8 text-gradient">Engenharia <br /> com Responsabilidade.</h2>
          <p className="text-slate-800 max-w-xl font-normal text-lg leading-relaxed mb-8">
            Assinamos tecnicamente (ART - Anotação de Responsabilidade Técnica) por cada renovação de AVCB, projeto técnico de combate a incêndio, execução de projeto técnico, laudo e instalação em Montes Claros e região.
          </p>
          <p className="text-slate-800 max-w-xl font-normal text-lg leading-relaxed italic border-l-2 border-brand-red pl-6">
            "Não vendemos apenas projetos; garantimos que sua empresa passe pela vistoria do Corpo de Bombeiros sem interdições, multas ou perda de cobertura do seguro empresarial."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden premium-border mb-8 relative">
            <img
              src="https://i.imgur.com/38yX1tU.jpeg"
              alt="Eng. Pedro Júnior - Diretor Técnico"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              style={{ objectPosition: 'right center' }}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-brand-graphite)_0%,transparent_40%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />

            {/* Technical Overlay */}
            <div className="absolute top-6 right-6 border border-white/20 p-4 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="text-xs text-slate-900 uppercase tracking-widest font-bold">Registro Profissional</div>
              <div className="text-xs text-brand-red font-mono">CREA-MG VERIFIED</div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-4xl font-bold text-slate-900 mb-2">Pedro Júnior — Eng. Mec.</h3>
            <div className="text-brand-red text-base uppercase tracking-[0.2em] font-bold mb-1">Responsável Técnico · FIREX</div>
            <div className="text-slate-800 text-xs uppercase tracking-widest font-medium">CREA-MG Ativo</div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const TerminologyExplanation = () => (
  <section className="py-40 bg-white border-y border-slate-200 relative overflow-hidden tech-grid-subtle">
    {/* Background Decorative Technical Visual: Technical Equipment */}
    <div className="absolute top-0 left-0 w-full h-full opacity-[0.20] pointer-events-none z-0 overflow-hidden">
      <img
        src="/images/gas_leak_test_manometer.png"
        alt="Equipamentos Técnicos de Proteção"
        className="absolute top-1/2 left-0 w-[60vw] h-auto -translate-y-1/2 grayscale"
      />
    </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <span className="tech-label mb-6 block">Dicionário Técnico</span>
          <h2 className="hero-title mb-12 text-gradient">Entenda as <br /> Diferenças.</h2>
          <p className="text-slate-800 text-lg font-normal leading-relaxed mb-12">
            No universo da segurança contra incêndio, muitos termos são usados de forma intercambiável, mas possuem significados técnicos distintos e fundamentais para o processo de regularização.
          </p>
        </div>
        <div className="precision-grid">
          {[
            {
              term: "PPCI",
              meaning: "Plano de Prevenção e Proteção Contra Incêndio. É o conjunto de documentos e plantas que definem todos os sistemas de segurança da edificação. É a fase de planejamento e projeto."
            },
            {
              term: "Projeto Técnico",
              meaning: "É o nome formal dado ao PPCI quando este é submetido Ã  análise do Corpo de Bombeiros. Pode ser Projeto Técnico (PT) ou Projeto Técnico Simplificado (PTS), dependendo da área e do risco."
            },
            {
              term: "Alvará do Corpo de Bombeiros",
              meaning: "Termo genérico usado para se referir Ã  licença de funcionamento emitida pelo órgão. Na prática, é o documento que comprova que a edificação está regularizada."
            },
            {
              term: "AVCB",
              meaning: "Auto de Vistoria do Corpo de Bombeiros. É o documento final, emitido após a aprovação do projeto e a vistoria in loco, certificando que os sistemas foram instalados corretamente e estão operantes."
            }
          ].map((item, i) => (
            <div key={i} className="p-12 bg-white hover:bg-white/[0.02] transition-all group">
              <h4 className="text-brand-red font-bold text-xl mb-4 group-hover:text-brand-red transition-colors">{item.term}</h4>
              <p className="text-slate-800 text-base font-normal leading-relaxed">{item.meaning}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Expertise = () => (
  <section id="expertise" className="py-40 bg-slate-50 relative overflow-hidden tech-grid-subtle">
    {/* Background Decorative Technical Visual: Normative Context */}
    <div className="absolute top-0 left-0 w-full h-full opacity-[0.20] pointer-events-none z-0 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1454165833267-0230777507fd?auto=format&fit=crop&q=80&w=1500"
        alt="Consultoria Técnica e Documentação"
        className="absolute top-0 right-0 w-[50vw] h-auto grayscale"
      />
    </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div className="grid xl:grid-cols-2 gap-32 items-center">
        <div>
          <span className="tech-label mb-6 block">Credenciais e Autoridade</span>
          <h2 className="hero-title mb-12 text-gradient">
            Expertise <br /> Normativa.
          </h2>
          <p className="text-slate-800 text-xl mb-16 font-normal leading-relaxed max-w-xl">
            Nossa atuação é pautada pelo rigor técnico e pela responsabilidade formal.
            Cada projeto é uma peça de engenharia estratégica desenhada para proteger vidas e ativos patrimoniais.
          </p>

          <div className="grid sm:grid-cols-2 gap-12">
            {[
              { title: "CREA-MG", desc: "Registro profissional ativo e regularizado." },
              { title: "CBMMG", desc: "Domínio total das Instruções Técnicas." },
              { title: "ART", desc: "Responsabilidade técnica formal em 100% dos serviços." },
              { title: "ABNT", desc: "Conformidade rigorosa com normas nacionais." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-px h-16 bg-brand-red" />
                <div>
                  <h4 className="text-slate-900 font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-slate-900 text-sm uppercase tracking-widest font-bold">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-surface p-16 rounded-3xl premium-border">
          <h3 className="text-3xl font-bold text-slate-900 mb-12">Diferenciais Estratégicos</h3>
          <div className="space-y-12">
            {[
              { title: "Engenharia de Valor", desc: "Otimizamos sistemas para reduzir custos de instalação sem comprometer a segurança normativa." },
              { title: "Agilidade no INFOSCIP", desc: "Processos estruturados para aprovação célere junto ao Corpo de Bombeiros de MG." },
              { title: "Visão Corporativa", desc: "Entendemos o impacto da segurança na operação e nas apólices de seguro da sua empresa." }
            ].map((item, i) => (
              <div key={i} className="group">
                <h4 className="text-brand-red font-bold text-lg mb-4 group-hover:text-slate-900 transition-colors duration-300">{item.title}</h4>
                <p className="text-slate-800 text-base font-normal leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AVCBRenewal = () => (
  <section id="renovacao" className="py-40 bg-slate-50 relative overflow-hidden tech-grid-subtle">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <span className="text-brand-red text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Continuidade e Segurança</span>
          <h2 className="text-5xl md:text-7xl font-bold text-gradient mb-12 leading-tight">Renovação <br /> de AVCB.</h2>
          <p className="text-slate-800 text-lg font-normal leading-relaxed mb-12">
            O AVCB não é vitalício. Sua validade varia de 1 a 5 anos dependendo da ocupação e do risco. Operar com o documento vencido expõe sua empresa a multas pesadas, interdições e, principalmente, Ã  perda da cobertura do seguro patrimonial.
          </p>

          <div className="space-y-6">
            {[
              { title: "Monitoramento de Prazos", desc: "Avisamos você com 6 meses de antecedência para evitar correria." },
              { title: "Vistoria Prévia de Manutenção", desc: "Garantimos que todos os equipamentos estão operantes antes dos Bombeiros chegarem." },
              { title: "Renovação Sem Burocracia", desc: "Cuidamos de todo o processo no INFOSCIP para você focar no seu negócio." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-brand-red w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-slate-800 text-base font-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden premium-border"
        >
          <img
            src="/images/fire_safety_expired_warning.png"
            alt="Risco e Alerta de AVCB Vencido"
            className="w-full h-full object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 p-10 glass-surface rounded-2xl premium-border">
            <div className="flex items-center gap-4 mb-4">
              <AlertTriangle className="text-brand-red w-6 h-6" />
              <span className="text-slate-900 font-bold">Atenção Síndicos e Gestores</span>
            </div>
            <p className="text-slate-900 text-base font-normal">
              Não deixe para a última hora. A renovação exige tempo para adequações e vistorias. Solicite seu diagnóstico gratuito agora.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ====================================================
// BLOG SECTION — SEO Content Hub
// ====================================================
const blogPosts = [
  {
    slug: '/blog/como-renovar-avcb-montes-claros',
    tag: 'Guia Completo',
    tagColor: 'text-brand-red',
    title: 'Como renovar AVCB em Montes Claros: Passo a Passo',
    desc: 'Guia definitivo para renovar seu Auto de Vistoria (AVCB) sem complicações junto ao CBMMG.',
    readTime: '4 min',
    image: '/images/blog-avcb-renovacao.png',
  },
  {
    slug: '/blog/diferenca-avcb-clcb-alvara',
    tag: 'Técnico',
    tagColor: 'text-brand-red',
    title: 'AVCB, CLCB ou Alvará: Qual sua Edificação Precisa?',
    desc: 'Entenda a diferença técnica e legal entre as licenças do Corpo de Bombeiros de MG.',
    readTime: '3 min',
    image: '/images/blog-diferenca-avcb-clcb.png',
  },
  {
    slug: '/blog/avcb-vencido-consequencias',
    tag: 'Risco & Multas',
    tagColor: 'text-brand-red',
    title: 'Riscos de Operar com AVCB Vencido em MG',
    desc: 'Multas, interdições e responsabilidade criminal — o que acontece quando o AVCB vence.',
    readTime: '5 min',
    image: '/images/blog-avcb-vencido.png',
  },
  {
    slug: '/blog/erros-reprovacao-corpo-de-bombeiros',
    tag: 'Vistoria',
    tagColor: 'text-brand-red',
    title: 'Os 5 Erros que Reprovam na Vistoria dos Bombeiros',
    desc: 'Lista técnica dos erros mais comuns que garantem a reprovação — e como a FIREX evita todos.',
    readTime: '4 min',
    image: '/images/blog-erros-vistoria.png',
  },
  {
    slug: '/blog/extintores-de-incendio-tipos-e-usos',
    tag: 'Equipamentos',
    tagColor: 'text-brand-red',
    title: 'Tipos de Extintores de Incêndio e Quando Usar Cada Um',
    desc: 'Extintor de água, CO², pó químico ou espuma? Saiba qual usar em cada tipo de fogo (Classe A, B, C, D e K).',
    readTime: '5 min',
    image: '/images/blog-avcb-renovacao.png',
  },
  {
    slug: '/blog/sinalizacao-emergencia-normas',
    tag: 'Sinalização',
    tagColor: 'text-brand-red',
    title: 'Sinalização de Emergência: O que as Normas do CBMMG Exigem',
    desc: 'Placas de saída de emergência, extintores, hidrantes e rotas de fuga — posicionamento correto conforme as ITs.',
    readTime: '4 min',
    image: '/images/blog-erros-vistoria.png',
  },
  {
    slug: '/blog/hidrante-e-mangueira-manutencao',
    tag: 'Manutenção',
    tagColor: 'text-brand-red',
    title: 'Hidrante e Mangueira de Incêndio: Manutenção e Prazos',
    desc: 'O prazo do teste hidrostático das mangueiras é uma das principais causas de reprovação. Veja como evitar.',
    readTime: '4 min',
    image: '/images/blog-diferenca-avcb-clcb.png',
  },
  {
    slug: '/blog/documentos-necessarios-regularizacao',
    tag: 'Documentação',
    tagColor: 'text-brand-red',
    title: 'Checklist Completo: Documentos para AVCB e CLCB',
    desc: 'ART, laudo de manutenção, teste hidrostático, planta aprovada — prepare tudo antes para agilizar a aprovação.',
    readTime: '3 min',
    image: '/images/blog-avcb-vencido.png',
  },
  {
    slug: '/blog/projeto-tecnico-ppci-industrial',
    tag: 'Industrial',
    tagColor: 'text-slate-900',
    title: 'PPCI para Indústrias: Como aprovar grandes áreas no CBMMG',
    desc: 'Desafios técnicos na aprovação de indústrias e galpões logísticos seguindo IT 19 e IT 20.',
    readTime: '6 min',
    image: '/images/blog-ppci-industrial.png',
  },
  {
    slug: '/blog/laudo-de-estanqueidade-gas-avcb',
    tag: 'Laudo Técnico',
    tagColor: 'text-brand-red',
    title: 'Laudo de Estanqueidade de Gás: Quando é obrigatório?',
    desc: 'Tudo sobre o teste de pressão e estanqueidade exigido para AVCB em condomínios e restaurantes.',
    readTime: '4 min',
    image: '/images/blog-laudo-estanqueidade.png',
  },
  {
    slug: '/blog/treinamento-brigada-incendio-montes-claros',
    tag: 'Treinamento',
    tagColor: 'text-slate-900',
    title: 'Treinamento de Brigada de Incêndio em Montes Claros',
    desc: 'Formação obrigatória (IT 12) para funcionários e moradores. Garanta a segurança e o AVCB.',
    readTime: '5 min',
    image: '/images/blog-diferenca-avcb-clcb.png',
  },
  {
    slug: '/blog/responsabilidade-sindico-incendio',
    tag: 'Jurídico',
    tagColor: 'text-brand-red',
    title: 'Responsabilidade Civil e Criminal do Síndico em Incêndios',
    desc: 'O que a lei diz sobre a negligência no AVCB e a segurança dos condomínios residenciais.',
    readTime: '6 min',
    image: '/images/blog-avcb-renovacao.png',
  },
];

const BlogSection = () => (
  <section id="blog" className="py-40 bg-slate-50 tech-grid-subtle">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20 px-6"
      >
        <span className="tech-label mb-6 block">
          Conteúdo Técnico Gratuito
        </span>
        <h2 className="hero-title mb-6">
          Blog de <span className="text-gradient">Engenharia</span>
        </h2>
        <p className="text-slate-800 max-w-2xl mx-auto font-normal text-lg">
          Publicamos guias técnicos sobre AVCB, CLCB e regularização junto ao Corpo de Bombeiros Militar de MG (CBMMG) — para que sua empresa esteja sempre em conformidade com a legislação vigente.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="precision-grid md:grid-cols-2">
        {blogPosts.map((post, i) => (
          <motion.a
            key={post.slug}
            href={post.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group block bg-white border border-slate-200 overflow-hidden hover:bg-white/[0.02] transition-all duration-700"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-64">
              <img
                loading="lazy"
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-60" />
              <span className={`absolute top-6 left-6 text-[9px] uppercase tracking-widest font-bold ${post.tagColor} bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200`}>
                {post.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-brand-red transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-800 text-base font-normal leading-relaxed mb-10">
                {post.desc}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-900 uppercase tracking-widest font-bold">
                  {post.readTime} leitura
                </span>
                <div className="flex items-center gap-3 text-brand-red text-sm uppercase tracking-widest font-bold group-hover:gap-6 transition-all duration-500">
                  Ler Artigo
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Official CBMMG Resource Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-32 pt-24 border-t border-slate-200 px-6"
      >
        <p className="text-center text-slate-900 text-xs uppercase tracking-[0.4em] font-bold mb-16">
          🔗 Recursos Oficiais — CBMMG
        </p>
        <div className="precision-grid md:grid-cols-2">
          <a
            href="https://www.bombeiros.mg.gov.br/infoscip"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-6 p-8 premium-border glass-surface hover:border-brand-red/40 transition-all duration-500 rounded-xl"
          >
            <div className="w-12 h-12 flex-shrink-0 bg-brand-red/10 rounded-lg flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
              <ShieldCheck className="w-6 h-6 text-brand-red" />
            </div>
            <div>
              <h4 className="text-slate-900 font-bold text-lg mb-1 group-hover:text-brand-red transition-colors">INFOSCIP — Sistema Oficial CBMMG</h4>
              <p className="text-slate-800 text-base font-normal leading-relaxed">
                Portal oficial para aprovação, renovação e consulta de AVCB/CLCB junto ao Corpo de Bombeiros de Minas Gerais.
              </p>
              <span className="text-brand-red text-[9px] uppercase tracking-widest font-bold flex items-center gap-2 mt-3 group-hover:gap-4 transition-all">
                Acessar Portal <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>

          <a
            href="https://www.bombeiros.mg.gov.br/normastecnicas"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-6 p-8 premium-border glass-surface hover:border-brand-red/40 transition-all duration-500 rounded-xl"
          >
            <div className="w-12 h-12 flex-shrink-0 bg-brand-red/10 rounded-lg flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
              <FileText className="w-6 h-6 text-brand-red" />
            </div>
            <div>
              <h4 className="text-slate-900 font-bold text-lg mb-1 group-hover:text-brand-red transition-colors">Instruções Técnicas (ITs) — CBMMG</h4>
              <p className="text-slate-800 text-base font-normal leading-relaxed">
                Acesse as Instruções Técnicas oficiais que regem todos os projetos de Prevenção e Combate a Incêndio no Estado de MG.
              </p>
              <span className="text-brand-red text-[9px] uppercase tracking-widest font-bold flex items-center gap-2 mt-3 group-hover:gap-4 transition-all">
                Ver Instruções Técnicas <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

// ====================================================
// INLINE CTA — WhatsApp Conversion Section
// ====================================================
const InlineCTA = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    {/* Fire ambient glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-red/5 blur-[120px] rounded-full" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto px-6 text-center relative z-10"
    >
      <div className="fire-line w-16 mx-auto mb-10" />
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
        Sua empresa está com o <br />
        <span className="text-gradient">AVCB em dia?</span>
      </h2>
      <p className="text-slate-900 font-normal text-lg mb-10 max-w-xl mx-auto">
        Uma vistoria irregular do Corpo de Bombeiros pode resultar em multa, interdição e perda do seguro. Solicite um diagnóstico gratuito.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => window.open('https://wa.me/5538984056240?text=Olá! Gostaria de um diagnóstico gratuito do meu AVCB.', '_blank')}
          className="btn-fire px-10 py-4 text-slate-900 text-base uppercase tracking-widest font-bold rounded-none"
        >
          🔥 Diagnóstico Gratuito via WhatsApp
        </button>
        <a
          href="tel:+5538984056240"
          className="px-10 py-4 border border-white/10 text-slate-900 hover:text-slate-900 hover:border-white/30 text-base uppercase tracking-widest font-bold transition-all duration-300"
        >
          (38) 98405-6240
        </a>
      </div>
    </motion.div>
  </section>
);

const GoogleMap = () => (
  <section className="py-40 bg-white tech-grid-subtle">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-20">
        <span className="text-brand-red text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Localização Estratégica</span>
        <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-8">Nossa Base em Montes Claros.</h2>
        <p className="text-slate-800 max-w-2xl mx-auto font-normal">
          Situados no coração do Norte de Minas, atendemos toda a região com agilidade e presença técnica constante.
        </p>
      </div>

      <div className="h-[500px] w-full rounded-3xl overflow-hidden premium-border grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121841.11111111111!2d-43.8888888!3d-16.7166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab1234567890abcdef%3A0x1234567890abcdef!2sMontes%20Claros%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-12 mt-20">
        <div className="flex items-center gap-6">
          <MapPin className="text-brand-red w-8 h-8" />
          <div>
            <h4 className="text-slate-900 font-bold">Endereço</h4>
            <p className="text-slate-800 text-base">Montes Claros, MG - Brasil</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Phone className="text-brand-red w-8 h-8" />
          <div>
            <h4 className="text-slate-900 font-bold">Telefone</h4>
            <p className="text-slate-800 text-base">(38) 98405-6240</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Mail className="text-brand-red w-8 h-8" />
          <div>
            <h4 className="text-slate-900 font-bold">E-mail</h4>
            <p className="text-slate-800 text-base">avcbmoc@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Segments = ({ onSelectSegment }: any) => {
  const segments = [
    {
      id: "industria",
      title: "Indústrias e Logística",
      desc: "Proteção de grandes áreas com carga de incêndio elevada. Especialistas em IT 19 e IT 20 (Carga de Incêndio e Armazenagem).",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800&h=400&grayscale=true", // Realistic warehouse
    },
    {
      id: "saude",
      title: "Hospitais e Prontos-Socorros",
      desc: "Segurança em ambientes críticos com pacientes de mobilidade reduzida. Foco em IT 13 e gases medicinais.",
      icon: Activity,
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800&h=400&grayscale=true", // Hospital with safety signage
    },
    {
      id: "clinicas",
      title: "Clínicas e Consultórios",
      desc: "Regularização ágil para estabelecimentos de saúde de médio porte. Foco em acessibilidade e segurança.",
      icon: Activity,
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&h=400&grayscale=true", // Clinic with extinguisher visible
    },
    {
      id: "farmacias",
      title: "Farmácias e Drogarias",
      desc: "Conformidade normativa para o setor farmacêutico. Foco em armazenamento seguro e licenciamento.",
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800&h=400&grayscale=true", // Realistic pharmacy
    },
    {
      id: "postos",
      title: "Postos de Combustíveis",
      desc: "Regularização específica para áreas de alto risco inflamável. Conformidade com normas ambientais e de segurança.",
      icon: Flame,
      image: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&q=80&w=800&h=400&grayscale=true", // Realistic gas station
    },
    {
      id: "supermercados",
      title: "Supermercados",
      desc: "Gestão de grandes fluxos de pessoas e estoques variados. Foco em sinalização e saídas de emergência.",
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800&h=400&grayscale=true", // Supermarket with visible exit signs
    },
    {
      id: "escolas",
      title: "Escolas e Faculdades",
      desc: "Prioridade absoluta na proteção da vida e evacuação rápida. Treinamento de brigada escolar especializado.",
      icon: Award,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800&h=400&grayscale=true", // School building
    },
    {
      id: "igrejas",
      title: "Igrejas e Templos",
      desc: "Regularização para locais de reunião de público. Foco em lotação máxima e saídas de emergência.",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800&h=400&grayscale=true", // Church architecture
    },
    {
      id: "academias",
      title: "Academias",
      desc: "Segurança para estabelecimentos esportivos com alta rotatividade de alunos.",
      icon: Activity,
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800&h=400&grayscale=true", // Gym with safety signage
    },
    {
      id: "restaurantes",
      title: "Restaurantes e Bares",
      desc: "Proteção específica para cozinhas industriais e áreas de atendimento ao público.",
      icon: Utensils,
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800&h=400&grayscale=true", // Realistic restaurant
    },
    {
      id: "padarias",
      title: "Padarias",
      desc: "Segurança para panificadoras e confeitarias. Foco em fornos, central de gás e áreas de produção.",
      icon: Utensils,
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800&h=400&grayscale=true", // Bakery with safety equipment
    },
    {
      id: "condominios",
      title: "Condomínios",
      desc: "Gestão de AVCB para edifícios residenciais e comerciais. Foco em manutenção e segurança dos moradores.",
      icon: Home,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800&h=400&grayscale=true", // Realistic apartment building
    }
  ];

  const handleSelect = (segment: any) => {
    const fullData = segmentsData.find(s => s.id === segment.id) || segment;
    onSelectSegment({ ...segment, ...fullData });
  };

  return (
    <section id="segmentos" className="py-40 bg-white relative overflow-hidden tech-grid-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className="text-brand-red text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Áreas de Atuação</span>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-8">Soluções Verticais.</h2>
          <p className="text-slate-800 max-w-2xl mx-auto font-normal">
            Domínio técnico absoluto em normas específicas para cada setor da economia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-200">
          {segments.map((segment) => (
            <div
              key={segment.id}
              className="group relative h-[450px] overflow-hidden bg-white hover:bg-slate-50 transition-all duration-700 cursor-pointer"
              onClick={() => onSelectSegment(segment.id)}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={segment.image}
                  alt={segment.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-20 group-hover:opacity-40"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
              </div>

              <div className="relative z-10 p-12 h-full flex flex-col">
                <segment.icon className="w-10 h-10 text-brand-red mb-8 group-hover:scale-110 transition-all duration-500" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-red transition-colors">{segment.title}</h3>
                <p className="text-slate-800 text-base font-normal leading-relaxed mb-8 flex-grow">
                  {segment.desc}
                </p>
                <div className="flex items-center gap-3 text-brand-red text-xs uppercase tracking-widest font-bold group-hover:gap-5 transition-all duration-500">
                  Ver Detalhes Técnicos
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <span className={`text-lg md:text-xl transition-all duration-500 ${isOpen ? 'text-brand-red' : 'text-slate-900 group-hover:text-slate-800'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 border border-white/10 flex items-center justify-center transition-all duration-500 ${isOpen ? 'rotate-180 border-brand-red' : ''}`}>
          <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-brand-red' : 'text-slate-900'}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-slate-800 text-base mt-8 leading-relaxed font-normal max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => (
  <section id="faq" className="py-40 bg-white relative overflow-hidden">
    {/* Background Decorative Elements */}
    <div className="absolute top-0 left-0 w-full h-full opacity-[0.30] pointer-events-none z-0">
      <img
        src="/images/fire_extinguisher_wall.png"
        alt="Extintores"
        className="absolute top-1/2 right-10 w-[30vw] h-auto grayscale"
      />
    </div>

    <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
      <div className="text-center mb-32">
        <span className="tech-label mb-6 block">Esclarecimentos Técnicos</span>
        <h2 className="hero-title">FAQ.</h2>
      </div>
      <div className="precision-grid lg:grid-cols-1">
        <FAQItem
          question="O AVCB é obrigatório para todas as empresas?"
          answer="Sim, o AVCB é obrigatório para todas as edificações de uso coletivo acima de 200m² ou com riscos específicos. Para edificações menores, pode ser exigido o Projeto Técnico Simplificado (PTS)."
        />
        <FAQItem
          question="Qual a validade do AVCB em Minas Gerais?"
          answer="A validade varia de 1 a 5 anos, dependendo do risco da ocupação e da altura da edificação, conforme o Decreto Estadual 47.998/2020."
        />
        <FAQItem
          question="Como evitar multas do Corpo de Bombeiros?"
          answer="A conformidade preventiva é a única via segura. Manter o AVCB atualizado e os sistemas de segurança em perfeito estado de funcionamento garante segurança jurídica e operacional total."
        />
        <FAQItem
          question="Quem pode assinar o projeto de incêndio?"
          answer="Apenas engenheiros ou arquitetos com registro ativo no conselho de classe (CREA/CAU) e atribuição técnica específica podem emitir a ART/RRT de projeto e execução."
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white pt-40 pb-16 border-t border-slate-200 relative overflow-hidden">
    <div className="absolute top-0 right-0 p-20 opacity-[0.30] pointer-events-none select-none overflow-hidden">
      <img
        src="/images/fire_safety_technical_project.png"
        alt="Projeto Técnico"
        className="w-[40vw] h-auto grayscale"
      />
    </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div className="grid lg:grid-cols-4 gap-24 mb-32">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex flex-col mb-10">
            <span className="font-display font-bold text-4xl tracking-tight text-slate-900 leading-none">
              <span className="text-brand-red">FIRE</span>
              <span className="text-brand-red">X</span>
            </span>
            <span className="tech-label text-xs mt-2 opacity-70">Engenharia de Combate a Incêndio</span>
          </div>
          <p className="text-slate-900 text-base leading-relaxed font-normal">
            Referência técnica em engenharia de incêndio no Norte de Minas.
            Compromisso inegociável com o rigor normativo e a segurança patrimonial.
          </p>
        </div>

        <div>
          <h4 className="tech-label mb-10 block opacity-50">Navegação</h4>
          <ul className="space-y-6">
            {['Serviços', 'Expertise', 'Segmentos', 'Blog', 'FAQ'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-slate-800 text-sm uppercase tracking-[0.2em] font-bold hover:text-slate-900 transition-colors duration-300">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="tech-label mb-10 block opacity-50">Contato Estratégico</h4>
          <ul className="space-y-8">
            <li className="flex items-center gap-6 group">
              <Phone className="w-5 h-5 text-brand-red group-hover:scale-110 transition-transform" />
              <span className="text-slate-800 text-base font-normal">(38) 98405-6240</span>
            </li>
            <li className="flex items-center gap-6 group">
              <Mail className="w-5 h-5 text-brand-red group-hover:scale-110 transition-transform" />
              <span className="text-slate-800 text-base font-normal">avcbmoc@gmail.com</span>
            </li>
            <li className="flex items-center gap-6 group">
              <MapPin className="w-5 h-5 text-brand-red group-hover:scale-110 transition-transform" />
              <span className="text-slate-800 text-base font-normal">Av. Corinto Crisóstomo Freire, Morada do Parque - Montes Claros, MG</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="tech-label mb-10 block opacity-50">Credenciais Técnicas</h4>
          <div className="flex gap-4">
            <div className="px-4 py-2 border border-slate-200 bg-white/[0.02] text-xs text-slate-900 font-bold uppercase tracking-widest">CREA-MG</div>
            <div className="px-4 py-2 border border-slate-200 bg-white/[0.02] text-xs text-slate-900 font-bold uppercase tracking-widest">CBMMG</div>
          </div>
        </div>
      </div>

      <div className="pt-16 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-zinc-800 text-xs uppercase tracking-[0.4em] font-bold">
          © 2026 FIREX Engenharia. Engenharia de Combate a Incêndio.
        </p>
        <div className="flex gap-12">
          <Link to="/privacidade" className="text-zinc-800 text-xs uppercase tracking-[0.3em] font-bold hover:text-slate-900 transition-colors">Privacidade</Link>
          <Link to="/termos" className="text-zinc-800 text-xs uppercase tracking-[0.3em] font-bold hover:text-slate-900 transition-colors">Termos de Uso</Link>
        </div>
      </div>
    </div>
  </footer>
);

const WhatsAppFAB = () => (
  <motion.button
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => window.open('https://wa.me/5538984056240', '_blank')}
    className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-600 text-slate-900 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-500 transition-colors glow-subtle"
    aria-label="Falar conosco no WhatsApp"
  >
    <Phone className="w-8 h-8" />
  </motion.button>
);

// --- Page Components ---

const PageTemplate = ({ title, h1, content, seoDesc }: any) => (
  <div className="min-h-screen bg-white pt-32 pb-40">
    <Helmet>
      <title>{title} | Firex</title>
      <meta name="description" content={seoDesc} />
    </Helmet>
    <div className="max-w-4xl mx-auto px-6 lg:px-12">
      <Link to="/" className="text-brand-red text-xs uppercase tracking-[0.3em] font-bold mb-12 flex items-center gap-4 hover:gap-6 transition-all">
        <ArrowRight className="w-4 h-4 rotate-180" /> Voltar para Home
      </Link>
      <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-12 leading-tight">{h1}</h1>
      <div className="prose prose-invert max-w-none text-slate-900 font-normal leading-relaxed">
        {content}
      </div>
      <div className="mt-20 bg-brand-red p-12 rounded-3xl text-center">
        <h3 className="text-3xl font-bold text-slate-900 mb-6">Precisa de auxílio técnico?</h3>
        <button
          onClick={() => window.open('https://wa.me/5538984056240', '_blank')}
          className="bg-white text-brand-red px-12 py-4 rounded-md font-bold uppercase tracking-widest text-base hover:bg-zinc-100 transition-all"
        >
          Falar no WhatsApp
        </button>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <section className="py-40 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-20">
        <span className="text-brand-red text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Prova Social</span>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">Quem Confia na <span className="text-gradient">FIREX</span>.</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            name: "Ricardo S.",
            role: "Síndico Predial",
            text: "A Firex resolveu nosso AVCB que estava pendente há 2 anos. Atendimento técnico impecável e total clareza no processo.",
            rating: 5
          },
          {
            name: "Eng. Marcos Oliveira",
            role: "Gerente industrial",
            text: "O projeto de hidrantes e a instalação foram executados com perfeição. Aprovação de primeira no CBMMG. Recomendo.",
            rating: 5
          },
          {
            name: "Fernanda Lima",
            role: "Proprietária de Restaurante",
            text: "Precisava do CLCB urgente para o alvará. A Firex fez a vistoria e o laudo de gás em tempo recorde. Nota 10.",
            rating: 5
          }
        ].map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="premium-border p-10 bg-white/[0.01] rounded-2xl"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-red" />
              ))}
            </div>
            <p className="text-slate-900 font-normal italic mb-8">"{t.text}"</p>
            <div>
              <p className="text-slate-900 font-bold">{t.name}</p>
              <p className="text-brand-red text-xs uppercase tracking-widest">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const StickyMobileCTA = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] p-4 bg-white/80 backdrop-blur-lg border-t border-slate-200">
    <button
      onClick={() => window.open('https://wa.me/5538984056240?text=Olá! Vim pelo site e gostaria de um orçamento.', '_blank')}
      className="btn-fire w-full py-4 text-slate-900 text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-3"
    >
      <Phone className="w-4 h-4" /> Solicitar Orçamento Grátis
    </button>
  </div>
);

const HomePage = ({ onSelectSegment }: any) => (
  <main>
    <Hero />
    <ProcessTimeline />
    <TechnicalParallax
      image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920&h=1080&grayscale=true"
      subtitle="Compromisso com a Vida"
      title="Engenharia que Protege."
    />
    <TerminologyExplanation />
    <Services />
    <HomeContent />
    <RiskAssessmentTool />
    <ExecutionServices />
    <MeetTheTeam />
    <TechnicalParallax
      image="https://i.imgur.com/ScyZzp7.jpeg"
      subtitle="Infraestrutura de Segurança"
      title="Sistemas de Alta Performance."
    />
    <AVCBRenewal />
    <Expertise />
    <Testimonials />
    <Segments onSelectSegment={onSelectSegment} />
    <BlogSection />
    <InlineCTA />
    <FAQ />
    <GoogleMap />
    <FAQSchema />
  </main>
);

export default function App() {
  const [selectedSegment, setSelectedSegment] = useState<any>(null);

  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans selection:bg-brand-red selection:text-white bg-white">
        <SEOData />
        <LocalBusinessSchema />
        <Navbar />
        <WhatsAppFAB />
        <StickyMobileCTA />

        <Routes>
          <Route path="/" element={<HomePage onSelectSegment={setSelectedSegment} />} />

          {/* Internal Pages */}
          <Route path="/avcb-montes-claros" element={
            <PageTemplate
              title="AVCB em Montes Claros"
              h1="AVCB em Montes Claros: Regularização Completa"
              seoDesc="Tudo sobre AVCB em Montes Claros. Obtenha seu Auto de Vistoria do Corpo de Bombeiros com a Firex Engenharia."
              content={
                <>
                  <p>O <strong>AVCB em Montes Claros</strong> é um documento essencial para qualquer edificação comercial, industrial ou de reunião de público. Ele garante que o local foi vistoriado e aprovado pelo Corpo de Bombeiros Militar de Minas Gerais (CBMMG).</p>
                  <h2>Por que o AVCB é obrigatório?</h2>
                  <p>A obrigatoriedade do AVCB advém da necessidade de garantir a segurança das pessoas que circulam no imóvel. Além disso, é um requisito para a obtenção do Alvará de Funcionamento da Prefeitura e para a validade de apólices de seguro.</p>
                  <h2>O Processo de Obtenção</h2>
                  <p>Para obter o <strong>AVCB em Montes Claros</strong>, é necessário passar por etapas de projeto, instalação de equipamentos (como extintores, hidrantes e alarmes) e a vistoria final dos bombeiros.</p>
                </>
              }
            />
          } />

          <Route path="/alvara-corpo-de-bombeiros" element={
            <PageTemplate
              title="Alvará do Corpo de Bombeiros"
              h1="Alvará do Corpo de Bombeiros: Licenciamento Técnico"
              seoDesc="Saiba como obter o Alvará do Corpo de Bombeiros. Regularização técnica para empresas e condomínios."
              content={
                <>
                  <p>O <strong>Alvará do Corpo de Bombeiros</strong> é a licença que atesta a conformidade de uma edificação com as normas de segurança contra incêndio e pânico. Em Minas Gerais, este processo é gerido pelo sistema INFOSCIP.</p>
                  <h2>Diferença entre Alvará e AVCB</h2>
                  <p>Embora usados como sinônimos, o AVCB é o documento físico que representa o alvará para edificações de maior risco. Para edificações menores, o documento emitido é o CLCB.</p>
                </>
              }
            />
          } />

          <Route path="/renovar-avcb-montes-claros" element={
            <PageTemplate
              title="Renovar AVCB em Montes Claros"
              h1="Como Renovar AVCB em Montes Claros"
              seoDesc="Processo rápido para renovar AVCB em Montes Claros. Evite multas e mantenha sua empresa segura."
              content={
                <>
                  <p><strong>Renovar AVCB em Montes Claros</strong> é uma tarefa periódica que exige atenção aos prazos. A validade do documento varia, mas a manutenção dos sistemas deve ser constante.</p>
                  <h2>Passo a Passo para Renovação</h2>
                  <p>1. Vistoria técnica preliminar.<br />2. Manutenção de equipamentos.<br />3. Emissão de laudos e ARTs.<br />4. Protocolo de renovação no INFOSCIP.</p>
                </>
              }
            />
          } />

          <Route path="/renovar-alvara-corpo-de-bombeiros" element={
            <PageTemplate
              title="Renovar Alvará do Corpo de Bombeiros"
              h1="Renovação de Alvará do Corpo de Bombeiros"
              seoDesc="Saiba como renovar seu alvará do Corpo de Bombeiros em MG. Processo simplificado e seguro."
              content={
                <>
                  <p>A <strong>renovação do alvará do Corpo de Bombeiros</strong> é obrigatória para manter a licença de funcionamento ativa. O processo envolve a verificação de todos os itens de segurança.</p>
                  <h2>Documentos Necessários</h2>
                  <p>Para renovar, você precisará das ARTs de manutenção, laudos de estanqueidade (se houver gás) e o comprovante de pagamento da taxa estadual.</p>
                </>
              }
            />
          } />

          <Route path="/clcb-minas-gerais" element={
            <PageTemplate
              title="CLCB Minas Gerais"
              h1="CLCB: Certificado de Licenciamento do Corpo de Bombeiros"
              seoDesc="Tudo sobre o CLCB em Minas Gerais. Licenciamento para edificações de baixo risco."
              content={
                <>
                  <p>O <strong>CLCB (Certificado de Licenciamento do Corpo de Bombeiros)</strong> é destinado a edificações com área de até 750mÂ² e baixo risco de incêndio.</p>
                  <h2>Vantagens do CLCB</h2>
                  <p>O processo é simplificado e, em muitos casos, a vistoria pode ser feita por amostragem, agilizando a liberação do documento.</p>
                </>
              }
            />
          } />

          <Route path="/projeto-tecnico-incendio" element={
            <PageTemplate
              title="Projeto Técnico de Incêndio"
              h1="Elaboração de Projeto Técnico Contra Incêndio"
              seoDesc="Projetos técnicos de incêndio em Montes Claros. Engenharia especializada para aprovação no CBMMG."
              content={
                <>
                  <p>Um <strong>Projeto Técnico de Incêndio</strong> bem elaborado é a base para uma edificação segura. Ele deve seguir rigorosamente as Instruções Técnicas do Corpo de Bombeiros.</p>
                  <h2>O que contempla o projeto?</h2>
                  <p>Plantas de situação, detalhes de hidrantes, rotas de fuga, sinalização e cálculos de carga de incêndio.</p>
                </>
              }
            />
          } />

          <Route path="/engenharia-contra-incendio" element={
            <PageTemplate
              title="Engenharia Contra Incêndio"
              h1="Serviços Especializados de Engenharia Contra Incêndio"
              seoDesc="Firex Engenharia: Sua parceira em segurança contra incêndio e pânico no Norte de Minas."
              content={
                <>
                  <p>A <strong>Engenharia Contra Incêndio</strong> vai além da burocracia; trata-se de salvar vidas e proteger investimentos. Na Firex, unimos tecnologia e conhecimento normativo.</p>
                </>
              }
            />
          } />

          {/* Blog Routes */}
          <Route path="/blog/como-renovar-avcb-montes-claros" element={
            <PageTemplate
              title="Como renovar AVCB em Montes Claros passo a passo"
              h1="Como renovar AVCB em Montes Claros: Passo a Passo"
              seoDesc="Guia definitivo para renovar seu AVCB em Montes Claros sem complicações. Evite multas do CBMMG."
              content={
                <div className="space-y-6 text-slate-900 font-normal leading-relaxed">
                  <p>A renovação do <strong>Auto de Vistoria do Corpo de Bombeiros (AVCB)</strong> em Montes Claros é obrigatória para manter a legalidade de condomínios, indústrias e comércios. Sem ele, seguros não pagam prêmios em caso de sinistro.</p>
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Passo 1: Vistoria Prévia de Engenharia</h2>
                  <p>Antes de acionar os Bombeiros (CBMMG), um <strong>Engenheiro Mecânico especialista em PPCI</strong> deve realizar um diagnóstico da edificação para garantir que hidrantes, alarmes e extintores estão de acordo com as Instruções Técnicas.</p>
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Passo 2: Emissão da ART e Laudos</h2>
                  <p>A FIREX emite a Anotação de Responsabilidade Técnica (ART) atestando o pleno funcionamento dos sistemas de combate a incêndio. Esse documento é exigido pelo sistema Infoscip.</p>
                  <div className="bg-white/80 p-6 border-l-4 border-brand-red rounded-r-xl mt-8">
                    <p className="text-brand-red font-bold mb-2">Despacho Acelerado</p>
                    <p className="text-slate-900 text-base">A FIREX Engenharia atua diretamente em Montes Claros - MG. Cuidamos de toda a burocracia para emissão do seu AVCB/CLCB.</p>
                  </div>
                </div>
              }
            />
          } />

          <Route path="/blog/diferenca-avcb-clcb-alvara" element={
            <PageTemplate
              title="Diferença entre AVCB, CLCB e Alvará de Incêndio"
              h1="AVCB, CLCB ou Alvará: Qual sua Edificação Precisa?"
              seoDesc="Entenda a diferença técnica e legal entre AVCB (Auto de Vistoria) e CLCB (Certificado de Licenciamento) emitidos pelo Corpo de Bombeiros."
              content={
                <div className="space-y-6 text-slate-900 font-normal leading-relaxed">
                  <p>A confusão entre os termos é comum, mas a escolha errada atrasa a abertura de empresas. A legislação de Minas Gerais divide as licenças pelo grau de risco da ocupação.</p>
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">O que é o CLCB? (Risco Baixo)</h2>
                  <p>O Certificado de Licenciamento do Corpo de Bombeiros (CLCB) aplica-se a edificações menores (até 200m²), sem riscos especiais. Em muitos casos, um <strong>Engenheiro responsável</strong> emite a ART e a liberação é feita sem vistoria in loco do CBMMG.</p>
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">O que é o AVCB? (Risco Médio/Alto)</h2>
                  <p>O Auto de Vistoria obriga a aprovação de um <strong>Projeto de Prevenção e Combate a Incêndio (PPCI)</strong> detalhado. Exige sistemas robustos (hidrantes, alarme, sprinklers) e uma vistoria física de um Sargento/Oficial dos Bombeiros.</p>
                </div>
              }
            />
          } />

          <Route path="/blog/avcb-vencido-consequencias" element={
            <PageTemplate
              title="O que acontece se o AVCB vencer | Multas e Riscos"
              h1="Riscos de Operar com o AVCB Vencido em MG"
              seoDesc="Quais as penalidades, multas e riscos jurídicos (responsabilidade civil/criminal) de operar com o Auto de Vistoria do CBMMG vencido."
              content={
                <div className="space-y-6 text-slate-900 font-normal leading-relaxed">
                  <p>Operar com documentação vencida caracteriza negligência estrutural segundo a lei estadual de Minas Gerais. As sanções evoluem drasticamente.</p>
                  <ul className="list-disc pl-5 space-y-3 mt-4">
                    <li><strong className="text-slate-900">Multas Financeiras:</strong> O CBMMG pode aplicar multas diárias severas (Calculadas em UFEMG).</li>
                    <li><strong className="text-slate-900">Interdição:</strong> O fechamento do estabelecimento é imediato em caso de Risco Iminente.</li>
                    <li><strong className="text-slate-900">Quebra de Apólice:</strong> Seguradoras utilizam o AVCB vencido como cláusula de exclusão, recusando o pagamento de indenizações num sinistro.</li>
                    <li><strong className="text-slate-900">Risco Criminal:</strong> Síndicos e Diretores respondem criminalmente (dolo eventual) caso haja vítimas em um prédio sem laudo técnico vigente.</li>
                  </ul>
                  <p className="mt-8">Não arrisque. Consulte uma <strong>Engenharia Especializada em Combate a Incêndio</strong> para agilizar sua regularização.</p>
                </div>
              }
            />
          } />

          <Route path="/blog/erros-reprovacao-corpo-de-bombeiros" element={
            <PageTemplate
              title="Principais Erros que Reprovam no Corpo de Bombeiros"
              h1="5 Erros na Vistoria dos Bombeiros (e como evitá-los)"
              seoDesc="Lista técnica dos 5 erros mais comuns que causam a reprovação na vistoria do Corpo de Bombeiros de Minas Gerais."
              content={
                <div className="space-y-6 text-slate-900 font-normal leading-relaxed">
                  <p>A taxa de reprovação em vistorias iniciais é alta (quase 40%) por falta de gestão técnica adequada (falhas de engenharia e execução).</p>
                  <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">1. Divergência de Layout</h3>
                  <p>O layout físico do local (paredes, portas) está diferente da planta do Projeto (PPCI) aprovado no INFOSCIP.</p>
                  <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">2. Validade dos Extintores e Mangueiras</h3>
                  <p>Equipamentos sem selo do INMETRO ou com teste hidrostático das mangueiras vencido são alvos fáceis.</p>
                  <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">3. Luzes de Emergência Instaladas Irregularmente</h3>
                  <p>Autonomia de bateria insuficiente (meno que 1 a 2 horas) ou ausência de iluminância mínima exigida pela IT correspondente.</p>
                  <div className="bg-white/50 p-6 border-l-4 border-brand-red rounded-r-lg my-8">
                    <p className="text-slate-900 font-medium">Contratar a consultoria da FIREX Engenharia zera os riscos de reprovação. Verificamos cada equipamento antes do Bombeiro pisar no local.</p>
                  </div>
                </div>
              }
            />
          } />

          <Route path="/blog/extintores-de-incendio-tipos-e-usos" element={
            <PageTemplate
              title="Tipos de Extintores de Incêndio e Suas Classes"
              h1="Extintores de Incêndio: Guia de Classes A, B, C, D e K"
              seoDesc="Entenda qual extintor usar para cada tipo de fogo. Guia técnico sobre extintores de Água, CO2, Pó Químico e Espuma."
              content={
                <div className="space-y-6 text-slate-900 font-normal leading-relaxed">
                  <p>O uso do extintor errado pode agravar um incêndio. É fundamental que a equipe da sua empresa saiba identificar a classe do fogo antes de agir.</p>
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Principais Tipos e Usos</h2>
                  <ul className="list-disc pl-5 space-y-3">
                    <li><strong className="text-slate-900">Água (Classe A):</strong> Indicado para materiais sólidos como papel, madeira e tecidos. Jamais use em equipamentos elétricos.</li>
                    <li><strong className="text-slate-900">Pó Químico (Classes B e C):</strong> O mais versátil. Combate líquidos inflamáveis e equipamentos elétricos energizados.</li>
                    <li><strong className="text-slate-900">CO2 (Classes B e C):</strong> Gás inerte que não deixa resíduos. Ideal para salas de servidores e painéis elétricos sensíveis.</li>
                  </ul>
                  <div className="bg-white/50 p-6 border-l-4 border-brand-red rounded-r-lg my-8 italic">
                    <p className="text-slate-900">Dica Técnica: Verifique o manômetro mensalmente. A agulha deve estar sempre na faixa verde.</p>
                  </div>
                </div>
              }
            />
          } />

          <Route path="/blog/sinalizacao-emergencia-normas" element={
            <PageTemplate
              title="Normas de Sinalização de Emergência CBMMG"
              h1="Sinalização de Emergência: O que as ITs Exigem"
              seoDesc="Tudo sobre placas de saída, rotas de fuga e sinalização fotoluminescente conforme as normas do Corpo de Bombeiros de Minas Gerais."
              content={
                <div className="space-y-6 text-slate-900 font-normal leading-relaxed">
                  <p>A sinalização de emergência não é apenas estética; ela salva vidas durante um abandono de área sob fumaça espessa.</p>
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Requisitos da IT 15 (CBMMG)</h2>
                  <p>As placas devem ser fotoluminescentes, garantindo visibilidade mesmo na ausência total de luz. O posicionamento deve seguir alturas específicas para placas de saída, extintores e hidrantes.</p>
                  <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">Tipos de Sinalização:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Sinalização de Orientação e Salvamento (Saídas).</li>
                    <li>Sinalização de Alerta (Risco de choque, inflamáveis).</li>
                    <li>Sinalização de Equipamentos (Onde estão os extintores).</li>
                  </ul>
                </div>
              }
            />
          } />

          <Route path="/blog/hidrante-e-mangueira-manutencao" element={
            <PageTemplate
              title="Manutenção de Hidrantes e Teste de Mangueiras"
              h1="Hidrante e Mangueira: Prazos e Manutenção"
              seoDesc="Saiba tudo sobre o teste hidrostático de mangueiras de incêndio e a manutenção preventiva do sistema de hidrantes para AVCB."
              content={
                <div className="space-y-6 text-slate-900 font-normal leading-relaxed">
                  <p>Um sistema de hidrantes parado sem manutenção é um risco invisível. O teste hidrostático anual das mangueiras é um dos itens mais cobrados pelo CBMMG.</p>
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">O que deve ser verificado?</h2>
                  <p>Pressão da bomba de incêndio, integridade dos esguichos, lubrificação das válvulas e a dobra correta das mangueiras (vinco ou aduchada).</p>
                  <div className="bg-zinc-900/50 p-8 rounded-2xl border border-slate-200 my-10 text-center">
                    <p className="text-brand-red font-bold text-3xl mb-4">Atenção!</p>
                    <p className="text-slate-900">Mangueiras sem teste hidrostático vigente reprovam o AVCB imediatamente.</p>
                  </div>
                </div>
              }
            />
          } />

          <Route path="/blog/documentos-necessarios-regularizacao" element={
            <PageTemplate
              title="Checklist de Documentos para AVCB e CLCB"
              h1="Checklist: Documentação para Regularização no CBMMG"
              seoDesc="Lista completa de documentos e ARTs necessárias para aprovar seu AVCB ou renovar seu CLCB em Minas Gerais."
              content={
                <div className="space-y-6 text-slate-900 font-normal leading-relaxed">
                  <p>A burocracia do sistema INFOSCIP pode ser complexa. Ter os documentos organizados acelera em semanas a emissão do seu certificado.</p>
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Lista Essencial</h2>
                  <ul className="list-disc pl-5 space-y-3">
                    <li><strong className="text-slate-900">ART de Projeto:</strong> emitido pelo engenheiro projetista.</li>
                    <li><strong className="text-slate-900">ART de Execução:</strong> caso tenha havido instalação recente.</li>
                    <li><strong className="text-slate-900">Laudo de Estanqueidade:</strong> necessário se houver sistema de GLP ou Gás Natural.</li>
                    <li><strong className="text-slate-900">Atestado de Brigada:</strong> comprovante de treinamento dos funcionários (IT 12).</li>
                  </ul>
                </div>
              }
            />
          } />

          <Route path="/blog/projeto-tecnico-ppci-industrial" element={
            <PageTemplate
              title="PPCI Industrial: Desafios e Normativas Grandes Áreas"
              h1="PPCI para Indústrias: Proteção de Grandes Áreas"
              seoDesc="Como elaborar e aprovar o Plano de Prevenção Contra Incêndio (PPCI) para indústrias e galpões logísticos."
              content={
                <div className="space-y-6 text-slate-900 font-normal leading-relaxed">
                  <p>Indústrias possuem cargas de incêndio elevadas e riscos peculiares (produtos químicos, máquinas térmicas). O projeto deve ser preciso.</p>
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Foco na IT 19 e IT 20</h2>
                  <p>O dimensionamento de reservas de incêndio e a distância entre saídas de emergência em galpões de grandes vãos exigem cálculos de engenharia complexos que a FIREX domina.</p>
                </div>
              }
            />
          } />

          <Route path="/blog/laudo-de-estanqueidade-gas-avcb" element={
            <PageTemplate
              title="Laudo de Estanqueidade de Gás para AVCB"
              h1="Laudo de Estanqueidade: Teste de Pressão em Gás"
              seoDesc="Tudo sobre a obrigatoriedade do laudo de estanqueidade de gás para aprovação do AVCB em condomínios e restaurantes."
              content={
                <div className="space-y-6 text-slate-900 font-normal leading-relaxed">
                  <p>Vazamentos de gás são causas frequentes de explosões. O laudo atesta que a tubulação não possui vazamentos sob pressão monitorada.</p>
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Validade e Exigência</h2>
                  <p>Geralmente exigido a cada 12 meses para renovação de AVCB em locais com central de GLP ou Gás Encanado. A FIREX utiliza manômetros calibrados para garantir o teste real.</p>
                </div>
              }
            />
          } />

          <Route path="/blog/treinamento-brigada-incendio-montes-claros" element={
            <PageTemplate
              title="Treinamento de Brigada de Incêndio IT 12"
              h1="Formação de Brigada de Incêndio em Montes Claros"
              seoDesc="Curso de brigada de incêndio conforme a IT 12 do CBMMG. Treinamento teórico e prático para sua equipe."
              content={
                <div className="space-y-6 text-slate-900 font-normal leading-relaxed">
                  <p>Equipamentos de incêndio não funcionam sozinhos. Pessoas treinadas são o elo mais importante da corrente de segurança.</p>
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Conteúdo do Treinamento</h2>
                  <p>Primeiros socorros, combate a princípios de incêndio, uso de extintores e plano de evacuação de emergência.</p>
                </div>
              }
            />
          } />

          <Route path="/blog/responsabilidade-sindico-incendio" element={
            <PageTemplate
              title="Responsabilidade do Síndico em Caso de Incêndio"
              h1="O Síndico e a Responsabilidade Civil/Criminal"
              seoDesc="As implicações legais para síndicos que negligenciam o AVCB ou a manutenção dos sistemas de incêndio do condomínio."
              content={
                <div className="space-y-6 text-slate-900 font-normal leading-relaxed">
                  <p>O Código Civil é claro: o síndico responde pela conservação das partes comuns. Negligenciar o AVCB pode gerar responsabilização pessoal em sinistros.</p>
                  <div className="bg-brand-red/10 p-6 border-l-4 border-brand-red rounded-r-lg my-8">
                    <p className="text-slate-900 font-medium italic">"A falta de AVCB desconfigura o seguro do condomínio, deixando o síndico vulnerável a processos dos moradores."</p>
                  </div>
                </div>
              }
            />
          } />

          <Route path="/privacidade" element={
            <PageTemplate
              title="Política de Privacidade"
              h1="Privacidade e Proteção de Dados"
              seoDesc="Conheça a política de privacidade da FIREX Engenharia. Respeito à LGPD e segurança das suas informações."
              content={
                <div className="space-y-6">
                  <p>A <strong>FIREX Engenharia</strong> valoriza a privacidade dos seus clientes e visitantes. Esta política descreve como tratamos as informações coletadas através do nosso site.</p>
                  <h2>1. Coleta de Dados</h2>
                  <p>Coletamos apenas os dados necessários para contato comercial (Nome, Telefone, E-mail) quando você utiliza nossos canais de atendimento ou formulários.</p>
                  <h2>2. Finalidade</h2>
                  <p>Os dados são utilizados exclusivamente para o fornecimento de orçamentos, consultoria técnica em engenharia de incêndio e comunicações relacionadas aos serviços contratados.</p>
                  <h2>3. Segurança</h2>
                  <p>Implementamos medidas técnicas para proteger seus dados contra acessos não autorizados, conforme as diretrizes da Lei Geral de Proteção de Dados (LGPD).</p>
                </div>
              }
            />
          } />

          <Route path="/termos" element={
            <PageTemplate
              title="Termos de Uso"
              h1="Termos e Condições de Uso"
              seoDesc="Termos de uso do site FIREX Engenharia. Informações legais sobre nossos serviços e consultoria técnica."
              content={
                <div className="space-y-6">
                  <p>Ao acessar o site da <strong>FIREX Engenharia</strong>, você concorda em cumprir estes termos de serviço e todas as leis e regulamentos aplicáveis.</p>
                  <h2>1. Uso de Licença</h2>
                  <p>O conteúdo deste site (textos, imagens técnicas, logotipos) é de propriedade da FIREX Engenharia e protegido por leis de direitos autorais. O uso indevido para fins comerciais por terceiros é proibido.</p>
                  <h2>2. Isenção de Responsabilidade</h2>
                  <p>As informações técnicas contidas no blog e nas páginas de serviços são de caráter informativo. Cada projeto de engenharia deve ser analisado individualmente por um profissional habilitado (ART).</p>
                  <h2>3. Limitações</h2>
                  <p>A FIREX Engenharia não se responsabiliza por decisões tomadas exclusivamente baseadas no conteúdo informativo deste site sem a devida consultoria técnica formal.</p>
                </div>
              }
            />
          } />

        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
