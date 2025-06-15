import { Route, Routes } from "react-router-dom"

import { Peliculas } from "./pages/Peliculas"
import { Principal } from "./pages/Principal"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/peliculas" element={<Peliculas />} />
    </Routes>
  )
}

export default App
