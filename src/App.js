import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import HomeChoose from './pages/HomeChoose';
import Series1 from './pages/Series1';


function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<HomeChoose />}></Route>
        <Route exact path='/mbs1' element={<Series1 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
