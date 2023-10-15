import logo from './logo.svg';
import {HashRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {Main} from './components/MainPage.js';
import {About} from './components/AboutPage.js';
import {Study} from './components/StudyPage.js';
import {Contact} from './components/ContactPage.js';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/study" element={<Study/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
