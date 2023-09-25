import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Card } from 'reactstrap';
import  Navigation  from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="col-12">
      <Navigation />

      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>


      <Footer  />
      </div>
    </>
  );
}

export default App;
