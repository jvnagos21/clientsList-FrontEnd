import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../contexts/users.context";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { iUserRegister } from "../../../interfaces/user.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSherma } from "../../../schema/user.schema";
import { DivCreateModal } from "../styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

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

export const ModalCreateUser = () => {
  const { modalIsOpen, setModal, createNewUser, loadUsers } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iUserRegister>({
    resolver: yupResolver(userSherma),
  });

  const submit = (data: any) => {
    createNewUser(data);
    setModal(false);
    loadUsers();
    reset();
  };

  const close = () => {
    setModal(false);
    reset();
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <DivCreateModal>
          <div className="header_div_modal">
            <h3>Register New Client</h3>
            <AiOutlineCloseCircle onClick={close} />
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <label>Name:</label>
            <input
              id="name"
              placeholder="type complete name"
              {...register("name")}
            ></input>
            <span>{errors.name?.message}</span>
            <label>Email:</label>
            <input
              id="email"
              placeholder="type e-mail"
              {...register("email")}
            ></input>
            <span>{errors.email?.message}</span>
            <label>Client telephone:</label>
            <input
              id="phone"
              placeholder="999999999"
              {...register("phone")}
            ></input>
            <span>{errors.phone?.message}</span>
            <button type="submit">Register</button>
          </form>
        </DivCreateModal>
      </Modal>
    </div>
  );
};
