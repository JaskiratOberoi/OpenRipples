import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
