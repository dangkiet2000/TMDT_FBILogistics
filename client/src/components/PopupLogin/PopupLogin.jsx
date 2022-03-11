import React, { useState } from "react";
import { useStep } from "react-hooks-helper";
import FormCreateAccount from "../StepForm/FormCreateAccount";
import FormCreatePass from "../StepForm/FormCreatePass";
import FormForgetPass from "../StepForm/FormForgetPass";
import FormLogin from "../StepForm/FormLogin";
import FormLoginEmail from "../StepForm/FormLoginEmail";
import FormVerifyAccount from "../StepForm/FormVerifyAccount";

// const defaultData = {
//   email: "",
//   password: "",
// };

const steps = [
  { id: "login" },
  { id: "createAccount" },
  { id: "createPassword" },
  { id: "verifyEmail" },
  { id: "loginEmail" },
  { id: "forgetPassword" },
];

function PopupLogin() {
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  // const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
    // onStepChange: (step) => {
    //   console.log(step);
    // },
  });

  const props = { navigation };

  switch (step.id) {
    case "login":
      return <FormLogin {...props} />;
    case "createAccount":
      return <FormCreateAccount {...props} />;
    case "createPassword":
      return <FormCreatePass {...props} />;
    case "forgetPassword":
      return <FormForgetPass {...props} />;
    case "loginEmail":
      return <FormLoginEmail {...props} />;
    case "verifyEmail":
      return <FormVerifyAccount {...props} />;
    default:
      break;
  }

  // return (
  //   <>
  //     <input type="checkbox" className="close-overplay" id="toggle" hidden />
  //     <label className="overplay" htmlFor="toggle"></label>
  //     <div className="wrapper">{/* <FormLogin /> */}</div>
  //   </>
  // );
}

export default PopupLogin;
