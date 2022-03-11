import React, { useState } from 'react'
import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";

export default function PopupForgotPassword() {

    const [info, setInfor] = useState("");

    return (
        <>
            <input type="checkbox" className="close-overplay" id="toggle" hidden />
            <label className="overplay" htmlFor="toggle"></label>

            <div className="wrapper">
                <Form
                    title={"Quên Mật Khẩu"}
                    subTitle={"Vui lòng nhập thông tin tài khoản để lấy lại mật khẩu"}
                >
                    <Input data={info} setData={setInfor} forgotPassword={true}/>

                    <Button>Xác Nhận</Button>
                </Form>
            </div>
        </>
    )
}
