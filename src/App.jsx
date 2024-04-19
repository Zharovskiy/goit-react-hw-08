import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps.js";
import {
  selectError,
  selectLoading,
  selectContacts,
} from "./redux/contactsSlice.js";

import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";

import css from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <Loader loading={loading} />
      {contacts.length !== 0 ? (
        <ContactList />
      ) : (
        <b>You have not added any contact yet</b>
      )}
      {error && <b>Oops something went wrong. Try reloading the page</b>}
    </div>
  );
};

export default App;
