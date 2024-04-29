import { useState } from "react";
import clsx from "clsx";

import { RiContactsLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { GoPencil } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";

import css from "./Contact.module.css";

const Contact = ({ id, name, number, setRedactModal, setDeleteModal }) => {
  const [menuContact, setMenuContact] = useState(null);
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
            if (!menuContact) {
              setMenuContact(id);
            } else {
              setMenuContact(null);
            }
          }}
        >
          <CiMenuKebab className={css.menuContactIcon} />
        </button>
        <div
          className={clsx(css.menu, {
            [css.active]: menuContact === id,
          })}
        >
          <ul>
            <li className={css.listBtn}>
              <button
                className={css.menuBtn}
                onClick={() => {
                  setMenuContact(null);
                  setRedactModal({ id, name, number });
                }}
              >
                <GoPencil className={css.menuIcon} />
                Change
              </button>
            </li>
            <li className={css.listBtn}>
              <button
                className={css.menuBtn}
                onClick={() => {
                  setMenuContact(null);
                  setDeleteModal(id);
                }}
              >
                <GoTrash className={css.menuIcon} />
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
