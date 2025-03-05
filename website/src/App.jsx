import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Services from './Components/Sevices';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;