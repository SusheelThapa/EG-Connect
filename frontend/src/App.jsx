import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ParticleAnimation from "./components/common/ParticleAnimation";

import particleAnimationConfig from "./json/particles.json";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ParticleAnimation config={particleAnimationConfig} />
              <LandingPage />
            </>
          }
        />
        <Route
          path="/notices"
          element={
            <>
              <HomePage active_feature="notices" />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
