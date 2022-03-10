import React from "react";

function Button(props) {
  return (
    <button className="btn">
      <span className="btn_txt">{props.children}</span>
      {props.icon ? (
        <span className="btn_icon">
          <i className={`${props.icon}`}></i>
        </span>
      ) : null}
    </button>
  );
}

export default Button;
