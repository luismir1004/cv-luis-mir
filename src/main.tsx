import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'

import { UIProvider } from './context/UIContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HelmetProvider>
            <UIProvider>
                <App />
            </UIProvider>
        </HelmetProvider>
    </React.StrictMode>,
)
