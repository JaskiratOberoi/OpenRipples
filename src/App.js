import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import MarketComparison from "./Pages/MarketComparison";
import Packages from "./Pages/Packages";
import Team from "./Pages/Team";
import ExtendedFooter from "./Pages/ExtendedFooter";

import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MarketComparison />
      <Packages />
      <Team />
      <ExtendedFooter />
    </div>
  );
}

export default App;
