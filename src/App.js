import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import About from './components/About';
import MemoState from './context/memos/MemoState';
function App() {
  return (
    <div className="App">
      <MemoState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Welcome />}/>
          <Route exact path="/about" element={ <About />}/>
        </Routes>
      </BrowserRouter>
      </MemoState>
     
    </div>
  )
}

export default App
