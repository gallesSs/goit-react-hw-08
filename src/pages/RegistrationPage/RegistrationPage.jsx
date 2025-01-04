import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={css.registrationDiv}>
      <PageTitle>Register your account</PageTitle>
      <RegistrationForm />
    </div>
  );
}

export default RegistrationPage;