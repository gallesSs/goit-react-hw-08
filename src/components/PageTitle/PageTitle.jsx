import css from "./PageTitle.module.css";

const PageTitle = ({children}) => {
  return <h1 className={css.mainTitle}>{children}</h1>;
};

export default PageTitle;