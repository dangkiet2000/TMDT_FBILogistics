import React from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";

function FormVerifyAccount({ navigation }) {
  // const [email, setEmail] = React.useState("");
  // const [validation, setValidation] = React.useState(false);
  // const callbackFunction = (childData) => {
  //   setValidation(childData);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    const allOtp = document.querySelectorAll(".otp-item");
    let count = 0;
    allOtp.forEach((item, index, arr) => {
      item.addEventListener("keyup", (e) => {
        e.preventDefault();
        if (item.value.length === item.maxLength && count < arr.length - 1) {
          count++;
          arr[count].focus();
        } else if (item.value.length === 0 && count > 0) {
          count--;
          arr[count].focus();
        }
      });
    });
  }, []);

  return (
    <Form
      title={"nhập mã xác minh"}
      subTitle={"Nhập mã xác minh gồm 6 số vừa được gửi đến"}
      textTelephone={"0932795436"}
      btnPrev={true}
      btnPrevClick={() => navigation.previous()}
    >
      <div className="otp">
        <div className="otp-container">
          <input
            className="otp-item"
            type="tel"
            placeholder="0"
            maxLength={1}
            required={true}
          />
          <input
            className="otp-item"
            type="tel"
            placeholder="0"
            maxLength={1}
          />
          <input
            className="otp-item"
            type="tel"
            placeholder="0"
            maxLength={1}
          />
          <input
            className="otp-item"
            type="tel"
            placeholder="0"
            maxLength={1}
          />
          <input
            className="otp-item"
            type="tel"
            placeholder="0"
            maxLength={1}
          />
          <input
            className="otp-item"
            type="tel"
            placeholder="0"
            maxLength={1}
          />
        </div>
      </div>
      <Button
        // validation={validation}
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Xác Minh
      </Button>
    </Form>
  );
}

export default FormVerifyAccount;
