import React from "react";

function Button(props) {
  // console.log(props.validation);
  return (
    <button
      className="btn"
      onClick={props.onClick}
      disabled={!props.validation}
    >
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
