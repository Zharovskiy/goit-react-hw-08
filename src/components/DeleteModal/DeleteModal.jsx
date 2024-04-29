import { deleteContact } from "../../redux/contacts/operation.js";
import { selectModal } from "../../redux/contacts/selectors.js";
import { toggleModal } from "../../redux/contacts/slice.js";
import { useSelector, useDispatch } from "react-redux";

import Modal from "react-modal";

import css from "./DeleteModal.module.css";

const DeleteModal = () => {
  const isOpenId = useSelector(selectModal);
  const dispatch = useDispatch();
  return (
    <Modal
      isOpen={Boolean(isOpenId)}
      overlayClassName="ReactModal__Overlay"
      className="ReactModal__Content"
      closeTimeoutMS={300}
      onRequestClose={() => {
        dispatch(toggleModal(null));
      }}
      ariaHideApp={false}
    >
      <p>Do you really want to delete the contact?</p>
      <div className={css.boxBtn}>
        <button
          className={css.modalBtn}
          onClick={() => {
            dispatch(toggleModal(null));
            dispatch(deleteContact(isOpenId));
          }}
        >
          Yes
        </button>
        <button
          className={css.modalBtn}
          onClick={() => {
            dispatch(toggleModal(null));
          }}
        >
          No
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
