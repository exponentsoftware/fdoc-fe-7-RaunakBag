import React from "react";
import auth from "./auth";
import "./Login.css";
import Categories from "./../Categories/Categories";

const Logout = props => {
  return (
    <div className="login">
         <Categories />
      {/* <h1>App Layout</h1> */}
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/categories");
          });
        }}
      >
        LOGOUT FROM SPOTIFY
      </button>
    </div>
  );
}

export default Logout;
