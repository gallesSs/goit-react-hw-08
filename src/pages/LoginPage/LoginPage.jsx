import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={css.loginDiv}>
      <PageTitle>Please, log in</PageTitle>
      <LoginForm />
      <p>
        or <Link to="/register">register</Link>
      </p>
    </div>
  );
};

export default LoginPage;