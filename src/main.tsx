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
    {/* Vercel Web Analytics: only logs to the console in dev, sends data once deployed on Vercel. */}
    <Analytics />
  </StrictMode>,
)
