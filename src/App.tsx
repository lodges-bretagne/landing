import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BlueLodge from './pages/BlueLodge'
import GreenLodge from './pages/GreenLodge'

function App() {
  return (
    <BrowserRouter basename="/landing">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue-lodge" element={<BlueLodge />} />
        <Route path="/green-lodge" element={<GreenLodge />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

