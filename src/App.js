import './App.css';
import NavBar from './nav-bar/BarNav';
import Homepage from './home-page/homePage.js';
import Card from './cards/card'
import ListDistrosHome from './listDistrosHome/listDistrosHome';
import ForOldPC from './for-old-pc/forOldPc';

function App() {
  return (
    <>
      {<NavBar />}
      {<Homepage />}
      <ListDistrosHome 
        titlePage='Tendencias del último año'
      />
      <ForOldPC 
        titlePage='Para equipos de bajos recursos'
      />
    </>  
  );

}

export default App;
