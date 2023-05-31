import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../contexts/users.context";
import Modal from "react-modal";
import { DivDeleteModal } from "../styles";

const customStyles = {
  content: {
    width: "45%",
    maxWidth: "450px",
    height: "auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    padding: "10px",
  },
};

export const ModalDeleteUser = () => {
  const { modalDeletIsOpen, setModalDeletIsOpen, userModID, deleteUser } =
    useContext(UserContext);

  return (
    <div>
      <Modal
        isOpen={modalDeletIsOpen}
        onRequestClose={() => setModalDeletIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <DivDeleteModal>
          <h3>Are you sure Want Remove this Client?</h3>
          <div className="div_delete_choice">
            <button
              className="delete_yes"
              onClick={() => deleteUser(userModID)}
            >
              Yes
            </button>
            <button
              className="delete_not"
              onClick={() => setModalDeletIsOpen(false)}
            >
              No
            </button>
          </div>
        </DivDeleteModal>
      </Modal>
    </div>
  );
};
