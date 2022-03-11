import React from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";

function FormVerifyAccount({ navigation }) {
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
      title={"nhập mã xác minh"}
      subTitle={"Nhập mã xác minh gồm 6 số vừa được gửi đến 0932795436"}
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
        }}
      >
        Xác Minh
      </Button>
    </Form>
  );
}

export default FormVerifyAccount;
