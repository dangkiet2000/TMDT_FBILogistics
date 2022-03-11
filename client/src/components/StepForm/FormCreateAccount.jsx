import React from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";

function FormCreateAccount({ navigation }) {
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
      title={"tạo tài khoản"}
      subTitle={"Vui lòng nhập số điện thoại"}
      loginSocial={true}
      btnPrev={true}
      btnPrevClick={() => navigation.previous()}
    >
      <Input
        data={email}
        setData={setEmail}
        telephone={true}
        parentCallback={(validation) => callbackFunction(validation)}
      />
      <Button
        validation={validation}
        onClick={(e) => {
          handleSubmit(e);
          navigation.next();
        }}
      >
        Tiếp Tục
      </Button>
    </Form>
  );
}

export default FormCreateAccount;
