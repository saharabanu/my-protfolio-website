
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Skills from './Pages/Skills/Skills';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navigation/>
   
    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/home" element={<Home/>}>
      </Route>
      <Route path="/projects/:projectId" element={<Explore/>}>
      </Route>
      {/* <Route path="/services" element={<Services/>}>
      </Route> */}
      <Route path="/blogs" element={<Blogs/>}>
      </Route>
      <Route path="/skills" element={<Skills/>}>
      </Route>
      <Route path="*" element={<NotFound/>}>
      </Route>
    </Routes>
    
  </BrowserRouter>
    </div>
  );
}

export default App;
