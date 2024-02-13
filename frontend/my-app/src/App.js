import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Abt from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Shop from "./Pages/Shop";
import Cart from './Pages/Cart';
import  Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Abt />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
