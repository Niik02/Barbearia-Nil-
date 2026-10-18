/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Calendar,
  Star,
  Instagram,
  CreditCard,
  ChevronRight
} from 'lucide-react';

// Official logo URL provided in requirements
const LOGO_URL = 'https://i.postimg.cc/d3Jcyzjf/Untitled-design.png';

// Authentic WhatsApp SVG Icon with consistent sizing and gold accent
function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.89 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.488-8.414z" />
    </svg>
  );
}

interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

const LINKS: LinkItem[] = [
  {
    id: 'agendar',
    title: 'Agendar horário',
    url: 'https://barbeariadonil.ageenda.com.br/',
    icon: <Calendar className="w-5 h-5 text-[#d4af37]" />,
    ariaLabel: 'Agendar horário na Barbearia do Nil',
  },
  {
    id: 'avaliar',
    title: 'Avaliar no Google',
    url: 'https://search.google.com/local/writereview?placeid=ChIJA_i8UACFpgARn2H-LO-mB6Q',
    icon: <Star className="w-5 h-5 text-[#d4af37]" />,
    ariaLabel: 'Avaliar a Barbearia do Nil no Google',
  },
  {
    id: 'instagram',
    title: 'Siga no Instagram',
    url: 'https://www.instagram.com/barbeironiloficial',
    icon: <Instagram className="w-5 h-5 text-[#d4af37]" />,
    ariaLabel: 'Acessar o perfil oficial da Barbearia do Nil no Instagram',
  },
  {
    id: 'pagamento',
    title: 'Realizar pagamento',
    url: 'https://nubank.com.br/cobrar/18nwi6/6ab913bb-9708-428f-95b0-ec28395eeed4',
    icon: <CreditCard className="w-5 h-5 text-[#d4af37]" />,
    ariaLabel: 'Realizar pagamento via Nubank',
  },
  {
    id: 'whatsapp',
    title: 'Fale pelo WhatsApp',
    url: 'https://wa.me/5531986677678',
    icon: <WhatsAppIcon className="w-5 h-5 text-[#d4af37]" />,
    ariaLabel: 'Entrar em contato com a Barbearia do Nil pelo WhatsApp',
  },
];

export default function App() {
  const [imgHasError, setImgHasError] = useState(false);

  return (
    <main className="relative min-h-screen w-full bg-[#080808] text-neutral-100 flex flex-col justify-between items-center selection:bg-[#d4af37]/30 selection:text-amber-200 overflow-x-hidden ambient-gold-glow">
      {/* Subtle background ambient details */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#c5a059]/3 rounded-full blur-3xl" />
      </div>

      {/* Main Container - strictly constrained max-width for Linktree mobile/desktop fidelity */}
      <div className="relative z-10 w-full max-w-[440px] px-5 py-8 sm:py-12 flex flex-col items-center flex-grow">
        
        {/* 1. Official Logo */}
        <header className="flex flex-col items-center text-center w-full mb-8">
          <div className="relative mb-5 flex items-center justify-center">
            {/* Subtle luxury glow behind the logo */}
            <div className="absolute inset-0 bg-[#d4af37]/15 rounded-full blur-xl scale-95" aria-hidden="true" />
            
            {!imgHasError ? (
              <img
                src={LOGO_URL}
                alt="Logotipo oficial da Barbearia do Nil"
                onError={() => setImgHasError(true)}
                className="relative z-10 w-44 sm:w-48 h-auto max-h-48 object-contain transition-transform duration-300 hover:scale-[1.02] filter drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
                loading="eager"
                decoding="async"
              />
            ) : (
              /* Graceful fallback preserving brand typography without replacing with generic logo */
              <div className="relative z-10 w-44 h-24 border border-[#c5a059]/40 bg-[#121212] rounded-xl flex items-center justify-center p-4">
                <span className="font-brand text-lg font-bold tracking-wider gold-text-gradient">
                  BARBEARIA DO NIL
                </span>
              </div>
            )}
          </div>

          {/* 2. Brand Name */}
          <h1 className="font-brand text-2xl sm:text-[26px] font-bold tracking-wide text-neutral-100 mb-2">
            Barbearia do Nil
          </h1>

          {/* Golden accent divider */}
          <div className="flex items-center justify-center gap-2 mb-3" aria-hidden="true">
            <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#d4af37]/60" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]" />
            <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#d4af37]/60" />
          </div>

          {/* 3. Short discreet description */}
          <p className="text-sm text-neutral-400 font-normal max-w-xs leading-relaxed">
            Seja bem-vindo! Escolha uma das opções abaixo.
          </p>
        </header>

        {/* 4. The 5 Link Buttons */}
        <section className="w-full flex flex-col gap-3.5 mb-10" aria-label="Links úteis">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="group relative flex items-center justify-between w-full min-h-[58px] px-4 py-3.5 bg-[#121212]/95 hover:bg-[#181818] border border-[#c5a059]/25 hover:border-[#d4af37] rounded-xl transition-all duration-200 active:scale-[0.98] shadow-[0_2px_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_18px_rgba(212,175,55,0.18)] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60"
            >
              {/* Subtle gold gradient sheen on hover */}
              <div 
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#d4af37]/5 via-transparent to-[#d4af37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                aria-hidden="true" 
              />

              {/* Left icon wrapper */}
              <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-lg bg-[#0a0a0a] border border-[#c5a059]/20 group-hover:border-[#d4af37]/50 group-hover:bg-[#d4af37]/10 transition-colors shrink-0">
                {link.icon}
              </div>

              {/* Center/Left Button Label */}
              <span className="relative z-10 flex-grow text-center text-[15px] sm:text-base font-medium text-neutral-100 group-hover:text-white tracking-normal transition-colors px-3">
                {link.title}
              </span>

              {/* Right subtle arrow indicator for feedback & polish */}
              <div className="relative z-10 flex items-center justify-center w-8 h-8 text-neutral-500 group-hover:text-[#d4af37] transition-all duration-200 group-hover:translate-x-0.5 shrink-0" aria-hidden="true">
                <ChevronRight className="w-5 h-5" />
              </div>
            </a>
          ))}
        </section>

        {/* 5. Discreet Footer */}
        <footer className="mt-auto pt-4 pb-2 text-center w-full">
          <p className="text-xs text-neutral-500 tracking-wider font-light">
            Barbearia do Nil
          </p>
        </footer>

      </div>
    </main>
  );
}
