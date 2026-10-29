// src/components/Header.tsx
interface HeaderProps {
  currentBg: {
    colorBg: string
    textColor: string
  }
  currentButton: string
  rarityCard: string
  onSelectButton: (buttonId: string) => void
  onSelectRarity: (rarity: string) => void
}

export function Header({ currentBg, currentButton, rarityCard, onSelectButton, onSelectRarity }: HeaderProps) {
  const handleToggle = (buttonId: string) => {
    onSelectButton(currentButton === buttonId ? '' : buttonId)
  }

  return (
    <header className="flex flex-col fixed w-screen mb-16 z-999">
      <div className={`flex justify-between lg:grid grid-cols-3 text-center z-999 w-full px-6 ${currentBg.colorBg} backdrop-blur-lg border-b py-5 border-amber-500/20 transition-colors duration-500`}>
        <div className="flex items-center justify-start lg:pl-10">
          <h1 className="font-almendra text-3xl md:text-5xl font-medium text-amber-200 drop-shadow-[0_5px_10px_rgba(0,0,0,1)] tracking-wide">
            Folio Magi
          </h1>
        </div>
        
        <div className="flex gap-3 md:gap-5 justify-center items-center text-amber-200">
          {/* Botão HP1 */}
          <div id="hp1button" className="flex items-center gap-3">
            <button onClick={() => {handleToggle('hp1button'); if (rarityCard !== 'all' && rarityCard !== 'Gold') {onSelectRarity('all');}}}>
              <img 
                src="https://res.cloudinary.com/xcnmyr02/image/upload/v1791598190/hp1_dumbledore_b.png" 
                alt="Harry Potter 1" 
                className={`max-w-7 lg:max-w-10 h-auto cursor-pointer hover:drop-shadow-[0_0_4px_rgba(251,191,36,1)] hover:scale-110 active:scale-95 transition-transform focus:outline-none ${currentButton === 'hp1button' ? 'drop-shadow-[0_0_4px_rgba(251,191,36,1)]' : ''}`} 
              />
            </button>
            {currentButton === 'hp1button' && (
              <span className="hidden md:block drop-shadow-[0_0_3px_rgba(251,191,36,1)]">Harry Potter e a Pedra Filosofal</span>
            )}
          </div>

          {/* Botão HP2 */}
          <div id="hp2button" className="flex items-center gap-3">
            <button onClick={() => handleToggle('hp2button')}>
              <img 
                src="https://res.cloudinary.com/xcnmyr02/image/upload/v1791598207/hp2_potter_gl.png" 
                alt="Harry Potter 2" 
                className={`max-w-7 lg:max-w-10 h-auto cursor-pointer hover:drop-shadow-[0_0_4px_rgba(251,191,36,1)] hover:scale-110 active:scale-95 transition-transform focus:outline-none ${currentButton === 'hp2button' ? 'drop-shadow-[0_0_4px_rgba(251,191,36,1)]' : ''}`} 
              />
            </button>
            {currentButton === 'hp2button' && (
              <span className="hidden md:block drop-shadow-[0_0_3px_rgba(251,191,36,1)]">Harry Potter e a Câmara Secreta</span>
            )}
          </div>

          {/* Botão HP3 */}
          <div id="hp3button" className="flex items-center gap-3">
            <button onClick={() => handleToggle('hp3button')}>
              <img 
                src="https://res.cloudinary.com/xcnmyr02/image/upload/v1791598219/hp3.ico" 
                alt="Harry Potter 3" 
                className={`max-w-7 lg:max-w-10 h-auto cursor-pointer hover:drop-shadow-[0_0_4px_rgba(251,191,36,1)] hover:scale-110 active:scale-95 transition-transform focus:outline-none ${currentButton === 'hp3button' ? 'drop-shadow-[0_0_4px_rgba(251,191,36,1)]' : ''}`} 
              />
            </button>
            {currentButton === 'hp3button' && (
              <span className="hidden md:block drop-shadow-[0_0_3px_rgba(251,191,36,1)]">Harry Potter e o Prisioneiro de Azkaban</span>
            )}
          </div>
        </div>

        <div className="md:pl-0 flex justify-end items-center">
        {/* Botão Search */}
          <div id="searchbutton" className="hidden lg:flex flex-row-reverse items-center">
                <img 
                src="https://res.cloudinary.com/xcnmyr02/image/upload/v1793222286/Search.png" 
                alt="Search" 
                className={`max-w-7 lg:min-w-15 z-999 h-auto drop-shadow-[0_0_4px_rgba(251,191,36,1)] focus:outline-none`} 
                />
              <input className="hidden md:block bg-amber-200/10 hover:shadow-[0_0_4px_rgba(251,191,36,1)] focus:ring-amber-200 focus:outline-none transition-all duration-500 ring-1 rounded-l-lg lg:w-100 py-3 pr-10 pl-5 -mr-6 mt-1 active:border-none text-amber-200 placeholder:text-amber-200" placeholder="Pesquise aqui"/>
          </div>
        </div>
      </div>

      <div className={`w-full flex justify-end -mt-1 ${currentButton == 'hp3button' ? 'hidden' : ''}`}>
        <div className={`flex justify-end px-5 py-4 gap-3 border-amber-500/20 border-b-2 border-l-2 rounded-bl-2xl ${currentBg.colorBg}`}>

            <img onClick={() => onSelectRarity('all')} className={`max-w-8 lg:max-w-10 h-auto hover:scale-120 transition-transform hover:drop-shadow-[0_0_3px_rgba(251,191,36,1)] ${rarityCard.toLowerCase() == 'all' ? 'drop-shadow-[0_0_3px_rgba(251,191,36,1)]! opacity-100!' : ''} `}  src="https://res.cloudinary.com/xcnmyr02/image/upload/v1793214130/FolioAll_2.png" alt="Folio Todos" />

            <img onClick={() => currentButton != 'hp1button' && onSelectRarity('Bronze')} className={`${currentButton === 'hp1button' ? 'grayscale cursor-default hover:drop-shadow-none' : 'hover:scale-120'} max-w-8 lg:max-w-10 h-auto transition-transform hover:drop-shadow-[0_0_3px_rgba(251,191,36,1)] ${rarityCard.toLowerCase() == 'bronze' ? 'drop-shadow-[0_0_3px_rgba(251,191,36,1)]! opacity-100!' : ''} `} src="https://res.cloudinary.com/xcnmyr02/image/upload/v1791598218/HP2FolioBronzeNormal.png" alt="Folio Bronze" />

            <img onClick={() => currentButton != 'hp1button' && onSelectRarity('Silver')} className={`${currentButton === 'hp1button' ? 'grayscale cursor-default hover:drop-shadow-none' : 'hover:scale-120'} max-w-8 lg:max-w-10 h-auto transition-transform hover:drop-shadow-[0_0_3px_rgba(251,191,36,1)] ${rarityCard.toLowerCase() == 'silver' ? 'drop-shadow-[0_0_3px_rgba(251,191,36,1)]! opacity-100!' : ''} `} src="https://res.cloudinary.com/xcnmyr02/image/upload/v1791598219/HP2FolioSilverNormal.png" alt="Folio Prata" />

            <img onClick={() => onSelectRarity('Gold')} className={`max-w-8 lg:max-w-10 h-auto hover:scale-120 transition-transform hover:drop-shadow-[0_0_3px_rgba(251,191,36,1) ${rarityCard.toLowerCase() == 'gold' ? 'drop-shadow-[0_0_3px_rgba(251,191,36,1)]! opacity-100!' : ''} `} src="https://res.cloudinary.com/xcnmyr02/image/upload/v1791598218/HP2FolioGoldNormal.png" alt="Folio Ouro" />
        </div>
      </div>
    </header>
  )
}