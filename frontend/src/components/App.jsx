import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import '../styles/App.css';
import Landing from './Landing.jsx';
import MainLayout from './MainLayout.jsx';
import Virasat from './Virasat.jsx';
import Aradhana from './Aradhana.jsx';
import Team from './Team.jsx';
import Artists from './Artists.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Landing/>}/>
        <Route path = '/virasat' element = {<Virasat/>}/>
        <Route path = '/aradhana' element = {<Aradhana/>}/>
        <Route path = '/teams' element = {<Team/>}/>
        <Route path = '/artists' element = {<Artists/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
