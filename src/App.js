
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Skill from './Components/Skill';
import Work from './Components/Work';

function App() {
  return (
    <div className="App ">
      <Navbar/>
     <Home/>
     <About/>
     <Skill/>
     <Work/>
    <Contact/>
    </div>
  );
}

export default App;
