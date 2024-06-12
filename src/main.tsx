import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ReactDataGrid from './pages/ReactDataGrid.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='excel' element={<ReactDataGrid/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
