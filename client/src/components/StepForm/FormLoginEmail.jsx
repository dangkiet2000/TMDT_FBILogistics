import React from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";

function FormLoginEmail({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [validation, setValidation] = React.useState(false);
  const callbackFunction = (childData) => {
    setValidation(childData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Form
      title={"Đăng nhập bằng email"}
      subTitle={"Nhập email và mật khẩu"}
      btnPrev={true}
      btnPrevClick={() => navigation.go("login")}
    >
      <Input
        data={email}
        setData={setEmail}
        email={true}
        parentCallback={(validation) => callbackFunction(validation)}
      />
      <Input
        data={email}
        setData={setEmail}
        password={true}
        parentCallback={(validation) => callbackFunction(validation)}
      />
      <Button validation={validation}>Tiếp Tục</Button>
      <p
        className="text--forget-pass"
        onClick={(e) => {
          handleSubmit(e);
          navigation.go("forgetPassword");
        }}
      >
        Quên mật khẩu
      </p>
    </Form>
  );
}

export default FormLoginEmail;
