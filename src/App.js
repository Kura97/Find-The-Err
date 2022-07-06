import "./App.css";
// 4- install and import react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Cards from "./component/Cards";
import About from "./component/About";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* 3- Added Routes tag */}
        <Routes>
        <Route>
          {/* 1- edit Routes tag to Route */}
          <Route path="/"></Route>
          {/* 2- add open and close tag to Cards,About */}
          <Route path="/Cards" element={<Cards />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
