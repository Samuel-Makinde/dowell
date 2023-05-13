import React from "react";
import { Tooltip } from "react-tooltip";
import { FaTrashAlt, FaClipboardList } from "react-icons/fa";
import { BsExclamationLg } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
const ChatIcons = () => {
  return (
    <div className="mx-3">
      <div className="d-flex gap-3">
        <small
          className="text-primary fs-5"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Customize"
        >
          <FaClipboardList />
          <Tooltip id="my-tooltip" />
        </small>
        <small
          className="text-primary fs-5"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Move to spam"
        >
          <BsExclamationLg />
          <Tooltip id="my-tooltip" />
        </small>
        <small
          className="text-primary fs-5"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Delete conversation"
        >
          <FaTrashAlt />
          <Tooltip id="my-tooltip" />
        </small>

        <small
          className="text-primary fs-5"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Mark as unread"
        >
          <CiMail />
          <Tooltip id="my-tooltip" />
        </small>
      </div>
    </div>
  );
};

export default ChatIcons;
