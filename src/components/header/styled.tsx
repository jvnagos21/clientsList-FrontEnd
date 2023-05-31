import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border: 1px;
  border-color: #ffb7c5;
  border-radius: 18px 18px 0px 0px;
  width: 80vw;
  max-width: 850px;
  height: 18vh;
  max-height: 190px;
  min-height: 150px;
  padding-bottom: 17px;

  .logo_header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    padding-left: 23vw;
    padding-top: 10px;
  }

  .interacts_bar {
    display: flex;
    width: 85%;
    align-items: center;
    justify-content: space-between;
  }

  .search_div {
    display: flex;
    align-items: center;
  }

  .create_client_btn {
    background-color: #ffb7c5;
    color: #fff;
    padding: 5px 8px;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
  }

  .create_client_btn:hover {
    background-color: #e29caa;
    color: #ffffffcc;
    transition: 0.4s;
  }

  .search_bar {
    border: 0px;
    border-radius: 5px 0px 0px 5px;
    padding: 2px 5px;
  }

  .search_icon {
    cursor: pointer;
    padding: 2px;
    background-color: #ffb7c5;
    border-radius: 0px 5px 5px 0px;
    color: #ffff;
  }

  .search_icon:hover {
    background-color: #e29caa;
    color: #fff;
  }
`;

export default StyledHeader;
