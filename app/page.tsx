"use client";

import { useState } from "react";
import Image from "next/image";
import { Monitor, Smartphone, CheckSquare, LineChart, Home, Users, Plus, NotebookPen, CalendarDays, Pill, FileText, ChevronLeft, ChevronRight, AlertCircle, Clock, FileWarning, SearchX } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[200vh] font-sans text-slate-800 relative bg-[#1b3664]">
      {/* Background Image layer */}
      <div className="fixed inset-0 z-0 bg-[url('/landing-page-tesis/eleam.jpg')] bg-cover bg-center bg-no-repeat pointer-events-none"></div>

      {/* Global Background Gradient Overlay layer - Degradado lineal 90º (#004aad a #5de0e6) */}
      <div className="fixed inset-0 z-0 bg-gradient-to-r from-[#004aad]/85 to-[#5de0e6]/85 pointer-events-none"></div>

      {/* Static Header section - Rectángulo azul superior que cubre todo el ancho */}
      <div className="relative z-10 flex flex-col w-full border-none">
        <div className="bg-[#302982]/[58%] backdrop-blur-[2px] pt-10 pb-20 md:pt-16 md:pb-28 text-white flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            {/* Logo House + */}
            <div className="relative flex items-center justify-center mb-4 md:mb-0 md:mr-4">
              <svg
                className="w-20 h-20 md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] drop-shadow-md shrink-0"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* House body with Door cutout. Sharp corners, explicit mathematically perfectly parallel gap separating from roof */}
                <path
                  d="M 28 58 L 60 30 L 92 58 L 92 106 L 70 106 L 70 82 L 50 82 L 50 106 L 28 106 Z"
                  fill="#26cfa8"
                />

                {/* Roof structure - Sharp butt limits */}
                <path
                  d="M 12 58 L 60 16 L 108 58"
                  stroke="#26cfa8"
                  strokeWidth="12"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                />

                {/* White Medical Plus Sign - Centered between roof peak and door */}
                <rect x="54" y="41" width="12" height="30" fill="white" />
                <rect x="45" y="50" width="30" height="12" fill="white" />
              </svg>
            </div>

            {/* Titles */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h1 className="font-bold leading-tight uppercase drop-shadow-md pb-1 border-b-2 border-transparent text-3xl md:text-4xl lg:text-5xl">
                Sistema Web de Gestión <br className="hidden md:block" />
                y Control para <span className="text-[#26cfa8]">ELEAM</span>
              </h1>
            </div>
          </div>

          <p className="font-semibold text-slate-100 opacity-[58%] [-webkit-text-stroke:0.5px_white] text-[13px] md:text-xl tracking-wide mt-6 md:mt-8 text-center drop-shadow-md px-4">
            Un proyecto tesis de Ingeniería de Ejecución en Computación e Informática
          </p>
        </div>
      </div>

      {/* Sticky White Navbar */}
      <div className="sticky top-4 z-50 w-full flex justify-center -mt-6 md:-mt-8">
        <div className="w-[95%] lg:w-[90%] xl:w-[85%] rounded-full border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.15)] py-2 md:py-3 px-4 md:px-6 bg-white text-slate-800 flex items-center justify-between">
          <NavItems />
        </div>
      </div>

      {/* Main Content Spacer for overlapping navbar */}
      <div className="h-16 md:h-12 lg:h-10"></div>

      {/* Main content body */}
      <main className="flex-1 w-[95%] lg:w-[90%] xl:w-[85%] mx-auto py-12 md:py-24 relative z-10">
        <ProblematicaSection />

        {/* Section: ¿Que es? */}
        <div id="que-es" className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center md:items-start text-white p-2 scroll-mt-24 md:scroll-mt-32">

          {/* Text wrapper with text-shadow for better legibility against backgrounds */}
          <div className="flex-1 space-y-4 md:space-y-6 drop-shadow-md pt-2 md:pt-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-serif flex items-center gap-2 text-white [-webkit-text-stroke:1.5px_#004978A6]">
              ¿Que es?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-50 font-medium">
              El <strong>Sistema Web de Gestión y Control para Establecimientos de Larga Estadía de Adulto Mayor (ELEAM)</strong>, es una plataforma web que permite gestionar bitácoras, turnos, avisos, administración de medicamentos, y organizar la información importante del día a día del personal de trato directo del eleam de Coronel.
            </p>
          </div>

          {/* Right side graphic mockup */}
          <div className="flex-1 w-full max-w-md pt-4 md:pt-0">
            <div className="bg-[#113958] rounded-tl-xl rounded-tr-xl rounded-bl-md rounded-br-md p-6 w-full shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative aspect-[4/3] flex flex-col items-center justify-end border-b-[6px] border-[#0a2336] group overflow-hidden">

              {/* Browser buttons */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-[#17486e] rounded-tl-xl rounded-tr-xl flex gap-1.5 items-center px-4 z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              </div>

              {/* Inner glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#26cfa8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

              {/* Center network / horseshoe representation */}
              <div className="w-full h-full mt-6 relative z-10 flex items-end justify-center">
                <svg
                  viewBox="0 0 100 80"
                  className="w-[95%] h-full text-white transition-transform duration-500 ease-out drop-shadow-md"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath id="gear-clip">
                      <rect x="0" y="0" width="100" height="56" />
                    </clipPath>
                  </defs>
                  <style>
                    {`
                          @keyframes floatNode {
                            0%, 100% { transform: translateY(0); }
                            50% { transform: translateY(-2px); }
                          }
                          @keyframes rockGear {
                            0%, 100% { transform: rotate(-6deg); }
                            50% { transform: rotate(6deg); }
                          }
                          .group:hover .animate-gear {
                            animation: rockGear 3s ease-in-out infinite;
                            transform-origin: 50px 56px;
                          }
                          .group:hover .animate-node { animation: floatNode 2.5s ease-in-out infinite; }
                          .group:hover .animate-node-delay-1 { animation: floatNode 2.5s ease-in-out infinite 0.5s; }
                          .group:hover .animate-node-delay-2 { animation: floatNode 2.5s ease-in-out infinite 1s; }
                          .group:hover .animate-node-delay-3 { animation: floatNode 2.5s ease-in-out infinite 1.5s; }
                          .group:hover .animate-node-delay-4 { animation: floatNode 2.5s ease-in-out infinite 2s; }
                        `}
                  </style>

                  {/* === Monitor Inside the Browser Tab === */}
                  <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    {/* Monitor Stand */}
                    <path d="M 42 66 L 35 77 M 58 66 L 65 77" strokeWidth="2.5" />
                    <rect x="25" y="77" width="50" height="3" rx="1.5" stroke="none" fill="currentColor" />

                    {/* Monitor Screen Frame */}
                    <rect x="6" y="8" width="88" height="58" rx="3" strokeWidth="2.5" />

                    {/* Monitor Inner Screen Bezel Line */}
                    <line x1="6" y1="56" x2="94" y2="56" strokeWidth="2.5" />

                    {/* Monitor Bottom Bezel details (Two dashes) */}
                    <line x1="22" y1="61" x2="30" y2="61" strokeWidth="2.5" />
                    <line x1="70" y1="61" x2="78" y2="61" strokeWidth="2.5" />
                  </g>

                  {/* --- Modules (Nodes) Radiating --- */}
                  {/* Nodes pushed outwards toward the screen borders safely */}
                  <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none">
                    {/* Node 1: Far Left */}
                    <g className="animate-node">
                      <circle cx="14.5" cy="43" r="3" />
                      <line x1="18.5" y1="44.5" x2="22" y2="46" />
                    </g>

                    {/* Node 2: Top Left */}
                    <g className="animate-node-delay-1">
                      <circle cx="28" cy="25" r="3" />
                      <line x1="31" y1="28" x2="34" y2="32" />
                    </g>

                    {/* Node 3: Top Center */}
                    <g className="animate-node-delay-2">
                      <circle cx="50" cy="18" r="3" />
                      <line x1="50" y1="22.25" x2="50" y2="27" />
                    </g>

                    {/* Node 4: Top Right */}
                    <g className="animate-node-delay-3">
                      <circle cx="72" cy="25" r="3" />
                      <line x1="69" y1="28" x2="66" y2="32" />
                    </g>

                    {/* Node 5: Far Right */}
                    <g className="animate-node-delay-4">
                      <circle cx="85.5" cy="43" r="3" />
                      <line x1="81.5" y1="44.5" x2="78" y2="46" />
                    </g>
                  </g>

                  {/* --- Dashboard Decorative Dashes --- */}
                  {/* Moved cleanly away from nodes */}
                  <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="10" y1="26" x2="16" y2="26" />
                    <line x1="90" y1="26" x2="84" y2="26" />
                    <line x1="10" y1="52" x2="16" y2="52" />
                    <line x1="90" y1="52" x2="84" y2="52" />
                  </g>

                  {/* --- "Herradura" / Half Gear representing Operability --- */}
                  {/* Added clipPath and animation class so rocking motion doesn't poke below the screen border */}
                  <g clipPath="url(#gear-clip)">
                    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="animate-gear">
                      {/* Outer continuous gear shape with teeth */}
                      <path d="
                               M 28 64 
                               L 28 56 
                               L 29 50.5 L 34.7 52 
                               A 16 16 0 0 1 37 47
                               L 32 43.5 L 37.5 38 L 41 43
                               A 16 16 0 0 1 47 40
                               L 47 34 L 53 34 L 53 40
                               A 16 16 0 0 1 59 43
                               L 62.5 38 L 68 43.5 L 63 47
                               A 16 16 0 0 1 65.3 52
                               L 71.1 50.5 L 72 56
                               L 72 64
                             " strokeWidth="2.5" fill="none" />

                      {/* Inner gear hole arc */}
                      <path d="M 42 64 L 42 56 A 8 8 0 0 1 58 56 L 58 64" strokeWidth="2.5" fill="none" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Breakout full-width section */}
      <div className="w-full relative z-10">
        <FeaturesSection />
      </div>

      {/* Re-open constrained main body */}
      <main className="flex-1 w-[95%] lg:w-[90%] xl:w-[85%] mx-auto pb-12 md:pb-24 relative z-10">
        <BeneficiosSection />

        <ProyeccionSection />

      </main>

      {/* Breakout for EL ELEAM */}
      <div id="el-eleam" className="w-full relative z-10 bg-white py-16 md:py-24 border-t border-slate-200 scroll-mt-0">
        <EleamSection />
      </div>
    </div>
  );
}

function NavItems() {
  const items = [
    { label: "PROBLEMÁTICA", id: "problematica" },
    { label: "MI PROYECTO", id: "que-es" },
    { label: "CARACTERÍSTICAS", id: "caracteristicas" },
    { label: "BENEFICIOS", id: "beneficios" },
    { label: "PROYECCIÓN", id: "proyeccion" },
    { label: "EL ELEAM", id: "el-eleam" },
  ];

  const handleScroll = (id?: string) => {
    if (!id) return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex w-full items-center justify-between gap-2 md:gap-4 lg:gap-8 mx-auto px-2">
      {/* Navigation Links */}
      <ul className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar space-x-4 md:space-x-8 lg:space-x-12 w-full">
        {items.map((item, i) => (
          <li key={i} className="group cursor-pointer py-1 shrink-0" onClick={() => handleScroll(item.id)}>
            <span className="font-extrabold text-[10px] md:text-sm lg:text-[15px] text-slate-800 tracking-wide group-hover:text-[#41a2f6] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#41a2f6] after:transition-all group-hover:after:w-full">
              {item.label}
            </span>
          </li>
        ))}
      </ul>

    </div>
  );
}

function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: "bitacora",
      title: "Bitácora de Novedades",
      icon: NotebookPen,
      imageSrc: "/landing-page-tesis/bitacora_ejemplo.jpg",
      contentSubtitle: "Gestión de Novedades Diarias",
      contentPoints: [
        "Registro de eventos y observaciones por turno.",
        "Comunicación centralizada entre el personal.",
        "Historial inmutable para trazabilidad.",
        "Alertas de novedades urgentes."
      ]
    },
    {
      id: "calendario",
      title: "Calendario Anual",
      icon: CalendarDays,
      imageSrc: "/landing-page-tesis/calendario_ejemplo.png",
      contentSubtitle: "Planificación y Eventos",
      contentPoints: [
        "Visualización de agenda mensual y anual.",
        "Agendamiento de controles médicos y rutinas.",
        "Recordatorios de fechas importantes.",
        "Fácil asignación de responsables."
      ]
    },
    {
      id: "medicamentos",
      title: "Control de Medic.",
      imageSrc: "/landing-page-tesis/inventario_ejemplo.jpg",
      icon: Pill,
      contentSubtitle: "Administración Segura",
      contentPoints: [
        "Inventario actualizado de farmacia.",
        "Control de horarios y dosis por residente.",
        "Registro de entrega con responsable.",
        "Avisos de stock crítico."
      ]
    },
    {
      id: "fichas",
      title: "Fichas de Residente",
      imageSrc: "/landing-page-tesis/ficha_residente_ejemplo.jpg",
      icon: FileText,
      contentSubtitle: "Información Clínica Centralizada",
      contentPoints: [
        "Datos personales y contactos de emergencia.",
        "Historial médico y diagnósticos.",
        "Plan de cuidados individualizado.",
        "Registro de signos vitales."
      ]
    }
  ];

  const handlePrev = () => setActiveTab((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  const handleNext = () => setActiveTab((prev) => (prev === features.length - 1 ? 0 : prev + 1));

  const activeFeature = features[activeTab];

  return (
    <div
      id="caracteristicas"
      className="mt-24 relative flex flex-col items-center z-10 shadow-2xl w-full"
    >
      {/* Uniform background to avoid contrast issues when auto-scrolling */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[#f0f8ff]/80 backdrop-blur-md"></div>

      <div className="relative z-10 w-[95%] lg:w-[90%] xl:w-[85%] mx-auto pt-32 pb-20 px-4 md:px-0 flex flex-col items-center">
        <div className="text-center mb-6 md:mb-8 flex flex-col justify-center items-center w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-serif text-[#1e4b85] drop-shadow-sm mb-4">
            Funcionalidades Principales
          </h2>

        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 w-full">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-5 py-3 md:px-7 md:py-4 rounded-full transition-all duration-300 shadow-md hover:scale-105 border-[2px] ${isActive
                  ? "bg-white text-[#1e4b85] border-[#55aaff] shadow-[0_0_15px_rgba(85,170,255,0.3)]"
                  : "bg-white/70 text-slate-500 border-transparent hover:border-[#55aaff]/50 hover:text-slate-800"
                  }`}
              >
                <div className={`p-2 lg:p-2.5 rounded-full ${isActive ? 'bg-[#55aaff]/10 text-[#55aaff]' : 'bg-slate-100 text-slate-400'}`}>
                  <Icon size={24} strokeWidth={2.2} />
                </div>
                <span className={`font-extrabold text-[13px] md:text-base tracking-wide whitespace-nowrap ${isActive ? 'text-[#1e4b85]' : 'text-slate-500'}`}>
                  {feature.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Gallery Box */}
        <div className="w-full flex justify-center items-center relative group max-w-5xl">
          {/* Navigation Arrows */}
          <button onClick={handlePrev} className="absolute left-0 md:-left-16 z-20 p-2 text-[#55aaff]/80 hover:text-[#55aaff] transition-colors bg-white/50 hover:bg-white shadow-sm hover:shadow-md rounded-full hidden md:block border border-[#55aaff]/20">
            <ChevronLeft size={32} />
          </button>

          <div className="w-full bg-white rounded-3xl p-6 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.06)] flex flex-col md:flex-row gap-8 min-h-[380px] border-[3px] border-[#55aaff]">

            {/* Left: Text Content */}
            <div className="flex-1 flex flex-col justify-center">
              <h4 className="text-xl md:text-3xl font-extrabold text-[#1e4b85] mb-6 leading-tight">
                Características Destacadas
              </h4>

              <ul className="space-y-4">
                {activeFeature.contentPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-[#55aaff]/10 p-1.5 rounded-lg text-[#55aaff]">
                      <CheckSquare size={18} />
                    </div>
                    <span className="text-slate-600 md:text-lg font-medium leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Mockup / Image area */}
            <div className="flex-1 flex items-center justify-center min-h-[250px] relative group perspective-1000">
              {activeFeature.imageSrc ? (
                <div className="relative w-full h-full min-h-[250px] flex items-center justify-center p-2">
                  <img
                    src={activeFeature.imageSrc}
                    alt={activeFeature.title}
                    className="w-auto max-w-full max-h-[310px] rounded-2xl border border-slate-200 shadow-xl transform transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.25] hover:-translate-y-3 hover:z-50 relative cursor-pointer"
                  />
                </div>
              ) : (
                <div className="bg-[#f0f8ff] w-full h-full min-h-[250px] rounded-2xl border-2 border-[#55aaff]/30 flex flex-col items-center justify-center text-center p-6">
                  <div className="inline-flex items-center justify-center p-5 rounded-full bg-[#55aaff]/10 mb-4 text-[#55aaff]">
                    <activeFeature.icon size={56} strokeWidth={1.5} />
                  </div>
                  <p className="text-slate-400 font-bold uppercase tracking-wider text-xs md:text-sm">
                    Espacio para Mockup de<br />
                    <span className="text-[#1e4b85] mt-1 block">{activeFeature.title}</span>
                  </p>
                </div>
              )}
            </div>
          </div>

          <button onClick={handleNext} className="absolute right-0 md:-right-16 z-20 p-2 text-[#55aaff]/80 hover:text-[#55aaff] transition-colors bg-white/50 hover:bg-white shadow-sm hover:shadow-md rounded-full hidden md:block border border-[#55aaff]/20">
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}

function ProblematicaSection() {
  const problems = [
    { icon: FileWarning, title: "Pérdida de Información", desc: "Uso de libretas y registros en papel que pueden extraviarse, mancharse o dañarse, afectando directamente el historial clínico." },
    { icon: Clock, title: "Procesos Lentos", desc: "El personal de turno debe invertir un margen alto de tiempo transcribiendo novedades, retrasando la atención directa a los residentes." },
    { icon: SearchX, title: "Dificultad de Búsqueda", desc: "Extraer bitácoras pasadas requiere hojear páginas físicamente para encontrar un antecedente importante en medio de la urgencia." },
    { icon: AlertCircle, title: "Desorganización en Cuidados", desc: "Posibles falencias de trazabilidad al traspasar información técnica (como dosis de fármacos) entre un turno y el siguiente." },
  ];

  return (
    <div id="problematica" className="flex flex-col gap-10 md:gap-16 items-center text-center text-white p-2 mb-24 md:mb-32 scroll-mt-24 md:scroll-mt-32 w-full mt-6">
      {/* Top text wrapper */}
      <div className="w-full max-w-6xl space-y-4 md:space-y-6 drop-shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-serif flex items-center justify-center gap-2 text-white [-webkit-text-stroke:1.5px_#004978A6]">
          La Problemática
        </h2>
        <div className="space-y-4 text-lg md:text-xl leading-relaxed text-slate-100 font-medium">
          <p>
            En gran parte de los establecimientos orientados al cuidado de personas mayores (inclusive inicialmente en el ELEAM de Coronel), la gestión de la información diaria en turnos se realiza mediante <strong>registros físicos y manuales</strong>.
          </p>
          <p>
            Esta metodología de trabajo presenta dificultades considerables en la rutina asistencial, las cuales merman la capacidad de mantener un control seguro, continuo y rápido sobre el trato directo.
          </p>
        </div>
      </div>

      {/* Bottom graphic/cards representation */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {problems.map((prob, i) => (
          <div key={i} className="bg-violet-950/40 hover:bg-black/50 border border-violet-500/30 rounded-xl p-6 backdrop-blur-md shadow-lg transition-colors group flex flex-col items-center md:items-start text-center md:text-left">
            <prob.icon className="text-white w-10 h-10 mb-4 transform transition-all duration-300 group-hover:scale-110 [filter:drop-shadow(0px_0px_3px_rgba(0,212,255,1))_drop-shadow(0px_0px_15px_rgba(139,92,246,0.7))] group-hover:[filter:drop-shadow(0px_0px_5px_rgba(0,230,255,1))_drop-shadow(0px_0px_30px_rgba(139,92,246,0.9))]" />
            <h3 className="text-xl font-bold text-white mb-3 transition-all duration-300 group-hover:[text-shadow:0px_0px_8px_rgba(0,212,255,0.8),0px_0px_15px_rgba(139,92,246,0.8)]">{prob.title}</h3>
            <p className="text-base text-slate-200 leading-relaxed font-medium transition-all duration-300 group-hover:text-white group-hover:[text-shadow:0px_0px_8px_rgba(139,92,246,0.6)]">{prob.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


function BeneficiosSection() {
  return (
    <div id="beneficios" className="flex flex-col-reverse lg:flex-row gap-8 md:gap-16 items-center md:items-start text-white p-2 mt-24 md:mt-40 scroll-mt-24 md:scroll-mt-32">

      {/* Left side graphic mockup */}
      <div className="flex-1 w-full max-w-md pt-4 md:pt-0 lg:-mt-8 xl:-mt-10">
        <div className="w-full relative flex items-center justify-center group">
          <img
            src="/landing-page-tesis/beneficios.png"
            alt="Beneficios del sistema"
            className="w-full h-auto object-contain [filter:drop-shadow(0px_0px_2px_rgba(0,229,255,1))_drop-shadow(0px_0px_15px_rgba(255,255,255,0.6))] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:[filter:drop-shadow(0px_0px_4px_rgba(0,255,255,1))_drop-shadow(0px_0px_30px_rgba(255,255,255,0.9))] group-hover:scale-105 group-hover:-translate-y-2"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%25" height="100%25" viewBox="0 0 800 600"%3E%3Crect fill="%231e5877" width="800" height="600"/%3E%3Ctext fill="rgba(255,255,255,0.7)" font-family="sans-serif" font-size="28" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EColoca tu PNG aquí:%3C/text%3E%3Ctext fill="rgba(255,255,255,0.5)" font-family="sans-serif" font-size="18" dy="45" x="50%25" y="50%25" text-anchor="middle"%3E/public/landing-page-tesis/beneficios.png%3C/text%3E%3C/svg%3E';
            }}
          />
        </div>
      </div>

      {/* Right side text wrapper */}
      <div className="flex-1 space-y-4 md:space-y-6 drop-shadow-md lg:pt-4 text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-serif flex items-center gap-2 text-white [-webkit-text-stroke:1.5px_#004978A6]">
          Beneficios
        </h2>
        <div className="space-y-5 text-lg md:text-xl leading-relaxed text-white font-medium">
          <p>
            El sistema permitirá centralizar la información, reduciendo el uso de registros manuales y posibles errores. Facilitará el acceso rápido a los datos, facilitando la continuidad del cuidado.
          </p>
          <p>
            Además, ofrecerá trazabilidad de los registros, mayor control y transparencia en los procesos. También optimizará el tiempo administrativo y apoyará la toma de decisiones con información clara y ordenada.
          </p>
        </div>
      </div>

    </div>
  );
}

function ProyeccionSection() {
  return (
    <div id="proyeccion" className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center md:items-start text-white p-2 mt-24 md:mt-40 scroll-mt-24 md:scroll-mt-32">

      {/* Left side text wrapper */}
      <div className="flex-1 space-y-4 md:space-y-6 drop-shadow-md pt-2 md:pt-4 text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-serif flex items-center gap-2 text-white [-webkit-text-stroke:1.5px_#004978A6]">
          Proyección
        </h2>
        <div className="space-y-4 text-lg md:text-xl leading-relaxed text-white font-medium">
          <p>
            El sistema se piensa implementar inicialmente en el ELEAM de Coronel. Pero también tiene la posibilidad de adaptarse y replicarse en otros establecimientos de larga estadía, tanto públicos como privados, que enfrentan problemáticas similares a la gestión manual de datos.
          </p>
          <p>
            Su enfoque flexible y centrado en los procesos reales permite que evolucione como una solución escalable, integrando nuevas funcionalidades y posibles conexiones con otros sistemas de salud.
          </p>
        </div>
      </div>

      {/* Right side graphic mockup */}
      <div className="flex-1 w-full max-w-md pt-4 md:pt-0 lg:-mt-8 xl:-mt-10">
        <div className="w-full relative flex items-center justify-center group">
          <img
            src="/landing-page-tesis/proyeccion.png"
            alt="Proyección del sistema"
            className="w-full h-auto object-contain [filter:drop-shadow(0px_0px_2px_rgba(0,191,255,1))_drop-shadow(0px_0px_15px_rgba(0,102,255,0.7))] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:[filter:drop-shadow(0px_0px_4px_rgba(0,212,255,1))_drop-shadow(0px_0px_30px_rgba(0,102,255,0.9))] group-hover:scale-105 group-hover:-translate-y-2"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%25" height="100%25" viewBox="0 0 800 600"%3E%3Crect fill="%231e5877" width="800" height="600"/%3E%3Ctext fill="rgba(255,255,255,0.7)" font-family="sans-serif" font-size="28" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EColoca tu PNG aquí:%3C/text%3E%3Ctext fill="rgba(255,255,255,0.5)" font-family="sans-serif" font-size="18" dy="45" x="50%25" y="50%25" text-anchor="middle"%3E/public/landing-page-tesis/proyeccion.png%3C/text%3E%3C/svg%3E';
            }}
          />
        </div>
      </div>

    </div>
  );
}

function EleamSection() {
  return (
    <div className="w-[95%] lg:w-[90%] xl:w-[85%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 text-slate-700">
      {/* Left text */}
      <div className="flex-1 text-center lg:text-right space-y-3">
        <h3 className="text-2xl font-bold text-[#004978]">El Establecimiento</h3>
        <p className="text-lg leading-relaxed font-medium">
          <strong>ELEAM</strong> (Establecimiento de Larga Estadía para Adultos Mayores) Rosa Amelia Ogalde de Coronel, es una residencia de cuidado de adultos mayores ubicada en la localidad de Coronel, Chile, esta residencia es operada por la organización sin fines de lucro ONG Vitalize.
        </p>
      </div>

      {/* Center logo */}
      <div className="flex-none w-56 h-56 md:w-72 md:h-72 relative hover:scale-[1.03] transition-transform duration-500 group drop-shadow-md">
        <img
          src="/landing-page-tesis/Logo_ONG.png"
          alt="Logo ELEAM Rosa Amelia Ogalde"
          className="w-full h-full object-contain [filter:drop-shadow(0px_10px_15px_rgba(0,0,0,0.1))] group-hover:[filter:drop-shadow(0px_15px_25px_rgba(0,73,120,0.2))]"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%25" height="100%25" viewBox="0 0 800 600"%3E%3Crect fill="%23f8fafc" width="800" height="600"/%3E%3Ctext fill="%2394a3b8" font-family="sans-serif" font-size="24" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3ELogo_ONG.png%3C/text%3E%3C/svg%3E';
          }}
        />
      </div>

      {/* Right text */}
      <div className="flex-1 text-center lg:text-left space-y-3">
        <h3 className="text-2xl font-bold text-[#004978]">Su Misión</h3>
        <p className="text-lg leading-relaxed font-medium">
          Esta institución es parte de <strong>SENAMA</strong> (Servicio Nacional del Adulto Mayor), busca proporcionar atención de alta calidad a los adultos mayores, brindándoles un entorno seguro y cuidados personalizados que promuevan su bienestar y calidad de vida.
        </p>
      </div>
    </div>
  );
}
