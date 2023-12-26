import PropTypes from "prop-types";

/**
 * @component Button
 * @description A reusable and customizable button component.
 *
 * @param {Object} props - The props for the Button component.
 * @param {string} props.buttonText - The text to be displayed on the button.
 * @param {string} props.css - The CSS classes for styling the button.
 * @param {Function} props.handleOnClick - The function to be called when the button is clicked.
 *
 * @returns {JSX.Element} - A customizable button element.
 */
const Button = ({ buttonText, css, handleOnClick }) => {
  return (
    <button
      className={css}
      onClick={(e) => {
        handleOnClick(e);
      }}
    >
      {buttonText}
    </button>
  );
};

// PropTypes validation
Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  css: PropTypes.string,
  handleOnClick: PropTypes.func.isRequired,
};
export default Button;
