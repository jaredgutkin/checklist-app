import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavbarComponent from './components/NavBarComponent';


import HomeChoose from './pages/HomeChoose';
import Series1 from './pages/Series1';
import Series2 from './pages/Series2';
import Series3 from './pages/Series3';
import Series4 from './pages/Series4';


function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
      <Route exact path='/' element={<HomeChoose />}></Route>
        <Route exact path='/mbs1' element={<Series1 />}></Route>
        <Route exact path='/mbs2' element={<Series2 />}></Route>
        <Route exact path='/mbs3' element={<Series3 />}></Route>
        <Route exact path='/mbs4' element={<Series4 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
