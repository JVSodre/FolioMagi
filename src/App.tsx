// src/App.tsx
import type { FolioCardData } from './data/types'
import { hp1Cards } from "./data"
import { hp2Cards } from "./data"
import { FolioCard } from './components/FolioCard'
import { useState } from "react"
import { Options } from './components/Options'
import { Header } from './components/Header'

export default function App() {
  const [bgIndex, setBgIndex] = useState(0)
  const [sortBy, setSortBy] = useState<'default' | 'number' | 'name'>('default');
  const [rarityCard, setRarityCard] = useState('all')
  const [currentGrid, setCurrentGrid] = useState('lg:grid-cols-8')
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const [currentButton, setCurrentButton] = useState('hp1button')

  const cardsByGame: Record<string, FolioCardData[]> = {
    hp1button: hp1Cards,
    hp2button: hp2Cards,
  }

  const allCards: FolioCardData[] = [...hp1Cards, ...hp2Cards]

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

  const baseCards = cardsByGame[currentButton] ?? allCards

  const toggleBackground = () => {
    setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length)
  }

  const currentBg = backgrounds[bgIndex]

  const filteredCards = baseCards.filter((card) => {
    const matchesRarity =
      rarityCard.toLowerCase() === 'all' || 
      card.rarity.toLowerCase() === rarityCard.toLowerCase();
    return matchesRarity;
  });

  const cardsToDisplay = [...filteredCards].sort((a,b) => {
    if (sortBy === 'number') {
      return a.number - b.number; 
    } else if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });   


  const [hoveredCard, setHoveredCard] = useState<FolioCardData | null>(null);

  return (
    <main style={{ backgroundImage: `url('${currentBg.url}')` }} className={`${currentBg.lastBg ?? ''} min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed overflow-y-auto`}>

      {/* Cabeçalho */}
      <Header currentBg={currentBg} 
        currentButton={currentButton} 
        rarityCard={rarityCard}
        onSelectButton={setCurrentButton}
        onSelectRarity={setRarityCard} ></Header>

      {/* Grelha de Cartas */}
      {cardsToDisplay.length === 0 ? (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className={`flex flex-col items-center justify-center text-center p-12 ${currentBg.colorBg} backdrop-blur-md rounded-xl border border-amber-500/20 gap-3`}>
            <p className="font-almendra text-5xl text-amber-200 mb-2">
              Nenhuma Carta Selecionada
            </p>
            <p className="text-stone-400 text-sm">
              Não foi possível localizar cartas para essa filtragem. Selecione um filtro diferente.
            </p>
          </div>
        </div>
      ) : (
      <div className={`grid mt-42 grid-cols-1 sm:grid-cols-2 ${currentGrid} md:px-10 lg:px-50 ${currentBg.paddingBg ?? ''} gap-5 lg:gap-8 justify-items-center mb-62`}>
        {cardsToDisplay.map((card: FolioCardData) => (
          <div
          key={card.id}
          onMouseEnter={() => setHoveredCard(card)}
          onMouseLeave={() => setHoveredCard(null)}
          >
            <FolioCard  
            card={card} />
          </div>
        ))}
      </div>
      )}

      {/* Rodapé Fixo */}
      <footer className={`${currentBg.colorBg} backdrop-blur-lg text-stone-300 z-999 text-xs gap-10 py-5 px-6 fixed bottom-0 left-0 w-full border-t border-amber-500/20 shadow-lg grid grid-cols-3 items-center justify-between`}>
        <button className="md:pl-0 flex justify-start items-center cursor-pointer">
          <img onClick={toggleBackground} src="https://res.cloudinary.com/xcnmyr02/image/upload/v1791598219/HP2MenuBackToGame.png" alt="Icone para trocar fundo da página" className="max-w-15 lg:max-w-20 h-auto hover:scale-105 active:scale-95 transition-transform focus:outline-none"/>
        </button>
        <div>
          {hoveredCard && (
            <h1 className='flex justify-center text-center font-arial drop-shadow-amber-200/50 drop-shadow-md text-amber-200 text-2xl'>"{hoveredCard.name}"</h1>
          )}
        </div>
        <div className="md:pl-0 flex justify-end items-center">
          {/* USANDO setIsOptionsOpen PARA ABRIR/FECHAR AO CLICAR NO ÍCONE DO RODAPÉ */}
          <img 
            onClick={() => setIsOptionsOpen(!isOptionsOpen)} 
            src="https://res.cloudinary.com/xcnmyr02/image/upload/v1791777253/Frame_2_2.png" 
            alt="Abrir Opções" 
            className="max-w-15 lg:max-w-20 h-auto cursor-pointer hover:scale-105 active:scale-95 transition-transform focus:outline-none" 
          />
        </div>
      </footer>

      {/* RENDERIZANDO DE FORMA CONDICIONAL E PASSANDO AS PROPS OBRIGATÓRIAS */}
      {isOptionsOpen && (
        <Options 
          className="fixed flex w-screen h-screen top-0 lg:top-auto lg:w-fit lg:h-auto z-9999 lg:bottom-5 lg:right-5" 
          currentBg={currentBg}
          currentGrid={currentGrid}
          sortBy={sortBy}
          onSortChange={setSortBy}
          onGridChange={(gridClass) => setCurrentGrid(gridClass)}
          onClose={() => setIsOptionsOpen(false)}
        />
      )}
    </main>
  )
}