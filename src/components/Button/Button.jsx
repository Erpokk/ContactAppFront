import css from "./Button.module.css";

const Button = ({ type, children, onClick }) => {
  return (
    <button type={type} className={css.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
