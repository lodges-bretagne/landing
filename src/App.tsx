import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import Home from './pages/Home'
import BlueLodge from './pages/BlueLodge'
import GreenLodge from './pages/GreenLodge'

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue-lodge" element={<BlueLodge />} />
          <Route path="/green-lodge" element={<GreenLodge />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App

