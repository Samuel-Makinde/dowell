import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const click = (e) => {
    setOpen(!open);
  };
  return (
    <div className="">
      <nav className="container border-bottom ">
        <div className="d-flex justify-content-between align-items-center mx-3 my-4">
          <a href="" className="text-black fs-3 fb-bold">
            UX Living Lab Chat
          </a>
          <div className="d-block d-md-block d-lg-none d-xl-none d-xxl-none">
            {open ? (
              <button onClick={click} className="btn text-primary">
                <IoClose className="fs-4" />
              </button>
            ) : (
              <button onClick={click} className="btn text-primary">
                <BiMenu className="fs-4" />
              </button>
            )}
          </div>
          <ul className="d-none gap-4 d-none d-md-none d-lg-flex d-xl-flex d-xxl-flex fw-light">
            <a>chatresponse</a>
            <a>Glossary</a>
            <a>Home</a>
          </ul>
        </div>
        {open ? (
          <ul className={open ? "open" : "not-open"}>
            <a className="text-primary text-decoration-none">chatresponse</a>
            <a>Glossary</a>
            <a>Home</a>
          </ul>
        ) : (
          <h1></h1>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
