import React from 'react'
import auth from "./auth";
import './Login.css'

const Login = props => {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <button
        onClick={() => {
          auth.login(() => {
            props.history.push("/categories");
          });
        }}>
          LOGIN TO SPOTIFY</button>
    </div>
    )
}

export default Login
