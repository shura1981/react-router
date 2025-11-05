import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './scss/styles.scss'
import App from './App.tsx'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined

createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename={basename}>
        <App />
    </BrowserRouter>
)
