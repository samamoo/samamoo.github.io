import './App.css';
import Samantha from "./Samantha";
import Stars from "./Stars";
import BackToTop from "./BackToTop";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Samantha/>
      <Stars/>
      <BackToTop showBelow={250}/>
    </div>
  );
}

export default App;
