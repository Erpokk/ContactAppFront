import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import Button from "../Button/Button";
import css from "./LoginForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (formData, { resetForm }) => {
    dispatch(
      logIn({
        email: formData.email,
        password: formData.password,
      })
    )
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label htmlFor="email" className={css.label}>
            Email
          </label>
          <Field
            type="email"
            name="email"
            id="email"
            className={css.lgnInput}
          />
          <ErrorMessage name="email" component="span" />
          <label htmlFor="password" className={css.label}>
            Password
          </label>
          <Field
            type="password"
            name="password"
            id="password"
            className={css.lgnInput}
          />
          <ErrorMessage name="pass" component="span" />
          <Button type={"submit"}>Login</Button>
        </Form>
      </Formik>
    </>
  );
};
