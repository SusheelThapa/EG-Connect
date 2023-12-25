import Footer from "./Footer";
import Notice from "./Notice";
import Header from "./Header";

import { useState } from "react";

const HomePage = ({ active_feature }) => {
  const features = ["policies", "petition", "notices"];

  return (
    <>
      <Header active_feature={active_feature} feature={features} />
      {active_feature === features[2] && <Notice />}
      <Footer />
    </>
  );
};

export default HomePage;
