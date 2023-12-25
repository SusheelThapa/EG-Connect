const Button = ({ buttonText, css, handleOnClick }) => {
  return (
    <button
      className={css}
      onClick={() => {
        handleOnClick();
      }}
    >
      View Notice
    </button>
  );
};

export default Button;
