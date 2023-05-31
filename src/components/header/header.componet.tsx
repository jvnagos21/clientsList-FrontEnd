import { useContext } from "react";
import { UserContext } from "../../contexts/users.context";
import ReactModal from "react-modal";
import StyledHeader from "./styled";
import { IoIosSearch } from "react-icons/io";
import bank_logo from "../../assets/sakura_bank_logo.png";

export const Header = () => {
  ReactModal.setAppElement("#root");
  const { setModal, setFiltered, filtered, filterUsers } =
    useContext(UserContext);
  return (
    <StyledHeader>
      <div>
        <img
          alt="sakura_bank logo"
          className="logo_header"
          src={bank_logo}
        ></img>
        <h2 className="text_subtitle">
          🌸 Welcome to Sakura Bank Client Register 🌸
        </h2>
      </div>
      <div className="interacts_bar">
        <button className="create_client_btn" onClick={() => setModal(true)}>
          Register Client
        </button>
        <div className="search_div">
          <input
            className="search_bar"
            type="text"
            placeholder="Search Client"
            onChange={(e) => setFiltered(e.currentTarget.value)}
          />
          <IoIosSearch
            className="search_icon"
            onClick={() => filterUsers(filtered)}
          />
        </div>
      </div>
    </StyledHeader>
  );
};
