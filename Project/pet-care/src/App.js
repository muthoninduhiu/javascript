import './style.css';
import Hamburger from "./components/Hamburger";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { useState } from 'react';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
<>
    <header>
      <h1>Pet Care System</h1>
    </header>
    <div className="menu-container">
      <Hamburger isOpen={isOpen} onClick={handleClick} />
          {isOpen ? <Nav /> : null}
    </div>
    <main role="main" className={isOpen ? 'content content--open' : 'content'}>
        <Home />
    </main>
    <Footer/>
    
</> );
    
}

export default App;
