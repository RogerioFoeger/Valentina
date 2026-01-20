import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Globe, MessageCircle, Send } from "lucide-react";

export default function Home() {
  // Dados oficiais - Valentina Aura World
  const modelName = "Valentina Aura World";
  const headline = "Entre no meu mundo 🌍✈️";
  const subheadline = "Viagens, lifestyle, bastidores e acessos exclusivos. Escolha como você quer chegar mais perto.";
  
 const links = [

    {

      id: 1,

      label: "🇧🇷 Grupo Telegram – Brasil",

      sublabel: "Prévias • Conteúdos • Avisos (GRÁTIS)",

      url: "https://t.me/valentinaaura1", // Telegram

      icon: <Send className="w-6 h-6" />,

      primary: false,

      style: "bg-[#2ca5e0] text-white hover:bg-[#2589ba] shadow-md"

    },

    {

      id: 2,

         label: "🌍 Exclusive World (EN)",

      sublabel: "Premium content • International access",

      url: "https://www.fanvue.com/valentinaauraworld", // Fanvue

      icon: <Globe className="w-6 h-6" />,

      primary: true,

      style: "bg-[#548db0] text-white hover:bg-[#437290] shadow-lg shadow-[#548db0]/30"

    },
    {
      id: 3,
      label: "💬 Fale comigo",
      sublabel: "Acesso rápido",
      url: "https://wa.me/5527996216491", // WhatsApp
      icon: <MessageCircle className="w-6 h-6" />,
      primary: false,
      style: "bg-[#25d366] text-white hover:bg-[#20b858] shadow-md"
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2d2a26] font-sans selection:bg-[#548db0] selection:text-white overflow-x-hidden flex flex-col">
      
      {/* Hero Section - Mobile First & Clean */}
      <section className="relative flex-1 flex flex-col items-center justify-center px-6 py-12 md:py-20 min-h-[90vh]">
        
        {/* Background Image - Fixed & Cover */}
        <div className="absolute inset-0 z-0">
<img
  src="/images/hero_real.jpg"
  alt="Valentina Aura"
  className="w-full h-full object-cover object-top opacity-95"
/>
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center space-y-8">
          
          {/* Header Text */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-light leading-tight text-white drop-shadow-md">
              {modelName}
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-white/90 drop-shadow-sm">
              {headline}
            </h2>
            <p className="text-sm md:text-base text-white/80 max-w-xs mx-auto leading-relaxed">
              {subheadline}
            </p>
          </motion.div>

          {/* Links Block - The Core Funnel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full space-y-4"
          >
            {links.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.url}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  group flex items-center p-4 rounded-xl transition-all duration-300 w-full relative overflow-hidden
                  ${link.style}
                `}
              >
                <div className="p-2 rounded-full bg-white/20 mr-4 shrink-0">
                  {link.icon}
                </div>
                <div className="flex-1 text-left min-w-0">
                  <div className="font-bold text-lg truncate leading-tight">
                    {link.label}
                  </div>
                  <div className="text-xs opacity-90 truncate mt-0.5 font-medium">
                    {link.sublabel}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </motion.a>
            ))}
          </motion.div>

          {/* "What you find" Block - Simple & Clean */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-full border border-white/20 text-white text-left shadow-lg mt-8"
          >
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-white/90 border-b border-white/20 pb-2">
              No meu mundo você encontra:
            </h3>
            <ul className="space-y-3 text-sm md:text-base font-light">
              <li className="flex items-center gap-3">
                <span className="text-lg">✈️</span> Lifestyle & viagens
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">👗</span> Moda e momentos reais
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">🔥</span> Bastidores e conteúdos exclusivos
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">🌍</span> Acessos que não aparecem no Instagram
              </li>
            </ul>
          </motion.div>

          {/* Social Proof - Simple */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/70 text-xs font-medium tracking-wide pt-4"
          >
            +100.000 pessoas já acompanham meu mundo 🌍
          </motion.div>

        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-[#1a1a1a] text-white/40 py-6 text-center text-xs">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Valentina Aura World.</p>
        </div>
      </footer>
    </div>
  );
}
