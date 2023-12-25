import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticleAnimation = ({ config }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <React.Fragment>{init && <Particles options={config} />}</React.Fragment>
  );
};

ParticleAnimation.propTypes = {
  config: PropTypes.object,
};

export default ParticleAnimation;
