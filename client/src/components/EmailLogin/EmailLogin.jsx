import React, { useState } from 'react';
import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";

export default function EmailLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <input type="checkbox" className="close-overplay" id="toggle" hidden />
            <label className="overplay" htmlFor="toggle"></label>
            <div className="wrapper">
                <Form
                    title={"Đăng nhập bằng Email"}
                    subTitle={"Nhập email và mật khẩu"}>

                    <Input data={email} setData={setEmail} email={true} />
                    <Input data={password} setData={setPassword} password={true} />
                    <Button>Đăng Nhập</Button>

                </Form>
            </div>
        </>
    )
}
