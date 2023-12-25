import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ParticleAnimation from "./components/common/ParticleAnimation";


import particleAnimationConfig from "./json/particles.json";

function App() {
  return (
      <Router>
    <div className="App">
       <Routes>
          <Route path="/" element={<><ParticleAnimation config={particleAnimationConfig}/><LandingPage /></>} />
        </Routes>
    </div>
      </Router>
  );
}

export default App;
