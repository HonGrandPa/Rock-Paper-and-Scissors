import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Rule from './pages/Rule.jsx'
import Game from './pages/Game.jsx'
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/rule' element={<Rule />}/>
      <Route path='/game' element={<Game />}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App
