import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { iUserRegister } from "../../../interfaces/user.interface";
import { ContactContext } from "../../../contexts/contact.context";
import { UserContext } from "../../../contexts/users.context";
import { DivCreateModal } from "../styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

const customStyles = {
  content: {
    width: "45%",
    height: "300px",
    maxWidth: "550px",
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

export const ModalUpdateContact = () => {
  const { modalEditIsOpen, setModalEditIsOpen, updateContact, loadContacts } =
    useContext(ContactContext);
  const { loadUsers } = useContext(UserContext);

  const { register, handleSubmit, reset } = useForm<iUserRegister>();

  const submit = async (data: any) => {
    updateContact(data);
    loadUsers();
    loadContacts();
    setModalEditIsOpen(false);
    reset();
  };

  const close = () => {
    setModalEditIsOpen(false);
    reset();
  };

  return (
    <div>
      <Modal
        isOpen={modalEditIsOpen}
        onRequestClose={() => setModalEditIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <DivCreateModal>
          <div className="header_div_modal">
            <h3>Update Contact Data</h3>
            <AiOutlineCloseCircle onClick={close} />
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <label>Contact Name:</label>
            <input
              id="name"
              placeholder="Type new name"
              {...register("name")}
            ></input>
            <label>Email:</label>
            <input
              id="email"
              placeholder="Type new e-mail"
              {...register("email")}
            ></input>
            <label>Contact telephone:</label>
            <input
              id="phone"
              placeholder="999999999"
              {...register("phone")}
            ></input>
            <button type="submit">Update</button>
          </form>
        </DivCreateModal>
      </Modal>
    </div>
  );
};
