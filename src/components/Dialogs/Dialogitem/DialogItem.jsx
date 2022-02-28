import React from "react";
import "./../Dialogs.css";
import { Link } from "react-router-dom";

const DialogItem = (props) => {
  let path = String(props.id);

  return (
    <div className="dialog">
      <Link to={path}>{props.name}</Link>
    </div>
  );
};

export default DialogItem;
