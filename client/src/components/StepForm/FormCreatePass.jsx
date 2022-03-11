import React from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";

function FormCreatePass({ navigation }) {
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
      title={"tạo mật khẩu"}
      subTitle={"Vui lòng nhập mật khẩu"}
      loginSocial={false}
      btnPrev={true}
      btnPrevClick={() => navigation.previous()}
    >
      <Input
        data={email}
        setData={setEmail}
        telephone={true}
        parentCallback={(validation) => callbackFunction(validation)}
      />
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
        Xác Nhận
      </Button>
    </Form>
  );
}

export default FormCreatePass;
