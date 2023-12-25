import Footer from "./Footer";
import Notice from "./Notice";
import Header from "./Header";

import PolicyContent from "./Policy";
import PetitionContent from "./Petition";

const HomePage = ({ active_feature }) => {
  const features = ["policies", "petition", "notices"];

  return (
    <>
      <Header active_feature={active_feature} features={features} />
      {active_feature === features[0] && <PolicyContent />}
      {active_feature === features[1] && <PetitionContent />}
      {active_feature === features[2] && <Notice />}
      <Footer />
    </>
  );
};

export default HomePage;
