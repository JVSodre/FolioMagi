// src/widget.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './index.css?inline'

(function initWidget() {
  if ((window as any).__FOLIO_MAGI_WIDGET__) return;
  (window as any).__FOLIO_MAGI_WIDGET__ = true

  let host = document.getElementById('folio-magi-widget-root')
  if (!host) {
    host = document.createElement('div')
    host.id = 'folio-magi-widget-root'
    document.body.appendChild(host)
  }

  const shadowRoot = host.attachShadow({ mode: 'open' })
  const styleTag = document.createElement('style')
  styleTag.textContent = styles
  shadowRoot.appendChild(styleTag)

  const container = document.createElement('div')
  shadowRoot.appendChild(container)

  const root = ReactDOM.createRoot(container)
  root.render(
    <React.StrictMode>
      {/* Widget Flutuante Simples com 2 Divs */}
      <div className="fixed bottom-5 right-5 z-50 p-4 bg-slate-900 border border-amber-500/40 rounded-xl shadow-2xl text-amber-200 w-64 font-sans">
        
        {/* Div 1: Cabeçalho do Widget */}
        <div className="p-3 bg-amber-950/60 rounded-lg border border-amber-500/30 text-center mb-3">
          <h3 className="font-bold text-amber-300 text-sm">🧙‍♂️ Folio Magi Widget</h3>
          <p className="text-[11px] text-amber-200/70">Div 1: Teste de integração</p>
        </div>

        {/* Div 2: Conteúdo / Timer Simples */}
        <div className="p-3 bg-slate-800 rounded-lg text-center border border-slate-700">
          <span className="text-2xl font-mono font-bold text-amber-400 block mb-1">
            25:00
          </span>
          <p className="text-[10px] text-slate-400">Div 2: Timer do Pomodoro</p>
        </div>

      </div>
    </React.StrictMode>
  )
})()