import './App.css';
import Navbar from "./components/navbar";
import Home from "./pages/home";
import RSVP from "./pages/rsvp";



function App() {
  return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
  );
}

export default App;
