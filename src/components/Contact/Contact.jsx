import { deleteContact } from "../../redux/contacts/operation.js";
import { useDispatch } from "react-redux";

import { RiContactsLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { GoTrash } from "react-icons/go";

import css from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(deleteContact(id));

  return (
    <>
      <div className={css.leftBox}>
        <p className={css.text}>
          <RiContactsLine className={css.icon} />
          {name}
        </p>
        <p className={css.text}>
          <FiPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button onClick={onDeleteContact} className={css.removeBtn}>
        <GoTrash className={css.removeIcon} />
      </button>
    </>
  );
};

export default Contact;
