import { useNavigate, Link } from 'react-router-dom'
import { HomeBg } from '@/components/HomeBg'
import { ActionButton } from '@/components/ActionButton'
import { PixelMoth } from '@/components/PixelMoth'

export function OraclePage() {
  const navigate = useNavigate()
  return (
    <>
      <HomeBg noGlitch />
      <div className="relative z-10 flex flex-col items-center justify-start pt-6 pb-12 sm:justify-center sm:py-16 px-6 sm:px-4 min-h-screen">
        <main className="flex flex-col items-center w-full max-w-[380px] text-center gap-4 px-2 sm:px-0 [&_p]:text-justify">
          <ActionButton onClick={() => navigate('/')} className="w-full sm:w-auto">
            &larr; Back
          </ActionButton>

          <h1 className="title-glow font-serif text-[42px] sm:text-[56px] font-bold text-white tracking-[0.015em] mt-4">
            The Oracle
          </h1>
          <div className="space-y-4">
            <p className="font-mono text-[14px] sm:text-[16px] text-phantom leading-relaxed">
              Huzzah, good visitor. I am Heather, a designer who wants to make beautifully ridiculous projets on the internet. Welcome to my world of luscious glows, unneccesary filigree, and a yearning for Geocities. I hope the Startup Arcana helps you find your path through the mists of corporate jargon and the dreaded Sunday Scaries. If you enjoyed this deck, come say hello.
              <br /><br />
              And yes, I did actually hand illustrate the cards in Procreate on my iPad.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <a href="https://x.com/hhaselwood" target="_blank" rel="noopener noreferrer" className="font-mono text-[13px] text-white/70 hover:text-white transition-colors">Twitter</a>
            <span className="text-[#FFF]/40 text-[10px]">◆</span>
            <a href="https://www.linkedin.com/in/heather-haselwood/" target="_blank" rel="noopener noreferrer" className="font-mono text-[13px] text-white/70 hover:text-white transition-colors">LinkedIn</a>
          </div>

        </main>
        <footer className="pt-8 sm:pt-10 pb-6 text-center w-full max-w-[528px] px-2 sm:px-0">
          <div className="flex items-center justify-center gap-3">
            <Link
              to="/"
              className="font-mono text-[14px] text-white tracking-[0.055em] underline transition-all duration-200 hover:[text-shadow:0_0_8px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.4)]"
            >
              Spreads
            </Link>
            <span className="text-white/60 text-[7px]">◆</span>
            <Link
              to="/guidebook/archetypes"
              className="font-mono text-[14px] text-white tracking-[0.055em] underline transition-all duration-200 hover:[text-shadow:0_0_8px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.4)]"
            >
              The Guidebook
            </Link>
          </div>
          <p className="text-[11px] sm:text-[14px] text-whisper tracking-[0.08em] uppercase font-mono mt-4">
            64 cards &middot; 4 suits &middot; 0 venture backing
          </p>
          <p className="text-[12px] text-whisper/85 tracking-widest mt-2 text-center uppercase font-mono">
            Made by Heather Hex
          </p>
          <div className="flex justify-center mt-4">
            <PixelMoth />
          </div>
        </footer>
      </div>
    </>
  )
}
