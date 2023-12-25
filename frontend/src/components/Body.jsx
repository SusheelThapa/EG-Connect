import PropTypes from "prop-types";

import PetitionContent from "./Petition";
import PolicyContent from "./Policy";

const Body = ({ showPetitionContent }) => {
  return (
    <div className="p-4">
      {showPetitionContent ? <PetitionContent /> : <PolicyContent />}
    </div>
  );
};

// Add PropTypes validation
Body.propTypes = {
  showPetitionContent: PropTypes.bool.isRequired,
};

export default Body;
