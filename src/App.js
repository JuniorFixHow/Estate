import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Check from "./pages/check/Check";
import Home from "./pages/home/Home";
function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/check/:Id" element={<Check/>}/>
        {/* <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/> */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
