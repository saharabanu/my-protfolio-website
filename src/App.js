
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/home" element={<Home/>}>
      </Route>
      {/* <Route path="/about" element={<About/>}>
      </Route> */}
      <Route path="*" element={<NotFound/>}>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
