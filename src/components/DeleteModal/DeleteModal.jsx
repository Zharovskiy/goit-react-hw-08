import { isOpenModal } from "../../redux/contacts/slice.js";
import { deleteContact } from "../../redux/contacts/operation.js";
import {
  selectModal,
  selectIdForDelete,
} from "../../redux/contacts/selectors.js";
import { useSelector, useDispatch } from "react-redux";

import Modal from "react-modal";

import css from "./DeleteModal.module.css";

const DeleteModal = () => {
  const isOpen = useSelector(selectModal);
  const id = useSelector(selectIdForDelete);
  const dispatch = useDispatch();
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={css.ReactModal__Overlay}
      className={css.ReactModal__Content}
      closeTimeoutMS={300}
      onRequestClose={() => {
        dispatch(isOpenModal(false));
      }}
      ariaHideApp={false}
    >
      <p>Do you really want to delete the contact?</p>
      <div className={css.boxBtn}>
        <button
          className={css.modalBtn}
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          Yes
        </button>
        <button
          className={css.modalBtn}
          onClick={() => {
            dispatch(isOpenModal(false));
          }}
        >
          No
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
