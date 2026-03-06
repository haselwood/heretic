import { useNavigate } from 'react-router-dom'
import { HomeBg } from '@/components/HomeBg'
import { ActionButton } from '@/components/ActionButton'
import { PixelMoth } from '@/components/PixelMoth'

export function OraclePage() {
  const navigate = useNavigate()
  return (
    <>
      <HomeBg />
      <div className="relative z-10 flex flex-col items-center justify-start pt-[8vh] pb-12 sm:justify-center sm:py-16 px-4 min-h-screen">
        <main className="flex flex-col items-center w-full max-w-[380px] text-center gap-4 [&_p]:text-justify">
          <ActionButton onClick={() => navigate('/')}>
            &larr; Back
          </ActionButton>

          <h1 className="title-glow font-serif text-[42px] sm:text-[56px] font-bold text-white tracking-[0.015em] mt-4">
            The Oracle
          </h1>
          <div className="space-y-4">
            <p className="font-mono text-[14px] sm:text-[16px] text-whisper leading-relaxed">
              Huzzah, good visitor. I am Heather, a designer who wants to make beautifully ridiculous projets on the internet. Welcome to my world of luscious glows, unneccesary filigree, and a yearning for Geocities. I hope the Startup Arcana helps you find your path through the mists of corporate jargon and the dreaded Sunday Scaries. If you enjoyed this deck, come say hello.
              <br /><br />
              And yes, I did actually hand illustrate the cards in Procreate on my iPad.
            </p>
          </div>

          <PixelMoth className="mt-2" />

          <div className="flex items-center gap-4 mt-2">
            <a href="https://x.com/hhaselwood" target="_blank" rel="noopener noreferrer" className="font-mono text-[13px] text-white/70 hover:text-white transition-colors">Twitter</a>
            <span className="text-[#FFF]/40 text-[10px]">◆</span>
            <a href="https://www.linkedin.com/in/heather-haselwood/" target="_blank" rel="noopener noreferrer" className="font-mono text-[13px] text-white/70 hover:text-white transition-colors">LinkedIn</a>
          </div>

        </main>
      </div>
    </>
  )
}
