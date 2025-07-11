import React from "react";
import "./addUser.css";
const AddUser = () => {
  return (
    <div className="addUser">
      <form action="">
        <input type="text" name="username" placeholder="Username" id="" />
        <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
          <img src="./avatar.png" alt="" />
          <span>Cristiano ronaldo</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  );
};

export default AddUser;
