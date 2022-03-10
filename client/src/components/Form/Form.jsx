import React from "react";
import { images } from "../../constants";

const Form = (props) => {
  return (
    <form action="" className="form">
      {props.btnPrev ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_102_1771)">
            <path
              d="M8.37605 18.7491L24.1154 34.4832C24.806 35.1721 25.925 35.1721 26.6173 34.4832C27.308 33.7943 27.308 32.6754 26.6173 31.9865L12.1264 17.5008L26.6156 3.01512C27.3062 2.32623 27.3062 1.2073 26.6156 0.516666C25.925 -0.172222 24.8043 -0.172222 24.1136 0.516666L8.3743 16.2506C7.69428 16.9324 7.69428 18.0689 8.37605 18.7491Z"
              fill="#787878"
            />
          </g>
          <defs>
            <clipPath id="clip0_102_1771">
              <rect width="35" height="35" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : null}
      <div>
        <p className="form_title">{props.title}</p>
        <p className="form_subTitle">{props.subTitle}</p>
        {props.children}
      </div>
      {props.loginSocial ? (
        <div className="form_login-with-social">
          <p>Hoặc tiếp tục bằng</p>
          <ul>
            <li>
              <img src={images.facebook} alt="facebook" />
            </li>
            <li>
              <img src={images.google} alt="google" />
            </li>
            <li>
              <img src={images.zalo} alt="zalo" />
            </li>
          </ul>
        </div>
      ) : null}
    </form>
  );
};

export default Form;
