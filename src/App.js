import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import About from './components/About';
import MemoState from './context/memos/MemoState';
import Memos from "./components/Memos";
function App() {
  return (
    <div className="App">
      <MemoState>
      <BrowserRouter>
      
        <Navbar />
        <div className='container'>
        <Routes>
          <Route exact path="/" element={<Welcome />}/>
          <Route exact path="/about" element={ <About />}/>
        </Routes>
        <Memos/>
        </div>
        
      </BrowserRouter>
      </MemoState>
     
    </div>
  )
}

export default App
