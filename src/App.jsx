import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Card } from 'reactstrap';
import  Navigation  from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import CardContainer from "./components/CardContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="col-12">
      
      <Navigation />
      <h1>Full Stack Web Developer</h1>
      <Button color="primary">Click Me To Learn More</Button>
      <CardContainer />
      <Footer  />
      </div>
    </>
  );
}

export default App;
