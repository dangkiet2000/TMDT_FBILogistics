import React from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";

function FormForgetPass({ navigation }) {
  const [pass, setPass] = React.useState("");

  const [validation, setValidation] = React.useState(false);
  const callbackFunction = (childData) => {
    setValidation(childData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(validation);
  return (
    <Form
      title={"Quên mật khẩu"}
      subTitle={"Vui lòng nhập thông  tin tài khoản để lấy lại mật khẩu"}
      btnPrev={true}
      btnPrevClick={() => navigation.previous()}
    >
      <Input
        data={pass}
        setData={setPass}
        email={true}
        parentCallback={(validation) => callbackFunction(validation)}
      />
      <Button onClick={handleSubmit}>Xác Minh</Button>
    </Form>
  );
}

export default FormForgetPass;
