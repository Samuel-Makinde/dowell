import React from "react";
import {
  FaPhone,
  FaBriefcase,
  FaGraduationCap,
  FaLocationArrow,
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BiWorld, BiLike } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
const AboutDetails = ({ title, ux }) => {
  const data = [
    {
      phone: "Phone Number",
      email: "Email",
      web: "Website",
    },
  ];
  return (
    <div className="container" style={{ marginBottom: "5rem" }}>
      <div className="lh-lg">
        <h5 className="mb-4 fs-6 fw-bold">{title}</h5>
        <main>
          <h6>Added Details</h6>
          <div className="">
            <ul>
              <li className="">
                <small style={{ color: "#54595F" }}>
                  <FaPhone /> + Phone Number
                </small>
              </li>
              <li>
                <small style={{ color: "#54595F" }}>
                  <CiMail /> + Email
                </small>
              </li>
              <li>
                <small style={{ color: "#54595F" }}>
                  <BiWorld /> + Website
                </small>
              </li>
              <li>
                <small style={{ color: "#54595F" }}>
                  <AiFillHome /> + Address
                </small>
              </li>
            </ul>
          </div>
        </main>
      </div>
      <div className="lh-lg">
        <h5 className="fs-6 fw-bold">{ux}</h5>
        <main>
          <h6>Added Details</h6>
          <div className="">
            <ul>
              <li>
                <small style={{ color: "#54595F" }}>
                  <BiLike /> + Liked Since Jan 18,2023
                </small>
                {/* date from the api */}
              </li>
              <li>
                <small style={{ color: "#54595F" }}>
                  <FaBriefcase /> + Works at Graphic Designer
                </small>
              </li>
              <li>
                <small style={{ color: "#54595F" }}>
                  <FaGraduationCap /> + Studied at Harvard University Cambridge
                </small>
                {/* Place of work from the api */}
              </li>
              <li>
                <small style={{ color: "#54595F" }}>
                  <FaLocationArrow /> + From Cambridge, USA
                </small>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AboutDetails;

AboutDetails.defaultProps = {
  title: "About",
  ux: "UX Living Lab Profile",
};
