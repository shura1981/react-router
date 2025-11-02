import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import 'mdb-ui-kit/css/mdb.min.css';
import './scss/styles.scss';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
