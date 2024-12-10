import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";
import Button from "../Button/Button";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (formData, { resetForm }) => {
    dispatch(
      register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
    );

    resetForm();
  };
  // Code
  // Code
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label htmlFor="name" className={css.label}>
          Name
        </label>
        <Field type="text" name="name" id="name" className={css.regInput} />
        <ErrorMessage name="name" component="span" />

        <label htmlFor="email" className={css.label}>
          Email
        </label>
        <Field type="email" name="email" id="email" className={css.regInput} />
        <ErrorMessage name="email" component="span" />

        <label htmlFor="password" className={css.label}>
          Password
        </label>
        <Field
          type="password"
          name="password"
          id="password"
          className={css.regInput}
        />
        <ErrorMessage name="password" component="span" />

        <Button type={"submit"}>Register</Button>
      </Form>
    </Formik>
  );
};
