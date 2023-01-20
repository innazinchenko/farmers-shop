import './App.css';
import Home from "./Home"
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";

import Aboutus from './Aboutus';
import Contacts from './Contacts';
import Delivery from './Delivery';





function App() {
  
    return <Router>
    <nav>
      <Link to='/' className='link'>Home</Link>
      <Link to='/aboutus' className='link'>About us</Link>
      <Link to='/contacts' className='link'>Contact us</Link>
      <Link to='/delivery' className='link'>Delivery</Link>
    </nav>
  
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/aboutus" element={<Aboutus/>} />
      <Route path="/contacts" element={<Contacts/>} />
      <Route path="/delivery" element={<Delivery/>} />
    </Routes>
    </Router>
  }
  
  export default App;

