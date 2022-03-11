import React, { useState } from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";

function PopupLogin() {
  const [telephone, setTelephone] = useState("");
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

          <Input data={telephone} setData={setTelephone} telephone={true} />
          <Button>Tiếp Tục</Button>
          <p className="form_text">
            Chưa có tài khoản? <a>Tạo tài khoản</a>
            <br />
            <a>Đăng nhập bằng email</a>
          </p>
        </Form>
      </div>
    </>
  );
}

export default PopupLogin;
