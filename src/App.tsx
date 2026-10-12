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

  const currentBg = backgrounds[bgIndex]

  return (
    <main style={{ backgroundImage: `url('${currentBg.url}')` }} className={`${currentBg.lastBg} min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed overflow-y-auto`}>

      {/* Cabeçalho */}
      <header className={`flex justify-between lg:grid grid-cols-3 text-center fixed z-50 w-full px-6 mb-16 ${currentBg.colorBg} backdrop-blur-lg border-b py-5 border-amber-500/20 transition-colors duration-500`}>
        <div className="flex items-center justify-start lg:pl-10">
          <h1 className="font-almendra text-3xl md:text-5xl font-medium text-amber-200 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] tracking-wide">
            Folio Magi
          </h1>
        </div>
        <div className="flex justify-center items-center text-amber-200">
          <span>Harry Potter e a Pedra Filosofal</span>
        </div>
        <div className="pl-5 md:pl-0 flex justify-end items-center"><img onClick={toggleBackground} src="https://res.cloudinary.com/xcnmyr02/image/upload/v1791598219/HP2MenuBackToGame.png" alt="Icone para trocar fundo da página" className="max-w-10 lg:max-w-20 h-auto cursor-pointer hover:scale-105 active:scale-95 transition-transform focus:outline-none"/></div>
      </header>

      {/* Grelha de Cartas */}
      <div className={`grid grid-cols-1 mt-40 sm:grid-cols-2 lg:grid-cols-5 md:px-30 lg:px-50 ${currentBg.paddingBg} gap-5 lg:gap-16 justify-items-center mb-62`}>
        {hp1Cards.map((card: FolioCardData) => (
          <FolioCard key={card.id} card={card} />
        ))}
      </div>

      {/* Rodapé Fixo */}
      <footer className={`${currentBg.colorBg} backdrop-blur-lg text-stone-300 text-xs gap-10 py-5 px-6 fixed bottom-0 left-0 w-full z-40 border-t border-amber-500/20 shadow-lg grid grid-cols-3 items-center justify-between`}>
        <div><img src="https://res.cloudinary.com/xcnmyr02/image/upload/v1791777253/Frame_2_2.png" alt="" className="max-w-15 lg:max-w-20 h-auto" /></div>
        <div >

        </div>
        <div className="flex justify-end">
          <OptionsButton/>
        </div>
      </footer>

    </main>
  )
}