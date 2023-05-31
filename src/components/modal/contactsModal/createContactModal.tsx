import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../contexts/users.context";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { iUserRegister } from "../../../interfaces/user.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSherma } from "../../../schema/user.schema";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { DivCreateModal } from "../styles";

const customStyles = {
  content: {
    width: "45%",
    maxWidth: "550px",
    height: "300px",
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

export const ModalCreateContact = () => {
  const {
    createNewContact,
    loadUsers,
    modalContactIsOpen,
    setContactModal,
    contactUserID,
  } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iUserRegister>({
    resolver: yupResolver(contactSherma),
  });

  const submit = async (data: iUserRegister) => {
    const newData = {
      ...data,
      user: contactUserID,
    };
    createNewContact(newData);
    loadUsers();
    setContactModal(false);
    reset();
  };

  const close = () => {
    setContactModal(false);
    reset();
  };

  return (
    <div>
      <Modal
        isOpen={modalContactIsOpen}
        onRequestClose={() => setContactModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <DivCreateModal>
          <div className="header_div_modal">
            <h3>Register New Contact</h3>
            <AiOutlineCloseCircle onClick={close} />
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <label>Contact Name:</label>
            <input
              id="name"
              placeholder="type your contact complete name"
              {...register("name")}
            ></input>
            <span>{errors.name?.message}</span>
            <label>Email:</label>
            <input
              id="email"
              placeholder="Type your -e"
              {...register("email")}
            ></input>
            <span>{errors.name?.message}</span>
            <label>Contact Telephone:</label>
            <input
              id="phone"
              placeholder="999999999"
              {...register("phone")}
            ></input>
            <span>{errors.name?.message}</span>
            <button type="submit">Create</button>
          </form>
        </DivCreateModal>
      </Modal>
    </div>
  );
};
