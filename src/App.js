import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import MarketComparison from "./Pages/MarketComparison";

import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MarketComparison />
    </div>
  );
}

export default App;
