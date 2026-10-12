// src/App.tsx
import OptionsButton from "./components/OptionsButton"
import { hp1Cards, type FolioCardData } from './data/Hp1Cards'
import { FolioCard } from './components/FolioCard'
import { useState } from "react"

export default function App() {


  const backgrounds = [
    {
      id: 'hp2',
      url: 'https://res.cloudinary.com/xcnmyr02/image/upload/v1791598218/hp2_z_back.jpg',
      colorBg: 'bg-[#0f0829]/90',
      textColor: 'text-amber-200',
    },
    {
      id: 'hp3ai',
      url: 'https://res.cloudinary.com/xcnmyr02/image/upload/v1791781917/Desktop_-_1_1.png',
      colorBg: 'bg-[#341616]',
      lastBg: 'bg-[#292111]',
      textColor: 'text-amber-200',
    },
    {
      id: 'hp1ai',
      url: 'https://res.cloudinary.com/xcnmyr02/image/upload/v1791776025/Gemini_Generated_Image_vakm97vakm97vakm_1.png',
      colorBg: 'bg-[#292111]',
      lastBg: 'bg-[#292111]',
      textColor: 'text-amber-200',
      paddingBg: 'lg:pr-60',
    },
    {
      id: 'hp3scale',
      url: 'https://res.cloudinary.com/xcnmyr02/image/upload/v1791781906/Desktop_-_1.png',
      colorBg: 'bg-[#3a2f19]',
      lastBg: 'bg-[#292111]',
      textColor: 'text-amber-200',
    },
    {
      id: 'hp1reconstructed',
      url: 'https://res.cloudinary.com/xcnmyr02/image/upload/v1791776019/Frame_1.png',
      colorBg: 'bg-[#3a2f19]',
      lastBg: 'bg-[#292111]',
      textColor: 'text-amber-200',
      paddingBg: 'lg:pr-60',
    },
  ]

  const [bgIndex, setBgIndex] = useState(0)

  const toggleBackground = () => {
    setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length)
  }

  const cardsByGame: Record<string, FolioCardData[]> = {
    hp1button: hp1Cards,

  }

  const currentBg = backgrounds[bgIndex]

  const [currentButton, setCurrentButton] = useState('hp1button')

  return (
    <main style={{ backgroundImage: `url('${currentBg.url}')` }} className={`${currentBg.lastBg} min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed overflow-y-auto`}>

      {/* Cabeçalho */}
      <header className={`flex justify-between lg:grid grid-cols-3 text-center fixed z-50 w-full px-6 mb-16 ${currentBg.colorBg} backdrop-blur-lg border-b py-5 border-amber-500/20 transition-colors duration-500`}>
        <div className="flex items-center justify-start lg:pl-10">
          <h1 className="font-almendra text-3xl md:text-5xl font-medium text-amber-200 drop-shadow-[0_5px_10px_rgba(0,0,0,1)] tracking-wide">
            Folio Magi
          </h1>
        </div>
        <div className="flex gap-3 md:gap-5 justify-center items-center text-amber-200">
          <div id="hp1button" className="flex items-center gap-3">
            <button onClick={() => setCurrentButton(currentButton === 'hp1button' ? '' : 'hp1button')} ><img src="https://res.cloudinary.com/xcnmyr02/image/upload/v1791598190/hp1_dumbledore_b.png" alt="" className={`max-w-7 lg:max-w-10 h-auto cursor-pointer hover:scale-150 active:scale-95 transition-transform focus:outline-none ${currentButton === 'hp1button' ? 'drop-shadow-[0_0_4px_rgba(251,191,36,1)]' : ''}`} /></button>
            {currentButton === 'hp1button' && (
              <span className="hidden md:block drop-shadow-[0_0_3px_rgba(251,191,36,1)]">Harry Potter e a Pedra Filosofal</span>
            )}
          </div>
          <div id="hp2button" className="flex items-center gap-3">
            <button onClick={() => setCurrentButton(currentButton === 'hp2button' ? '' : 'hp2button')} ><img src="https://res.cloudinary.com/xcnmyr02/image/upload/v1791598207/hp2_potter_gl.png" alt="" className={`max-w-7 lg:max-w-10 h-auto cursor-pointer hover:scale-150 active:scale-95 transition-transform focus:outline-none ${currentButton === 'hp2button' ? 'drop-shadow-[0_0_4px_rgba(251,191,36,1)]' : ''}`} /></button>
            {currentButton === 'hp2button' && (
              <span className="hidden md:block drop-shadow-[0_0_3px_rgba(251,191,36,1)]">Harry Potter e a Câmara Secreta</span>
            )}
          </div>
            <div id="hp3button" className="flex items-center gap-3">
            <button onClick={() => setCurrentButton(currentButton === 'hp3button' ? '' : 'hp3button')} ><img src="https://res.cloudinary.com/xcnmyr02/image/upload/v1791598219/hp3.ico" alt="" className={`max-w-7 lg:max-w-10 h-auto cursor-pointer hover:scale-150 active:scale-95 transition-transform focus:outline-none ${currentButton === 'hp3button' ? 'drop-shadow-[0_0_4px_rgba(251,191,36,1)]' : ''}`} /></button>
            {currentButton === 'hp3button' && (
              <div className="hidden md:block">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            )}
            {currentButton === 'hp3button' && (
              <span className="hidden md:block drop-shadow-[0_0_3px_rgba(251,191,36,1)]">Harry Potter e o Prisioneiro de Azkaban</span>
            )}
          </div>
        </div>
        <div className="md:pl-0 flex justify-end items-center"><img onClick={toggleBackground} src="https://res.cloudinary.com/xcnmyr02/image/upload/v1791598219/HP2MenuBackToGame.png" alt="Icone para trocar fundo da página" className="max-w-10 lg:max-w-20 h-auto cursor-pointer hover:scale-105 active:scale-95 transition-transform focus:outline-none"/></div>
      </header>

      {/* Grelha de Cartas */}
      <div className={`grid grid-cols-1 mt-32 sm:grid-cols-2 lg:grid-cols-5 md:px-30 lg:px-50 ${currentBg.paddingBg} gap-5 lg:gap-16 justify-items-center mb-62`}>
        {cardsByGame[currentButton]?.map((card: FolioCardData) => (
          <FolioCard key={card.id} card={card} />
        ))}
      </div>

      {/* Rodapé Fixo */}
      <footer className={`${currentBg.colorBg} backdrop-blur-lg text-stone-300 text-xs gap-10 py-5 px-6 fixed bottom-0 left-0 w-full z-40 border-t border-amber-500/20 shadow-lg grid grid-cols-3 items-center justify-between`}>
        <div><img src="https://res.cloudinary.com/xcnmyr02/image/upload/v1791777253/Frame_2_2.png" alt="" className="max-w-15 lg:max-w-20 h-auto" /></div>
        <div >
          <div className="hidden md:flex">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <div className="hidden md:flex">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className="flex justify-end">
          <OptionsButton/>
        </div>
      </footer>

    </main>
  )
}