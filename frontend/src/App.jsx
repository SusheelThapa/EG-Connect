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
          path="/policies"
          element={
            <>
              <HomePage active_feature="policies" />
            </>
          }
        />
        <Route
          path="/petition"
          element={
            <>
              <HomePage active_feature="petition" />
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
        <Route
          path="/notices/:id"
          element={
            <>
              <HomePage active_feature="notices" />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <HomePage active_feature="login" />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <HomePage active_feature="signup" />
            </>
          }
        />
        <Route
          path="/petitionform"
          element={
            <>
              <HomePage active_feature="petitionform" />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
