import React from "react";
import Buttons from "./Buttons";
import HeaderButtons from "./HeaderButtons";

const ChatHeader = ({ title, caption }) => {
  return (
    <div className="container">
      <div className=" d-flex flex-column flex-md-column flex-lg-row flex-xl-row flex-xxl-row justify-content-between my-3 ">
        <header>
          <h1 className="header fs-4 fw-bold">{title}</h1>
          <p className="fw-medium  Header-font">{caption}</p>
        </header>
        <HeaderButtons />
      </div>
      <Buttons />
      <div
        className=" my-4"
        style={{ borderBottom: "1px solid #7A7A7A" }}
      ></div>
    </div>
  );
};

export default ChatHeader;
ChatHeader.defaultProps = {
  title: "Chat Response",
  caption: "Respond to messages, set up automations and more",
};
