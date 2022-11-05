import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Check from "./pages/check/Check";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
// import './app.css';

function App() {
  return (
    
      <BrowserRouter className = 'app'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/check/:Id" element={<Check/>}/>
        {/* <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/> */}
      <Route path="/about" element = {<About/>} />
      <Route path="/contact" element = {<Contact/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
