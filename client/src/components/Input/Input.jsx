import React, { useEffect, useState } from "react";

function Input(props) {
  const inputRef = React.createRef(null);
  const smallRef = React.createRef(null);
  const eye = React.createRef(null);
  const eyeClose = React.createRef(null);

  const {
    data,
    setData,
    rePass,
    setRePass,
    pass,
    setPass,
    email,
    password,
    telephone,
    telephoneAndEmail,
    rePassword,
  } = props;

  const [validation, setValidation] = useState(false);

  // check telephone validation
  const telephoneValidation = () => {
    const regex = /^\+?[0-9]{9}$/g;
    if (regex.test(data)) {
      inputRef.current.classList.remove("input_error");
      inputRef.current.classList.add("input_validation");
      smallRef.current.classList.remove("active");
      setValidation(true);
    } else {
      inputRef.current.classList.add("input_error");
      inputRef.current.classList.remove("input_validation");
      smallRef.current.classList.add("active");
      setValidation(false);
    }
  };

  // check email validation
  const emailValidation = () => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/g;
    if (regex.test(data)) {
      inputRef.current.classList.remove("input_error");
      inputRef.current.classList.add("input_validation");
      smallRef.current.classList.remove("active");
      setValidation(true);
    } else {
      inputRef.current.classList.add("input_error");
      inputRef.current.classList.remove("input_validation");
      smallRef.current.classList.add("active");
      setValidation(false);
    }
  };

  //check email and telephone validation
  const telephoneAndEmailValidation = () => {
    const regex = /^\+?[0-9]{9}$/g;
    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/g;
    if (regex.test(data) || regexEmail.test(data)) {
      inputRef.current.classList.remove("input_error");
      inputRef.current.classList.add("input_validation");
      smallRef.current.classList.remove("active");
      setValidation(true);
    } else {
      inputRef.current.classList.add("input_error");
      inputRef.current.classList.remove("input_validation");
      smallRef.current.classList.add("active");
      setValidation(false);
    }
  };

  //check password validation
  const passwordValidation = () => {
    console.log(pass);
    const regex =
      // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
      /^\+?[0-9]{9}$/g;
    if (regex.test(pass)) {
      inputRef.current.classList.remove("input_error");
      inputRef.current.classList.add("input_validation");
      smallRef.current.classList.remove("active");
      setValidation(true);
    } else {
      inputRef.current.classList.add("input_error");
      inputRef.current.classList.remove("input_validation");
      smallRef.current.classList.add("active");
      setValidation(false);
    }
  };

  const test = rePass;
  //check rePassword validation
  const rePasswordValidation = () => {
    if (test === pass) {
      // console.log(rePass, pass);
      inputRef.current.classList.remove("input_error");
      inputRef.current.classList.add("input_validation");
      smallRef.current.classList.remove("active");
      setValidation(true);
    } else {
      // console.log(rePass, pass);
      inputRef.current.classList.add("input_error");
      inputRef.current.classList.remove("input_validation");
      smallRef.current.classList.add("active");
      setValidation(false);
    }
  };

  const showPass = () => {
    inputRef.current.setAttribute("type", "text");
    eye.current.style.display = "none";
    eyeClose.current.style.display = "block";
  };

  const hidePass = () => {
    inputRef.current.setAttribute("type", "password");
    eye.current.style.display = "block";
    eyeClose.current.style.display = "none";
  };

  const sendData = () => {
    props.parentCallback(validation);
  };

  useEffect(() => {
    sendData();
  }, [validation]);

  return (
    <>
      {telephone ? (
        <input
          ref={inputRef}
          type="text"
          placeholder={props.placeholder}
          // className={`input ${validation ? "input_validation" : "input_error"}`}
          className="input"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
            telephoneValidation();
          }}
          required={true}
        />
      ) : null}
      {email ? (
        <input
          ref={inputRef}
          type="text"
          placeholder={props.placeholder}
          // className={`input ${validation ? "input_validation" : "input_error"}`}
          className="input"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
            emailValidation();
          }}
          required={true}
        />
      ) : null}
      {telephoneAndEmail ? (
        <input
          ref={inputRef}
          type="text"
          placeholder={props.placeholder}
          // className={`input ${validation ? "input_validation" : "input_error"}`}
          className="input"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
            telephoneAndEmailValidation();
          }}
          required={true}
        />
      ) : null}
      {password ? (
        <div className="field">
          <input
            ref={inputRef}
            type="password"
            placeholder={props.placeholder}
            // className={`input ${validation ? "input_validation" : "input_error"}`}
            className="input"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
              passwordValidation();
            }}
            required={true}
          />
          <svg
            ref={eye}
            width="25"
            height="25"
            viewBox="0 0 36 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="field_eye"
            onClick={() => showPass()}
          >
            <path
              d="M35.7825 17.5875C32.3931 10.9744 25.6831 6.5 18 6.5C10.3168 6.5 3.60497 10.9775 0.217466 17.5881C0.074492 17.8709 0 18.1834 0 18.5003C0 18.8172 0.074492 19.1297 0.217466 19.4125C3.60684 26.0256 10.3168 30.5 18 30.5C25.6831 30.5 32.395 26.0225 35.7825 19.4119C35.9254 19.1291 35.9999 18.8166 35.9999 18.4997C35.9999 18.1828 35.9254 17.8703 35.7825 17.5875ZM18 27.5C16.2199 27.5 14.4799 26.9722 12.9998 25.9832C11.5198 24.9943 10.3662 23.5887 9.68505 21.9441C9.00386 20.2996 8.82563 18.49 9.1729 16.7442C9.52017 14.9984 10.3773 13.3947 11.636 12.136C12.8947 10.8774 14.4983 10.0202 16.2442 9.67293C17.99 9.32567 19.7996 9.5039 21.4441 10.1851C23.0887 10.8663 24.4943 12.0198 25.4832 13.4999C26.4721 14.9799 27 16.72 27 18.5C27.0005 19.6821 26.7681 20.8526 26.3161 21.9448C25.864 23.037 25.2011 24.0294 24.3652 24.8652C23.5294 25.7011 22.537 26.364 21.4448 26.8161C20.3526 27.2682 19.182 27.5006 18 27.5ZM18 12.5C17.4644 12.5075 16.9323 12.5872 16.4181 12.7369C16.842 13.3129 17.0454 14.0218 16.9914 14.735C16.9375 15.4481 16.6297 16.1183 16.124 16.6241C15.6183 17.1298 14.9481 17.4375 14.2349 17.4915C13.5218 17.5454 12.8129 17.342 12.2368 16.9181C11.9088 18.1266 11.968 19.4075 12.4061 20.5806C12.8443 21.7537 13.6392 22.7599 14.6791 23.4575C15.719 24.1551 16.9515 24.509 18.2031 24.4695C19.4547 24.43 20.6623 23.9989 21.6561 23.2371C22.6499 22.4752 23.3798 21.4209 23.743 20.2225C24.1062 19.0241 24.0844 17.742 23.6808 16.5566C23.2771 15.3712 22.5119 14.3423 21.4929 13.6146C20.4738 12.8869 19.2522 12.4971 18 12.5Z"
              fill="black"
            />
          </svg>
          <svg
            ref={eyeClose}
            width="25"
            height="25"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="field_eye-close"
            onClick={() => hidePass()}
          >
            <path
              d="M17.9998 28.1249C13.7333 28.1249 10.2795 23.9969 9.96172 18.7657L4.06112 13.0655C3.28543 14.2819 2.57162 15.5679 1.99562 16.9742C1.86695 17.2923 1.7999 17.6438 1.7999 18.0004C1.7999 18.3569 1.86695 18.7084 1.99562 19.0266C5.04605 26.4662 11.085 31.4999 17.9998 31.4999C19.5135 31.4999 20.9738 31.2186 22.3811 30.7644L19.4623 27.9414C18.9803 28.0578 18.4908 28.1192 17.9998 28.1249ZM35.6521 32.21L29.4337 26.2026C31.3227 24.2127 32.8763 21.7731 34.004 19.0258C34.1327 18.7077 34.1997 18.3562 34.1997 17.9996C34.1997 17.6431 34.1327 17.2916 34.004 16.9734C30.9536 9.53376 24.9146 4.50014 17.9998 4.50014C15.1038 4.50452 12.2548 5.41586 9.7131 7.15089L2.557 0.237135C2.46368 0.146368 2.35697 0.0794754 2.24296 0.0402799C2.12895 0.00108441 2.00988 -0.00964574 1.89256 0.00870265C1.77523 0.027051 1.66195 0.0741183 1.55918 0.147215C1.45641 0.220311 1.36618 0.318004 1.29362 0.434711L0.18944 2.21149C0.0429649 2.44702 -0.0226698 2.74564 0.00697167 3.04165C0.0366131 3.33767 0.159103 3.60685 0.347502 3.78999L33.4426 35.7629C33.536 35.8536 33.6427 35.9205 33.7567 35.9597C33.8707 35.9989 33.9898 36.0096 34.1071 35.9913C34.2244 35.9729 34.3377 35.9259 34.4405 35.8528C34.5432 35.7797 34.6335 35.682 34.706 35.5653L35.8108 33.7885C35.9572 33.5529 36.0227 33.2542 35.993 32.9582C35.9632 32.6622 35.8406 32.393 35.6521 32.21ZM25.3179 22.2257L23.1073 20.0897C23.2935 19.4171 23.3922 18.7116 23.3998 18C23.4108 16.9582 23.2261 15.9276 22.8607 14.9912C22.4952 14.0547 21.9592 13.2385 21.2956 12.6079C20.632 11.9774 19.8593 11.5502 19.0397 11.3607C18.2201 11.1712 17.3763 11.2245 16.5761 11.5166C16.9153 12.0911 17.0988 12.786 17.0998 13.5C17.0914 13.7377 17.0624 13.9734 17.0132 14.2032L12.8727 10.2031C14.3109 8.70071 16.1254 7.87683 17.9998 7.8751C19.0637 7.87436 20.1172 8.13575 21.1003 8.64431C22.0833 9.15287 22.9764 9.89864 23.7287 10.839C24.481 11.7793 25.0776 12.8958 25.4844 14.1245C25.8913 15.3532 26.1004 16.6702 26.0998 18C26.0998 19.5208 25.8022 20.9383 25.3179 22.2264V22.2257Z"
              fill="black"
            />
          </svg>
        </div>
      ) : null}
      {rePassword ? (
        <input
          ref={inputRef}
          type="text"
          placeholder={props.placeholder}
          className="input"
          value={rePass}
          onChange={(e) => {
            setRePass(e.target.value);
            rePasswordValidation();
          }}
          required={true}
        />
      ) : null}
      <small ref={smallRef}>
        Nhập {props.placeholder} không đúng định dạng
      </small>
    </>
  );
}

export default Input;
