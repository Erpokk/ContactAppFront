import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

import css from "./ContactForm.module.css";
import Button from "../Button/Button";

import { IoRadioButtonOn, IoRadioButtonOff } from "react-icons/io5";

const ContactForm = () => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    phoneNumber: Yup.string()
      .matches(
        /^\d{3}-\d{3}-\d{4}$/,
        "number number must be in the format 123-123-1234"
      )
      .required("Required"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (formData, { resetForm }) => {
    dispatch(
      addContact({
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        isFavorite: formData.isFavorite,
        contactType: formData.contactType,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        phoneNumber: "",
        email: undefined,
        isFavorite: false,
        contactType: "personal",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor="name" className={css.label}>
            Name
          </label>
          <Field className={css.cntInput} type="text" name="name" id="name" />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor="phoneNumber" className={css.label}>
            Number
          </label>
          <Field
            className={css.cntInput}
            type="phone"
            name="phoneNumber"
            id="phoneNumber"
          />
          <ErrorMessage name="phoneNumber" component="span" />
        </div>
        <div>
          <label htmlFor="email" className={css.label}>
            Email (not required)
          </label>
          <Field
            className={css.cntInput}
            type="email"
            name="email"
            id="email"
          />
          <ErrorMessage name="email" component="span" />
        </div>
        <div className={css.checkboxContainer}>
          <label htmlFor="isFavorite">Add to favorite</label>
          <Field
            className={css.check}
            type="checkbox"
            name="isFavorite"
            id="isFavorite"
          />
        </div>
        <fieldset className={css.radioGroup}>
          <legend>Contact Type</legend>
          <div className={css.radioOptions}>
            {["work", "home", "personal"].map((type) => (
              <label key={type}>
                <Field name="contactType">
                  {({ field }) => (
                    <>
                      {field.value === type ? (
                        <IoRadioButtonOn color="green" />
                      ) : (
                        <IoRadioButtonOff />
                      )}
                      <input
                        type="radio"
                        {...field}
                        value={type}
                        checked={field.value === type}
                      />
                      {type.charAt(0).toUpperCase() + type.slice(1)}{" "}
                    </>
                  )}
                </Field>
              </label>
            ))}
          </div>
        </fieldset>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
