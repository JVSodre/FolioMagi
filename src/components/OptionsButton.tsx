"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const SPRING = { type: "spring", bounce: 0.15, visualDuration: 0.25 } as const

const contentAnimations = {
  initial: { opacity: 0, filter: "blur(8px)" },
  animate: { opacity: 1, filter: "blur(0px)", transition: { delay: 0.15 } },
  exit: { opacity: 0, filter: "blur(8px)" },
}

function OptionItem({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className="h-9 flex items-center gap-2.5 px-2.5 select-none text-xs text-stone-200 rounded-lg cursor-pointer transition-colors hover:bg-amber-500/15 hover:text-amber-100"
    >
      <span className="w-4 h-4 text-amber-400 shrink-0">{icon}</span>
      <span>{label}</span>
    </div>
  )
}

function OptionsMenuContent({ onClose }: { onClose: () => void }) {
  const handleAction = (actionName: string) => {
    console.log(`Ação selecionada: ${actionName}`)
    onClose()
  }

  return (
    <motion.div
      layoutId="options-container"
      transition={SPRING}
      /* 
        Fixamos bottom-0 e right-0 e definimos origin-bottom-right.
        O inset-auto também impede que o top/left padrão prevaleçam.
      */
      className="absolute bottom-0 right-0 z-50 w-56 p-2 rounded-2xl overflow-hidden bg-stone-900 border border-amber-500/30 text-stone-100 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.8),0_10px_10px_-5px_rgba(0,0,0,0.6)] backdrop-blur-md origin-bottom-right"
      style={{
        top: "auto",
        left: "auto",
        bottom: 0,
        right: 0,
      }}
    >
      {/* Cabeçalho */}
      <motion.div
        initial={contentAnimations.initial}
        animate={contentAnimations.animate}
        exit={contentAnimations.exit}
        className="px-2 pt-1 pb-3"
      >
        <h3 className="text-sm font-semibold text-amber-400 font-serif">Opções do Fólio</h3>
        <p className="text-[11px] text-stone-400 mt-0.5">Ajustes da coleção e exibição</p>
      </motion.div>

      {/* Lista de Opções */}
      <motion.div
        initial={contentAnimations.initial}
        animate={contentAnimations.animate}
        exit={contentAnimations.exit}
        className="flex flex-col gap-1 bg-black/40 p-1 rounded-xl"
      >
        <OptionItem
          onClick={() => handleAction("Filtrar")}
          label="Filtrar por Raridade"
          icon={
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.707 7.293A1 1 0 013 6.586V4z" />
            </svg>
          }
        />

        <OptionItem
          onClick={() => handleAction("Ordenar")}
          label="Ordenar por Número"
          icon={
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
          }
        />

        <OptionItem
          onClick={() => handleAction("Modo 3D")}
          label="Alternar Efeito 3D"
          icon={
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          }
        />

        <div className="h-px bg-white/10 my-1" />

        <OptionItem
          onClick={() => handleAction("Ajuda")}
          label="Sobre o Fólio"
          icon={
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
      </motion.div>
    </motion.div>
  )
}

export default function OptionsButton() {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    if (!open) return
    const handleClickOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open])

  return (
    <div className="relative w-11 h-11" ref={rootRef}>
      <AnimatePresence>
        {!open ? (
          <motion.button
            key="closed"
            layoutId="options-container"
            transition={SPRING}
            onClick={() => setOpen(true)}
            aria-label="Abrir menu de opções"
            className="absolute bottom-0 right-0 z-50 w-11 h-11 p-0 border border-amber-500/30 rounded-full flex items-center justify-center cursor-pointer bg-stone-900 text-amber-400 shadow-lg hover:bg-stone-800 hover:text-amber-300 transition-colors origin-bottom-right"
            style={{
              top: "auto",
              left: "auto",
              bottom: 0,
              right: 0,
            }}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </motion.button>
        ) : (
          <OptionsMenuContent key="open" onClose={() => setOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}