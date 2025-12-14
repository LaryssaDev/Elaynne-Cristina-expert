import React, { useState, useRef } from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  Instagram, 
  Facebook, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { 
  HERO_IMAGE, 
  EXPERT_NAME, 
  EXPERT_TITLE, 
  LOCATION, 
  WHATSAPP_LINK, 
  RESULTS_GALLERY, 
  TESTIMONIALS,
  EXPERT_PHOTOS,
  INSTAGRAM_LINK,
  FACEBOOK_LINK
} from './constants';
import Lightbox from './components/Lightbox';

const App: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const openLightbox = (src: string) => {
    setCurrentImage(src);
    setLightboxOpen(true);
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 300; // Aproximadamente a largura de um card + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const WhatsAppButton = ({ text, subtext, className = "" }: { text: string, subtext?: string, className?: string }) => (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col items-center justify-center w-full md:w-auto bg-brand-whatsapp hover:bg-brand-whatsappDark text-white py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${className}`}
    >
      <div className="flex items-center gap-2 text-lg font-bold tracking-wide uppercase">
        <MessageCircle className="w-6 h-6 fill-current" />
        <span>{text}</span>
      </div>
      {subtext && (
        <span className="text-xs font-medium opacity-90 mt-1">{subtext}</span>
      )}
    </a>
  );

  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-primary selection:bg-brand-accent selection:text-white">
      <Lightbox 
        isOpen={lightboxOpen} 
        src={currentImage} 
        onClose={() => setLightboxOpen(false)} 
      />

      {/* 1. HERO SECTION */}
      <header className="relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-brand-accent/5 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Texto Hero */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold tracking-wider uppercase mb-6 border border-brand-accent/20">
                Vila Maria Alta - SP
              </span>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight mb-6">
                Eu sou <span className="text-brand-accent whitespace-nowrap">Dra. Elaynne Cristina</span>. <br/> 
                Transformo sorrisos e devolvo a sua autoestima.
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Tratamentos personalizados, sem dor e com a atenção que você merece. Venha descobrir a sua melhor versão.
              </p>

              <div className="flex justify-center lg:justify-start">
                <WhatsAppButton 
                  text="Agendar Primeira Consulta Gratuita" 
                  subtext="Resposta rápida • Sem compromisso"
                  className="animate-pulse shadow-brand-whatsapp/30"
                />
              </div>
            </div>

            {/* Imagem Hero */}
            <div className="flex-1 order-1 lg:order-2 w-full max-w-md lg:max-w-full">
              {/* Changed aspect ratio to portrait on desktop and added object-top to fix head cropping */}
              <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={HERO_IMAGE} 
                  alt={`Foto de ${EXPERT_NAME}`} 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <ShieldCheck className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-gray-500 font-semibold uppercase">Especialista</p>
                      <p className="text-base font-bold text-brand-dark">Saúde & Estética</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* 2. QUEM SOU EU */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Texto Quem Sou Eu */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-20 h-20 bg-brand-accent/20 rounded-full blur-2xl"></div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand-dark relative z-10 mb-4">
                  Muito prazer, sou a Dra. Elaynne Cristina
                </h2>
                <div className="w-20 h-1.5 bg-brand-accent rounded-full mb-8"></div>
              </div>

              <div className="prose prose-lg prose-slate text-gray-600 leading-relaxed mb-8">
                <p className="mb-4">
                  Não sou apenas uma dentista de jaleco branco. Sou apaixonada por ver a transformação na vida das pessoas quando elas voltam a sorrir sem medo.
                </p>
                <p>
                  Meu consultório na Vila Maria Alta não tem "cara de clínica". Criei um ambiente onde você se sente acolhido, ouvido e respeitado. Aqui, não tratamos apenas dentes, cuidamos de pessoas.
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Atendimento humanizado e sem pressa",
                  "Foco total em estética e harmonização",
                  "Explicação clara de cada procedimento"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
                    <span className="font-medium text-brand-dark text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="hidden lg:block">
                 <WhatsAppButton text="Agendar Conversa" className="w-fit" />
              </div>
            </div>

             {/* Foto Quem Sou Eu */}
            <div className="order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500 border-8 border-white">
                 <img src={EXPERT_PHOTOS[0]} alt="Dra Elaynne atendendo" className="w-full h-auto object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand-dark mb-4">Resultados Reais</h2>
            <p className="text-gray-500 text-base">Toque nas imagens para ampliar e ver os detalhes</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {RESULTS_GALLERY.map((img) => (
              <div 
                key={img.id} 
                className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-white text-brand-dark text-sm font-bold px-4 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Ver Resultado
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-xs text-gray-400 mt-8 italic">
            * Resultados podem variar de pessoa para pessoa. Imagens autorizadas pelos pacientes.
          </p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR */}
      <section className="bg-brand-dark text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-center mb-16">
            Por que confiar o seu sorriso a mim?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <div className="bg-brand-accent w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">Avaliação Honesta</h3>
              <p className="text-gray-300 leading-relaxed">
                Não empurro procedimentos desnecessários. Te digo exatamente o que você precisa, com transparência total.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <div className="bg-brand-accent w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <HeartHandshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">Atendimento Pessoal</h3>
              <p className="text-gray-300 leading-relaxed">
                Você será atendido por mim, do começo ao fim. Acompanho cada etapa da sua evolução de perto.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <div className="bg-brand-accent w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">Materiais Premium</h3>
              <p className="text-gray-300 leading-relaxed">
                Utilizo apenas os melhores materiais do mercado para garantir durabilidade e uma estética natural.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 px-6 bg-brand-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-dark font-medium text-xl mb-8">
            Está com dúvidas se o seu caso tem solução? <br/>
            <span className="text-gray-500">A maioria dos pacientes também tinha.</span>
          </p>
          <div className="flex justify-center">
            <WhatsAppButton text="Tirar Dúvidas no WhatsApp" />
          </div>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand-dark text-center mb-16">
            Sua 1ª Consulta em 3 Passos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {/* Line connector for Desktop */}
            <div className="hidden md:block absolute top-6 left-1/6 right-1/6 h-0.5 bg-gray-100 -z-10"></div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-white border-2 border-brand-accent rounded-full flex items-center justify-center text-brand-accent font-bold text-2xl shadow-sm mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">1</div>
              <h3 className="font-bold text-xl text-brand-dark mb-2">Toque no Botão</h3>
              <p className="text-gray-500">Clique em qualquer botão desta página para abrir meu WhatsApp pessoal.</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-white border-2 border-brand-accent rounded-full flex items-center justify-center text-brand-accent font-bold text-2xl shadow-sm mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">2</div>
              <h3 className="font-bold text-xl text-brand-dark mb-2">Agendamento Rápido</h3>
              <p className="text-gray-500">Minha equipe (ou eu mesma) vai encontrar o melhor horário para você.</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-brand-accent border-2 border-brand-accent text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg mb-6">3</div>
              <h3 className="font-bold text-xl text-brand-dark mb-2">Avaliação Gratuita</h3>
              <p className="text-gray-500">Você vem ao consultório, tomamos um café e eu avalio seu sorriso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS (Backstage/Expert) */}
      <section className="bg-slate-50 py-20 px-0 overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-brand-dark">
            Bastidores e Depoimentos
          </h2>
          <p className="text-gray-500 mt-3 text-lg">
            O carinho que recebo dos meus pacientes é meu maior orgulho.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group max-w-7xl mx-auto px-4">
          
          {/* Navigation Arrows */}
          <button 
            onClick={() => scrollCarousel('left')}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white text-brand-dark p-3 rounded-full shadow-lg border border-gray-100 hover:bg-brand-accent hover:text-white transition-all transform hover:scale-110"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scrollCarousel('right')}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white text-brand-dark p-3 rounded-full shadow-lg border border-gray-100 hover:bg-brand-accent hover:text-white transition-all transform hover:scale-110"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 px-6 hide-scrollbar scroll-smooth"
          >
            {/* Expert Photo 2 */}
            <div className="snap-center shrink-0 w-80 md:w-96 rounded-2xl overflow-hidden shadow-lg relative transition-transform hover:-translate-y-2 duration-300">
              <img src={EXPERT_PHOTOS[1]} alt="Bastidores" className="w-full h-[400px] object-cover" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-medium text-lg">Cuidado em cada detalhe</p>
              </div>
            </div>

            {/* Testimonials */}
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id} 
                className="snap-center shrink-0 w-80 md:w-96 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden cursor-pointer transition-transform hover:-translate-y-2 duration-300"
                onClick={() => openLightbox(t.src)}
              >
                <img src={t.src} alt={t.alt} className="w-full h-[400px] object-contain bg-gray-50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-dark mb-8 leading-tight">
            Não adie mais o sorriso <br className="hidden md:block" /> que você merece.
          </h2>
          <p className="text-gray-600 mb-12 text-xl">
            A primeira consulta é por minha conta. Vamos conversar?
          </p>
          
          <div className="flex justify-center transform hover:scale-105 transition-transform duration-300">
             <WhatsAppButton 
              text="Agendar Agora" 
              subtext="Vagas limitadas para essa semana"
            />
          </div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="bg-brand-dark text-white py-16 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 text-center md:text-left">
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-accent">
              <img src={HERO_IMAGE} alt={EXPERT_NAME} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold">{EXPERT_NAME}</h3>
              <p className="text-brand-accent text-sm font-medium">{EXPERT_TITLE}</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-gray-400 text-sm">
             <div className="flex items-center gap-2">
               <MapPin className="w-4 h-4" />
               <p>{LOCATION}</p>
             </div>
             <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>

          <div className="flex gap-4">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-brand-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-brand-accent transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default App;