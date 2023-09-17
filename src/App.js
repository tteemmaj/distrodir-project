import './App.css';
import Homepage from './home-page/homePage.js';
import Card from './cards/card'
import ListDistrosHome from './listDistrosHome/listDistrosHome';
import ForOldPC from './for-old-pc/forOldPc';
import AllDistros from './all-distros/AllDistros.js'

function App() {
  return (
    <>
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
