import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

export interface FolioCardData {
  id: string
  number: number
  name: string
  description: string
  imageUrl: string
  rarity?: 'Bronze' | 'Silver' | 'Gold'
  category?: string
  game?: 'hp1' | 'hp2' | 'hp3'
}

interface FolioCardProps {
  card: FolioCardData
  className?: string
}

export function FolioCard({ card, className = '' }: FolioCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["30deg", "-30deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-30deg", "30deg"])

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100])
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5

    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div className={`relative z-0 hover:z-99 flex flex-col items-center group/container ${className}`}>
      {/* Container com perspectiva 3D da Animação */}
      <div className="perspective-[1000px]">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            clipPath: "polygon(50% 0%, 100% 38%, 81% 100%, 19% 100%, 0% 38%)",
          }}
          whileHover={{ scale: 1.2 }}
          className="relative cursor-pointer w-60 md:w-64 select-none group transition-shadow duration-300 pointer-events-auto"
        >
          {/* Imagem da carta */}
          <img
            src={card.imageUrl}
            alt={card.name}
            loading='lazy'
            decoding='async'
            className="w-full h-auto pointer-events-none block drop-shadow-[0_25px_15px_rgba(0,0,0,0.6)]"
          />

          {/* Camada de brilho/reflexo holográfico em movimento */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-25 transition-opacity duration-300 mix-blend-overlay"
            style={{
              background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}