import "./userinfo.css";
import React from "react"; // 👈 ADD THIS LINE

const Userinfo = () => {
  return (
    <div className="userinfo">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Yassine Amri</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  );
};

export default Userinfo;
