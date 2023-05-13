import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import user from "../../../assets/user.jpg";
import ChatIcons from "./ChatIcons";
import Message from "./Message";
import ReplyChat from "./ReplyChat";
const ProfileHead = () => {
  return (
    <div className="container overflow-y-scroll  my-3 my-md-3 my-lg-0 my-xl-0 my-xxl-0">
      <div className="d-flex justify-content-between align-items-center border-bottom my-5 my-md-4 my-lg-0 my-xl-0 my-xxl-0">
        <figure className="d-flex gap-2 align-items-center">
          <img src={user} className=" image-style" />
          <small
            className="bg-success rounded"
            style={{
              position: "absolute",
              height: "10px",
              width: "10px",
              marginLeft: "2.7rem",
              marginTop: "1.9rem",
            }}
          ></small>
          <div className="">
            {/* Status active now if true show active */}
            <small className="text-primary">Active now</small>
          </div>
        </figure>
        <ChatIcons />
      </div>
      <Message />
      {/* <ReplyChat /> */}
    </div>
  );
};

export default ProfileHead;
