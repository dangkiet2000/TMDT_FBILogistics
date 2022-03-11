import React from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";

function FormLogin({ navigation }) {
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
      title={"xin chào"}
      subTitle={"Đăng nhập hoặc Tạo tài khoản"}
      loginSocial={true}
    >
      <Input
        data={email}
        setData={setEmail}
        telephone={true}
        parentCallback={(validation) => callbackFunction(validation)}
      />
      <Button validation={validation}>Đăng Nhập</Button>
      <p className="form_text">
        Chưa có tài khoản?{" "}
        <a
          onClick={(e) => {
            handleSubmit(e);
            navigation.next();
          }}
        >
          Tạo tài khoản
        </a>
        <br />
        <a
          onClick={(e) => {
            handleSubmit(e);
            navigation.go("loginEmail");
          }}
        >
          Đặng nhập bằng email
        </a>
      </p>
    </Form>
  );
}

export default FormLogin;
