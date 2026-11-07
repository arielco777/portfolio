import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.tsx'
import { trackViewportHeight } from './viewportHeight'

trackViewportHeight()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* Vercel Web Analytics: no-op locally, active once deployed on Vercel. */}
    <Analytics />
  </StrictMode>,
)
