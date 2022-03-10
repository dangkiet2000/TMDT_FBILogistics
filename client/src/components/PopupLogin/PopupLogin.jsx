import React, { useState } from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";

function PopupLogin() {
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  // const [pass, setPass] = useState('');
  // console.log(telephone);
  return (
    <>
      <input type="checkbox" className="close-overplay" id="toggle" hidden />
      <label className="overplay" htmlFor="toggle"></label>
      <div className="wrapper">
        <Form
          title={"xin chào"}
          subTitle={"Đăng nhập hoặc Tạo tài khoản"}
          loginSocial={true}
        >
          <Input data={email} setData={setEmail} email={true} />
          <Input data={telephone} setData={setTelephone} password={true} />
          <Button>Tiếp Tục</Button>
          <p className="form_text">
            Chưa có tài khoản? <a>Tạo tài khoản</a>
            <br />
            <a>Đặng nhập bằng email</a>
          </p>
        </Form>
      </div>
    </>
  );
}

export default PopupLogin;
