import Footer from "./Footer";
import Notices from "./Notices";
import Header from "./Header";

import PolicyContent from "./Policy";
import PetitionContent from "./Petition";
import PropTypes from "prop-types";
import Login from "./Login";
import SignUp from "./Signup";
import AddPetitionForm from "./AddPetitionForm";
import NoticePage from "./NoticePage";

const HomePage = ({ active_feature }) => {
  const features = [
    "policies",
    "petition",
    "notices",
    "login",
    "signup",
    "petitionform",
    "notice",
  ];

  return (
    <>
      <Header active_feature={active_feature} features={features} />
      {active_feature === features[0] && <PolicyContent />}
      {active_feature === features[1] && <PetitionContent />}
      {active_feature === features[2] && <Notices />}
      {active_feature === features[3] && <Login />}
      {active_feature === features[4] && <SignUp />}
      {active_feature === features[5] && <AddPetitionForm />}
      {active_feature === features[6] && <NoticePage />}
      <Footer />
    </>
  );
};

HomePage.propTypes = {
  active_feature: PropTypes.string.isRequired,
};

export default HomePage;
