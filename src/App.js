import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Footer from "./components/footer/Footer";
import Navigation from "./components/header/Navigation";
import Product from "./components/product/Product";
import Eror from "./pages/404";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route  path ="/about" element={<About/>}/>
          <Route path ="/contact" element={<Contact/>}/>
          <Route path ="*" element={<Eror/>} />
          <Route path="/product/:category" element={<Product/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    
  );
}

export default App;
