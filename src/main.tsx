import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { vars } from './assets/style/vars.scss'

import { fairyDustCursor } from 'cursor-effects';
new fairyDustCursor({ colors: [vars.$SpringYellow, vars.$IceBlue, vars.$GlowingRed] });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
