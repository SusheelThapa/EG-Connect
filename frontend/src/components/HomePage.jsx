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

/**
 * @function HomePage
 * @description Central layout component for the application.
 * It renders different content based on the currently active feature.
 *
 * @param {Object} props - The props for the HomePage component.
 * @param {string} props.active_feature - The feature currently active or selected.
 *
 * @returns {JSX.Element} - The main layout of the application with dynamic content.
 */
const HomePage = ({ active_feature }) => {
  // List of features available in the application
  const features = [
    "policies",
    "petition",
    "notices",
    "login",
    "signup",
    "petitionform",
    "notice",
  ];

  // Fetching login status and user details from cookies
  const isLogin = Cookies.get("isLogin");
  const access_token = Cookies.get("access_token");
  const username = Cookies.get("username");

  return (
    <>
      {/* Header component with navigation and user information */}
      <Header
        active_feature={active_feature}
        features={features}
        isLogin={isLogin}
        username={username}
      />
      {/* Conditional rendering of content based on the active feature */}
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

// PropTypes validation to ensure active_feature is a string
HomePage.propTypes = {
  active_feature: PropTypes.string.isRequired,
};

export default HomePage;
