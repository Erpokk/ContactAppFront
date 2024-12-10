import css from "./Container.module.css";
import clsx from "clsx";

const Container = ({ children, page }) => {
  return <div className={clsx(css.container, css[page])}>{children}</div>;
};

export default Container;
