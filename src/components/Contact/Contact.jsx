import { useDispatch, useSelector } from "react-redux";
import {
  isOpenMenu,
  idForDelete,
  isOpenModal,
} from "../../redux/contacts/slice";
import { selectMenu, selectIdForDelete } from "../../redux/contacts/selectors";
import clsx from "clsx";

import { RiContactsLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { GoPencil } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";

import css from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const isOpen = useSelector(selectMenu);
  const idMenu = useSelector(selectIdForDelete);
  const dispatch = useDispatch();

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
            dispatch(isOpenMenu(!isOpen));
            dispatch(idForDelete(id));
          }}
        >
          <CiMenuKebab className={css.menuContactIcon} />
        </button>
        <div
          className={clsx(css.menu, {
            [css.active]: isOpen && idMenu === id,
          })}
        >
          <ul>
            <li className={css.listBtn}>
              <button className={css.menuBtn}>
                <GoPencil className={css.menuIcon} />
                Change
              </button>
            </li>
            <li className={css.listBtn}>
              <button
                className={css.menuBtn}
                onClick={() => {
                  dispatch(isOpenMenu(false));
                  dispatch(isOpenModal(true));
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
