import { Formik, Form, Field } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import {addContact} from '../../redux/contactsOps.js';
import {nanoid} from 'nanoid';

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    number: ''
  }

  const onSubmit = (values) => {
    const profileObject = {
      name: values.name,
      number: values.number,
      id: nanoid()
    };
    dispatch(addContact(profileObject))
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });



  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.container}>
          <label className={css.label}>
            <span>Name</span>
            <Field
              className={css.input}
              type="text"
              name="name"
              required
            />
            <ErrorMessage
              className={css.ErrorMessage}
              name="name"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Number</span>
            <Field
              className={css.input}
              type="text"
              name="number"
              required
            />
            <ErrorMessage
              className={css.ErrorMessage}
              name="number"
              component="span"
            />
          </label>
          <button
            className={css.submitBtn}
            type="submit"
          >
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
