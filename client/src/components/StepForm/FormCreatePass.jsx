import React,{useState} from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";

function FormCreatePass({ navigation }) {
  const [pass, setPass] = useState("");
  const [rePass, setRePass] = useState("");
  const [validation, setValidation] = React.useState(false);
  const callbackFunction = (childData) => {
    setValidation(childData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // console.log(pass, rePass);
  // console.log(rePass);
  return (
    <Form
      title={"tạo mật khẩu"}
      subTitle={"Vui lòng nhập mật khẩu"}
      loginSocial={false}
      btnPrev={true}
      btnPrevClick={() => navigation.previous()}
    >
      <Input
        pass={pass}
        setPass={setPass}
        password={true}
        parentCallback={(validation) => callbackFunction(validation)}
        placeholder={"Nhập mật khẩu"}
      />
      <Input
        pass={pass}
        rePass={rePass}
        setRePass={setRePass}
        rePassword={true}
        parentCallback={(validation) => callbackFunction(validation)}
        placeholder={"Nhập lại mật khẩu"}
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
