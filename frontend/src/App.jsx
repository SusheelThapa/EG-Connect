import LandingPage from "./components/LandingPage";
import ParticleAnimation from "./components/common/ParticleAnimation";

import particleAnimationConfig from "./json/particles.json"

const App = () => {
  return<><ParticleAnimation config={particleAnimationConfig}/><LandingPage /></>;
};

export default App;
