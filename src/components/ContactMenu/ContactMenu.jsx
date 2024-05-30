import clsx from "clsx";

import { GoTrash } from "react-icons/go";
import { GoPencil } from "react-icons/go";

import css from "./ContactMenu.module.css";

const ContactMenu = ({
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
      <div
        className={clsx(css.backdropMenu, {
          [css.activeBackdropMenu]: menuContact,
        })}
        onClick={() => {
          setMenuContact(() => null);
        }}
      ></div>

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
                setMenuContact(() => null);
                setRedactModal({ id, name, number });
              }}
            >
              <GoPencil className={css.menuIcon} />
              Edit
            </button>
          </li>
          <li className={css.listBtn}>
            <button
              className={css.menuBtn}
              onClick={() => {
                setMenuContact(() => null);
                setDeleteModal(() => id);
              }}
            >
              <GoTrash className={css.menuIcon} />
              Delete
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactMenu;
