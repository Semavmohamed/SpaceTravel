import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes ,Navigate} from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Distanation from './Component/Destanation/Distanation.jsx';
import Crew from './Component/Crew.jsx'
import Technology from './Component/Technology.jsx';


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/distanation' element={<Distanation />} />
          <Route path='/crew' element={<Crew/>}/>
          <Route path='/technology' element={<Technology/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
