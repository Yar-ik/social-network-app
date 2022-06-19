/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <header>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqT0_Sc0Tf1G19MFXzWiTB7efQj5uDORpUQ&usqp=CAU"
        alt="#"
      />
      <div className={"login-block"}>
        {props.isAuth ? (
          <div>
            {" "}
            {props.login} - <button onClick={props.logout}>Log out</button>{" "}
          </div>
        ) : (
          <NavLink to={"login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
