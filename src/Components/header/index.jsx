import React from "react";
import Logo from "../../images/logo.svg"
const index = () => {
  return (
    <>
      <div className="flex ite">
        <div className="flex justify-center mt-6 ml-9">
          <img src={Logo} alt="shortly" />
        </div>
        <div className="flex bg-red-600 justify-evenly mt-9">
          <div className="flex justify-between bg-pink-300">   
          <p className="">Features</p>
          <p>Pricing</p>
          <p>Resources</p></div>
           
        </div>
      </div>
    </>
  );
};

export default index;
