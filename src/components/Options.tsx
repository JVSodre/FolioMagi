interface OptionsProps {
  className?: string
  currentBg: {
    colorBg: string
    textColor: string
  }
  currentGrid: string
  onGridChange: (gridClass: string) => void
  onClose?: () => void
}

export function Options({ className = '', currentBg, currentGrid, onGridChange, onClose }: OptionsProps) {
  return (
    <div className={`${currentBg.colorBg} ${currentBg.textColor} ${className} backdrop-blur-md w-full flex flex-col gap-4 lg:rounded-br-xl ring-amber-200 ring-1 shadow-2xl`}>
      <header className="flex flex-col">
        <div className="grid grid-cols-2 px-7 lg:px-8 py-4 w-full bg-black/40 items-center text-2xl xl:pt-5">
          <div className="w-full flex">
            <h2 className="font-bold font-almendra">Visualização</h2>
          </div>
          <div className="flex justify-end">
            <button 
              onClick={onClose} 
              className="cursor-pointer hover:drop-shadow-sm hover:drop-shadow-amber-200 text-center font-almendra font-extrabold transition-opacity"
            >
              X
            </button>
          </div>
        </div>
        <hr className="border-amber-200 drop-shadow-black drop-shadow-md"/>
      </header>

      <section className="hidden md:block lg:block px-7 pb-1">
        <div className="p-2 gap-4 flex flex-col">
          <h1 className="font-bold italic">Quantidade de Cartas por linha:</h1>
          <div className="grid grid-cols-4 gap-2">
            <button 
              onClick={() => onGridChange('lg:grid-cols-4')} 
              className={`ring-amber-200 ring-1 hover:ring-2 hover:font-bold bg-black/30 rounded-md p-2 transition-all ${currentGrid === 'lg:grid-cols-4' ? 'ring-2 font-bold bg-black/60' : ''}`}
            >
              4
            </button>
            <button 
              onClick={() => onGridChange('lg:grid-cols-5')} 
              className={`ring-amber-200 ring-1 hover:ring-2 hover:font-bold bg-black/30 rounded-md p-2 transition-all ${currentGrid === 'lg:grid-cols-5' ? 'ring-2 font-bold bg-black/60' : ''}`}
            >
              5
            </button>
            <button 
              onClick={() => onGridChange('lg:grid-cols-6')} 
              className={`ring-amber-200 ring-1 hover:ring-2 hover:font-bold bg-black/30 rounded-md p-2 transition-all ${currentGrid === 'lg:grid-cols-6' ? 'ring-2 font-bold bg-black/60' : ''}`}
            >
              6
            </button>
            <button 
              onClick={() => onGridChange('lg:grid-cols-8')} 
              className={`ring-amber-200 ring-1 hover:ring-2 hover:font-bold bg-black/30 rounded-md p-2 transition-all ${currentGrid === 'lg:grid-cols-8' ? 'ring-2 font-bold bg-black/60' : ''}`}
            >
              8
            </button>
          </div>
        </div>
      </section>

      <hr className="hidden md:block lg:block border-amber-200"/>

      <section className="px-7 pb-9">
        <div className="p-2 gap-4 flex flex-col">
          <h1 className="font-bold italic">Classificar por:</h1>
          <div className="grid grid-cols-1 gap-3">
            <button className="ring-amber-200 ring-1 hover:ring-2 hover:font-bold bg-black/30 rounded-md p-2">Ordem Original</button>
            <button className="ring-amber-200 ring-1 hover:ring-2 hover:font-bold bg-black/30 rounded-md p-2">Ordem Alfabética</button>
            <button className="ring-amber-200 ring-1 hover:ring-2 hover:font-bold bg-black/30 rounded-md p-2">Índice da Carta</button>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <button className="ring-amber-200 ring-2 hover:ring-2 hover:font-bold bg-black/30 rounded-md p-2">Crescente</button>
            <button className="ring-amber-200 ring-1 hover:ring-2 hover:font-bold bg-black/30 rounded-md p-2">Decrescente</button>
          </div>
        </div>
      </section>
    </div>
  )
}