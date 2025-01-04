import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {useDispatch, useSelector} from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";
import {deleteContact} from '../../redux/contacts/operations.js';
import Loader from '../Loader/Loader.jsx';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts)
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <ul className={css.list}>
        {isLoading && !error && <Loader />}
        {error && <p>Oops, something went wrong! Please, try again</p>}
        {contacts.map((user) => {
          return (
            <li
              className={css.listItem}
              key={user.id}
            >
              <Contact {...user} />
              <button
                className={css.btn}
                type="button"
                onClick={() =>
                  dispatch(deleteContact(user.id))
                }
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
