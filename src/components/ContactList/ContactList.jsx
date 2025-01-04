import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {useDispatch, useSelector} from 'react-redux';
import {
  selectFilteredContacts
} from '../../redux/contactsSlice.js';
import {deleteContact} from '../../redux/contactsOps.js';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts)
  const dispatch = useDispatch();

  return (
    <div>
      <ul className={css.list}>
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
