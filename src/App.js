import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Settings from './pages/Settings.js';
import Questions from './pages/Questions.js';
import Results from './pages/Results.js';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Router>
            <Navbar/>
            <Routes>
              <Route exact path='/' element={<Settings/>}></Route>
              <Route exact path='/questions' element={<Questions/>}></Route>
              <Route exact path='/results' element={<Results/>}></Route>
            </Routes>
      </Router>
    </>
  );
}

export default App;
