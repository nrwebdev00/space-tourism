import {  BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Sass
import '../Scss/Main.scss'

// Import Pages
import Home from '../Pages/Home';
import Destination from '../Pages/Destination';
import Crew from '../Pages/Crew';
import Technology from '../Pages/Technology';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='destination/' element={<Destination />}/>
        <Route path='crew/' element={<Crew />} />
        <Route path='technology' element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
