import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors.js";

import Contact from "../Contact/Contact.jsx";

import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={css.contactCard} key={id}>
              <Contact id={id} name={name} number={number} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
