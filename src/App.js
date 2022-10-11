
import './app.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About';
import Project from './Pages/Projects';
import Contact from './Pages/Contact';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route exact path ='/' element={<Home/>} />
          <Route exact path ='/about' element={<About/>} />
          <Route exact path ='/project' element={<Project/>} />
          <Route exact path ='/contact' element={<Contact/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
