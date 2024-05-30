import { RiContactsLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { CiMenuKebab } from "react-icons/ci";

import ContactMenu from "../ContactMenu/ContactMenu.jsx";

import css from "./Contact.module.css";

const Contact = ({
  id,
  name,
  number,
  menuContact,
  setMenuContact,
  setRedactModal,
  setDeleteModal,
}) => {
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

      <div className={css.menuBox}>
        <button
          className={css.menuContactBtn}
          onClick={() => {
            if (!menuContact || menuContact !== id) setMenuContact(() => id);
          }}
        >
          <CiMenuKebab className={css.menuContactIcon} />
        </button>
        <ContactMenu
          id={id}
          name={name}
          number={number}
          menuContact={menuContact}
          setMenuContact={setMenuContact}
          setRedactModal={setRedactModal}
          setDeleteModal={setDeleteModal}
        />
      </div>
    </>
  );
};

export default Contact;
