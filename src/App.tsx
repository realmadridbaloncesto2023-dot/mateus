/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookOpen, ShieldCheck, Clock, AlertTriangle, Users, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#0a1128] text-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-20 px-6 text-center"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.img 
            src="/fortaleza_familiar.png" 
            alt="Fortaleza Familiar" 
            className="rounded-lg shadow-2xl border border-[#c5a059]/30"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div>
            <h1 className="font-serif text-5xl md:text-6xl text-[#c5a059] mb-6 tracking-tight text-left">
              El tiempo se está agotando: cómo rescatar la conexión con tus hijos antes de que el silencio se convierta en un abismo.
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light text-left">
              ¿Sientes que están en la mesa, pero con la mente lejos? Este no es solo un libro, es tu manual de protección familiar.
            </p>
            <div className="text-left">
              <a 
                href="https://pay.kiwify.com/ehJAn2c" 
                className="inline-block bg-[#c5a059] text-[#0a1128] font-bold text-lg px-8 py-4 rounded-md shadow-lg transition-transform hover:scale-105"
              >
                Rescatar la conexión ahora (solo $12)
              </a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Video Section Placeholder */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={sectionVariants}
        className="py-12 px-6 flex justify-center"
      >
        <div className="w-full max-w-4xl aspect-video bg-black rounded-lg border border-[#c5a059]/30 shadow-2xl flex items-center justify-center">
          <iframe 
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/y1gGTo7_OYA" 
            title="Video de presentación"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
      </motion.section>

      {/* Pain Points */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={sectionVariants}
        className="py-20 px-6 bg-[#111827] border-y border-gray-800"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-[#c5a059] mb-12 text-center">¿Sientes que...</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "¿Tu voz ha perdido autoridad ante los algoritmos y las redes sociales?",
              "¿La distancia entre tú y tu hijo aumenta cada día?",
              "¿Estás perdiendo la influencia que Dios te confió?",
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-[#0a1128] rounded-lg border border-[#c5a059]/20">
                <AlertTriangle className="text-[#c5a059] w-8 h-8 flex-shrink-0" />
                <p className="text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Chapters (Solution) */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={sectionVariants}
        className="py-20 px-6 max-w-4xl mx-auto"
      >
        <h2 className="font-serif text-3xl text-[#c5a059] mb-12 text-center">Tu Plan de Escape</h2>
        <div className="space-y-6">
          {[
            { title: "La Tienda que se Mueve Sola", desc: "Comprendiendo la búsqueda de identidad fuera de casa." },
            { title: "El Viento que Sopla Afuera", desc: "Protegiendo a tu familia contra ideologías devastadoras." },
            { title: "La Roca en Medio del Diluvio", desc: "Cómo establecer autoridad bíblica sin usar la fuerza." },
            { title: "El Altar en Medio del Caos", desc: "Transformando tu hogar en un santuario de oración." },
            { title: "El Camino de Regreso a Casa", desc: "Pasos prácticos para la reconexión diaria." },
          ].map((chapter, index) => (
            <div key={index} className="flex gap-4 items-center border-b border-gray-700 pb-4">
              <span className="font-serif text-4xl text-[#c5a059]/50">0{index + 1}</span>
              <div>
                <h3 className="font-semibold text-xl text-[#c5a059]">{chapter.title}</h3>
                <p className="text-gray-400">{chapter.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href="https://pay.kiwify.com/ehJAn2c" 
            className="inline-block bg-[#c5a059] text-[#0a1128] font-bold text-lg px-8 py-4 rounded-md shadow-lg transition-transform hover:scale-105"
          >
            Quiero empezar a proteger mi familia ahora
          </a>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={sectionVariants}
        className="py-20 px-6 bg-[#111827]"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl text-[#c5a059] mb-12 text-center">Testimonios de Familias Restauradas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Estábamos perdiendo a nuestros hijos ante el mundo digital. Este libro nos dio las herramientas prácticas que necesitábamos para recuperar nuestra autoridad bíblica.",
                name: "Familia Rodríguez",
              },
              {
                text: "El 'desafío para el hogar' cambió nuestra dinámica. Pasamos de ser extraños en la misma mesa a orar juntos todas las noches.",
                name: "Elena M.",
              },
              {
                text: "Una lectura imprescindible. No es solo teoría, es un manual de aplicación inmediata para proteger a nuestros hijos de las ideologías modernas.",
                name: "Carlos y Ana G.",
              },
            ].map((test, index) => (
              <div key={index} className="bg-[#0a1128] border border-[#c5a059]/20 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4 text-[#c5a059]">
                  <Star className="fill-current w-5 h-5" />
                  <Star className="fill-current w-5 h-5" />
                  <Star className="fill-current w-5 h-5" />
                  <Star className="fill-current w-5 h-5" />
                  <Star className="fill-current w-5 h-5" />
                </div>
                <p className="text-gray-300 italic mb-4">"{test.text}"</p>
                <p className="text-[#c5a059] font-serif font-bold text-lg">- {test.name}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Offer & Guarantee */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={sectionVariants}
        id="oferta" 
        className="py-20 px-6 bg-[#c5a059] text-[#0a1128] text-center"
      >
        <div className="max-w-2xl mx-auto">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6" />
          <h2 className="font-serif text-4xl mb-6">Protege tu mayor patrimonio.</h2>
          <p className="text-lg mb-8 font-medium">Este es un proyecto misionero. Por solo $12, adquieres la herramienta esencial para proteger el futuro de tus hijos. El valor es simbólico, pero el contenido vale oro.</p>
          <a href="https://pay.kiwify.com/ehJAn2c" className="inline-block bg-[#0a1128] text-[#c5a059] font-bold text-xl px-10 py-5 rounded-md shadow-2xl transition-transform hover:scale-105">
            Garantizar Manual de Protección (Solo $12)
          </a>
          <p className="mt-6 text-sm font-semibold italic">Garantía Incondicional de 7 días - Riesgo Cero.</p>
        </div>
      </motion.section>
    </div>
  );
}
