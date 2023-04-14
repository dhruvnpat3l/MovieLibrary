import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter} from 'react-router-dom'


import Home from './Pages/Home'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  </React.StrictMode>,
)
