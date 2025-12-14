import React, { useState, useRef } from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  Instagram, 
  Facebook, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  CalendarCheck,
  MessageCircle,
  Clock,
  ArrowRight,
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
      className={`group flex flex-col items-center justify-center w-full bg-brand-whatsapp hover:bg-brand-whatsappDark text-white py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${className}`}
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
        
        <div className="max-w-xl mx-auto px-6 pt-12 pb-16 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Tagline */}
            <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold tracking-wider uppercase mb-6 border border-brand-accent/20">
              Vila Maria Alta - SP
            </span>

            {/* Headline */}
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-4">
              Eu sou <span className="text-brand-accent">Dra. Elaynne</span>. <br/> Transformo sorrisos e devolvo a sua autoestima.
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Tratamentos personalizados, sem dor e com a atenção que você merece. Venha descobrir a sua melhor versão.
            </p>

            {/* Hero Image */}
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl mb-8 border-4 border-white">
              <img 
                src={HERO_IMAGE} 
                alt={`Foto de ${EXPERT_NAME}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/50">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <ShieldCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 font-semibold uppercase">Especialista</p>
                    <p className="text-sm font-bold text-brand-dark">Saúde & Estética</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <WhatsAppButton 
              text="Agendar Primeira Consulta Gratuita" 
              subtext="Resposta rápida • Sem compromisso"
              className="animate-pulse shadow-brand-whatsapp/30"
            />
          </div>
        </div>
      </header>

      {/* 2. QUEM SOU EU */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col gap-8">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-20 h-20 bg-brand-accent/20 rounded-full blur-2xl"></div>
              <h2 className="font-serif text-3xl font-bold text-brand-dark relative z-10 mb-4">
                Muito prazer, sou a Dra. Elaynne
              </h2>
              <div className="w-16 h-1 bg-brand-accent rounded-full mb-6"></div>
            </div>

            <div className="prose prose-slate text-gray-600 leading-relaxed">
              <p className="mb-4">
                Não sou apenas uma dentista de jaleco branco. Sou apaixonada por ver a transformação na vida das pessoas quando elas voltam a sorrir sem medo.
              </p>
              <p>
                Meu consultório na Vila Maria Alta não tem "cara de clínica". Criei um ambiente onde você se sente acolhido, ouvido e respeitado. Aqui, não tratamos apenas dentes, cuidamos de pessoas.
              </p>
            </div>

            <ul className="space-y-3 mt-2">
              {[
                "Atendimento humanizado e sem pressa",
                "Foco total em estética e harmonização",
                "Explicação clara de cada procedimento"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span className="font-medium text-brand-dark">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 rounded-2xl overflow-hidden shadow-lg rotate-1 hover:rotate-0 transition-transform duration-300">
               {/* FIX: Alterado de h-64 object-cover para h-auto object-cover para mostrar a foto inteira sem cortar */}
               <img src={EXPERT_PHOTOS[0]} alt="Dra Elaynne atendendo" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-brand-dark mb-3">Resultados Reais</h2>
            <p className="text-gray-500 text-sm">Toque nas imagens para ampliar</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {RESULTS_GALLERY.map((img) => (
              <div 
                key={img.id} 
                className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-pointer shadow-sm hover:shadow-md transition-all"
                onClick={() => openLightbox(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-brand-dark text-xs font-bold px-2 py-1 rounded-full shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-all">
                    Ver
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-xs text-gray-400 mt-6 italic">
            * Resultados podem variar de pessoa para pessoa. Imagens autorizadas pelos pacientes.
          </p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR */}
      <section className="bg-brand-dark text-white py-16 px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            Por que confiar o seu sorriso a mim?
          </h2>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex items-start gap-4">
              <div className="bg-brand-accent p-3 rounded-xl shrink-0">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Avaliação Honesta</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Não empurro procedimentos desnecessários. Te digo exatamente o que você precisa, com transparência total.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex items-start gap-4">
              <div className="bg-brand-accent p-3 rounded-xl shrink-0">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Atendimento Pessoal</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Você será atendido por mim, do começo ao fim. Acompanho cada etapa da sua evolução de perto.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex items-start gap-4">
              <div className="bg-brand-accent p-3 rounded-xl shrink-0">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Materiais Premium</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Utilizo apenas os melhores materiais do mercado para garantir durabilidade e uma estética natural.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-16 px-6 bg-brand-accent/5">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-brand-dark font-medium mb-6">
            Está com dúvidas se o seu caso tem solução? <br/>
            <span className="text-gray-500">A maioria dos pacientes também tinha.</span>
          </p>
          <WhatsAppButton text="Tirar Dúvidas no WhatsApp" />
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-brand-dark text-center mb-12">
            Sua 1ª Consulta em 3 Passos
          </h2>

          <div className="space-y-8 relative">
            {/* Line connector */}
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gray-100"></div>

            <div className="relative flex gap-6 items-start">
              <div className="relative z-10 w-12 h-12 bg-brand-light border-2 border-brand-accent rounded-full flex items-center justify-center shrink-0 text-brand-accent font-bold text-xl shadow-sm">1</div>
              <div>
                <h3 className="font-bold text-lg text-brand-dark mb-1">Toque no Botão</h3>
                <p className="text-gray-500 text-sm">Clique em qualquer botão desta página para abrir meu WhatsApp pessoal.</p>
              </div>
            </div>

            <div className="relative flex gap-6 items-start">
              <div className="relative z-10 w-12 h-12 bg-brand-light border-2 border-brand-accent rounded-full flex items-center justify-center shrink-0 text-brand-accent font-bold text-xl shadow-sm">2</div>
              <div>
                <h3 className="font-bold text-lg text-brand-dark mb-1">Agendamento Rápido</h3>
                <p className="text-gray-500 text-sm">Minha equipe (ou eu mesma) vai encontrar o melhor horário para você.</p>
              </div>
            </div>

            <div className="relative flex gap-6 items-start">
              <div className="relative z-10 w-12 h-12 bg-brand-accent text-white rounded-full flex items-center justify-center shrink-0 font-bold text-xl shadow-lg">3</div>
              <div>
                <h3 className="font-bold text-lg text-brand-dark mb-1">Avaliação Gratuita</h3>
                <p className="text-gray-500 text-sm">Você vem ao consultório, tomamos um café e eu avalio seu sorriso sem compromisso.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS (Backstage/Expert) */}
      <section className="bg-slate-50 py-16 px-0 overflow-hidden relative">
        <div className="max-w-xl mx-auto px-6 mb-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-brand-dark">
            Bastidores e Depoimentos
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            O carinho que recebo dos meus pacientes é meu maior orgulho.
          </p>
        </div>

        {/* Carousel Container with Arrows */}
        <div className="relative group max-w-2xl mx-auto">
          {/* Navigation Arrows */}
          <button 
            onClick={() => scrollCarousel('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 text-brand-dark p-2 rounded-full shadow-lg border border-gray-100 hover:bg-brand-accent hover:text-white transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scrollCarousel('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 text-brand-dark p-2 rounded-full shadow-lg border border-gray-100 hover:bg-brand-accent hover:text-white transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 px-6 hide-scrollbar scroll-smooth"
          >
            {/* Expert Photo 2 */}
            <div className="snap-center shrink-0 w-72 rounded-2xl overflow-hidden shadow-md relative">
              <img src={EXPERT_PHOTOS[1]} alt="Bastidores" className="w-full h-96 object-cover" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-medium text-sm">Cuidado em cada detalhe</p>
              </div>
            </div>

            {/* Testimonials */}
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id} 
                className="snap-center shrink-0 w-72 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden cursor-pointer"
                onClick={() => openLightbox(t.src)}
              >
                <img src={t.src} alt={t.alt} className="w-full h-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-20 px-6 bg-white relative">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-6">
            Não adie mais o sorriso que você merece.
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            A primeira consulta é por minha conta. Vamos conversar?
          </p>
          
          <div className="transform scale-105">
             <WhatsAppButton 
              text="Agendar Agora" 
              subtext="Vagas limitadas para essa semana"
            />
          </div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="bg-brand-dark text-white py-12 px-6 border-t border-white/10">
        <div className="max-w-xl mx-auto flex flex-col items-center text-center gap-6">
          
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-accent">
            <img src={HERO_IMAGE} alt={EXPERT_NAME} className="w-full h-full object-cover" />
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold">{EXPERT_NAME}</h3>
            <p className="text-brand-accent text-sm font-medium">{EXPERT_TITLE}</p>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
             <MapPin className="w-4 h-4" />
             <p>{LOCATION}</p>
          </div>

          <div className="flex gap-4 mt-2">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-brand-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-brand-accent transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          <div className="w-full h-px bg-white/10 my-4"></div>

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {EXPERT_NAME}. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;