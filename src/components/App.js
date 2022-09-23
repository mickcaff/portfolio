import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../css/App.css";
import About from "./About";
import Portfolio from "./Portfolio";
import SharedLayout from "./SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// <div className="App">
//   <i class="fa-solid fa-2xl fa-person-digging"></i>
//   <h2>Portfolio Under Construction</h2><br />
//   <p>Regards, Mick</p><br/><br />
//   <div className='social-links'>
//     <a href="https://www.linkedin.com/in/mcaffery/" rel='noreferrer' target="__blank" >LinkedIn</a>
//     <a href="https://github.com/mickcaff" rel='noreferrer' target="__blank">GitHub</a>
//   </div>
// </div>
