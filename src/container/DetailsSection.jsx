import React from "react";
import user from "../assets/user.jpg";
import AboutDetails from "./Details/AboutDetails";
import DetailsSectionButton from "./DetailsSectionButton";
const DetailsSection = ({ title, about }) => {
  return (
    <div className="d-none d-md-none d-lg-block d-xl-block d-xxl-block">
      <div
        className="card"
        style={{ width: "18rem", backgroundColor: "#e9eff3" }}
      >
        <div className="mx-4">
          <div className="d-flex gap-5 mt-4 ">
            <figure className="d-flex gap-2">
              <img src={user} className=" image-style" />
              <div className="">
                <h4 className="body fw-bold" style={{ fontSize: "18px" }}>
                  {title}
                </h4>
                <a href="" className="fw-bold" style={{ fontSize: "14px" }}>
                  View Profile
                </a>
              </div>
            </figure>
            <DetailsSectionButton />
          </div>
          <div
            className="mx-2 my-3"
            style={{ borderBottom: "1px solid #7A7A7A" }}
          ></div>
          <div className=""></div>
          {/* DETAILS */}
          <AboutDetails />
        </div>
      </div>
    </div>
  );
};
DetailsSection.defaultProps = {
  title: "John Doe",
  about: "About",
};

export default DetailsSection;
