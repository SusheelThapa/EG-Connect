import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import ParticleAnimation from "./components/common/ParticleAnimation";
import HomePage from "./components/HomePage";

// Configuration for the particle animation
import particleAnimationConfig from "./json/particles.json";

/**
 * @function App
 * @description Main application component that sets up routing using React Router.
 * It defines different routes and the components that should be rendered for each route.
 *
 * @returns {JSX.Element} The routing setup for the application.
 */
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
