
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/Searchbox/SearchBox";
import ContactForm from "./components/Contactform/ContactForm";
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {fetchContacts} from './redux/contactsOps.js';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm
        />
        <SearchBox
        />
        <ContactList
        />
      </div>
    </>
  );
}

export default App;
