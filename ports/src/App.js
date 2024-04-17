import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Welcome from './pages/welcome';
import AboutPage from './pages/aboutpage';
import Contacting from './pages/contactPages';


function App() {
  return (
    <>
<Router>
  <Routes>
    <Route path='/' element={<Welcome/>}></Route>
    <Route path='/franklinprogrammer' element={<Welcome/>}></Route>
    <Route path='/about-me' element={<AboutPage/>}></Route>
    <Route path='/contact-me' element={<Contacting/>}></Route>
  </Routes>
</Router>
    </>

  );
}

export default App;
