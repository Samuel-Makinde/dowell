import React from "react";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { CgCloseR } from "react-icons/cg";
const DetailsSectionButton = () => {
  return (
    <div>
      <div className="d-flex gap-3">
        <MdOutlineMoreHoriz />
        <CgCloseR />
      </div>
    </div>
  );
};

export default DetailsSectionButton;
