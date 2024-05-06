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
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/medicinal' element={<ShopCategory category="Medicinal"/>}/>
          <Route path='/aqi' element={<ShopCategory category="aqi"/>}/>
          <Route path='/herb' element={<ShopCategory category="Herb"/>}/>
          <Route path='/aesthetic' element={<ShopCategory category="Aesthetic"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path="/about" element={<Abt />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
