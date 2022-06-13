import "./button.styles.scss";

/*
defualt
inverted
Google sign up
 */

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inveted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
