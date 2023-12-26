import PropTypes from "prop-types";

import PetitionContent from "./Petition";
import PolicyContent from "./Policy";

/**
 * @function Body
 * @description Component for the main body of the application.
 * It conditionally renders either the Petition or Policy content based on a prop.
 *
 * @param {Object} props - The props for the Body component.
 * @param {boolean} props.showPetitionContent - A boolean indicating whether to show petition content.
 *
 * @returns {JSX.Element} - The main body of the application with either Petition or Policy content.
 */
const Body = ({ showPetitionContent }) => {
  return (
    <div className="p-4">
      {showPetitionContent ? <PetitionContent /> : <PolicyContent />}
    </div>
  );
};

// PropTypes validation to ensure the showPetitionContent prop is a boolean
Body.propTypes = {
  showPetitionContent: PropTypes.bool.isRequired,
};

export default Body;
