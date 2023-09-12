import './App.css';
import NavBar from './nav-bar/BarNav';
import Homepage from './home-page/homePage.js';
import Card from './cards/card'
import ListDistrosHome from './listDistrosHome/listDistrosHome';
import ForOldPC from './for-old-pc/forOldPc';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import AllDistros from './all-distros/AllDistros.js'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'/>
          <Route path='/all-distros' element={ <AllDistros /> } />
        </Routes>
      </BrowserRouter>
      {<NavBar />}
      {<Homepage />}
      <ListDistrosHome 
        titlePage='Tendencias del último año'
      / >
      <ForOldPC 
        titlePage='Para equipos de bajos recursos'
      />
    </>  
  );

}

export default App;
