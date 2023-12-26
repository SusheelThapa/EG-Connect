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

export default Button;
