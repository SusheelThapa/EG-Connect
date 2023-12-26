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

import Cookies from "js-cookie";

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

  const isLogin = Cookies.get("isLogin");
  const access_token = Cookies.get("access_token");
  const username = Cookies.get("username");

  return (
    <>
      <Header
        active_feature={active_feature}
        features={features}
        isLogin={isLogin}
        username={username}
      />
      {active_feature === features[0] && (
        <PolicyContent
          isLogin={isLogin}
          access_token={access_token}
          username={username}
        />
      )}
      {active_feature === features[1] && (
        <PetitionContent
          isLogin={isLogin}
          access_token={access_token}
          username={username}
        />
      )}
      {active_feature === features[2] && (
        <Notices
          isLogin={isLogin}
          access_token={access_token}
          username={username}
        />
      )}
      {active_feature === features[3] && (
        <Login
          isLogin={isLogin}
          access_token={access_token}
          username={username}
        />
      )}
      {active_feature === features[4] && (
        <SignUp
          isLogin={isLogin}
          access_token={access_token}
          username={username}
        />
      )}
      {active_feature === features[5] && (
        <AddPetitionForm
          isLogin={isLogin}
          access_token={access_token}
          username={username}
        />
      )}
      {active_feature === features[6] && (
        <NoticePage
          isLogin={isLogin}
          access_token={access_token}
          username={username}
        />
      )}
      <Footer />
    </>
  );
};

HomePage.propTypes = {
  active_feature: PropTypes.string.isRequired,
};

export default HomePage;
