import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { GIFTS_MOCK } from "../src/mock/gifts.mock";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={ GIFTS_MOCK }/>
  </React.StrictMode>,
)
