import React from "react";
import ChatSection from "./ChatSection";
import DetailsSection from "./DetailsSection";
const Container = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-around my-4">
        <ChatSection />
        <div className="d-hidden d-md-block" style={{ marginLeft: "2rem" }}>
          <DetailsSection />
        </div>
      </div>
    </div>
  );
};

export default Container;
