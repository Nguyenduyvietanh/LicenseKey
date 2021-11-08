import React, { useState } from "react";
import { LockOutlined, UploadOutlined } from "@ant-design/icons";
import { Upload, Image, Button } from "antd";
import { useForm } from "react-hook-form";
import ButtonSubmit from "../../../components/Button/ButtonSubmit";
import ButtonCancel from "../../../components/Button/ButtonCancel";
import { NavLink } from "react-router-dom";
const AccountAdd = () => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    if (data.password !== data.cf_password) {
      setError("cf_password", {
        type: "cf_pass_err",
        message: "Nhập lại mật khẩu không trùng khớp",
      });
    } else {
      console.log(data);
    }
  };

  return (
    <>
      <div className="flex justify-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-5/6 border-2 border-gray-200 overflow-hidden shadow-lg bg-white rounded-[10px]"
        >
          <div className="grid grid-cols-7 gap-[10px] mx-[100px] mt-[50px]">
            <div className="col-span-5">
              <div className="flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 px-3 ">
                  <label className=" text-gray-700 text-sm font-bold mb-2">Username</label>
                  <input
                    className="border pl-[10px] w-full h-[40px] rounded-[6px] hover:ring-2 hover:ring-purple-300 focus:outline-none focus:ring-2  focus:ring-purple-600 focus:border-transparent"
                    type="text"
                    placeholder="Họ và tên"
                    {...register("username", { required: true })}
                  />
                  <div className="mt-1 h-[10px]">
                    <span className="text-red-500">
                      {errors?.username && errors?.username.type === "required"
                        ? "Hãy nhập họ và tên"
                        : ""}
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className=" text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input
                    className="border pl-[10px] w-full h-[40px] rounded-[6px] hover:ring-2 hover:ring-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  <div className="mt-1 h-[10px]">
                    <span className="text-red-500">
                      {errors?.email && errors?.email.type === "required"
                        ? "Hãy nhập địa chỉ email"
                        : ""}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 px-3 ">
                  <label className=" text-gray-700 text-sm font-bold mb-2">Mật khẩu</label>
                  <input
                    className="border pl-[10px] w-full h-[40px] rounded-[6px] hover:ring-2 hover:ring-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    type="password"
                    placeholder="Mật khẩu"
                    {...register("password", { required: true })}
                  />
                  <div className="mt-1 h-[10px]">
                    <span className="text-red-500">
                      {errors?.password && errors?.password.type === "required"
                        ? "Hãy nhập mật khẩu"
                        : ""}
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className=" text-gray-700 text-sm font-bold mb-2">Nhập lại mật khẩu</label>
                  <input
                    className="border pl-[10px] w-full h-[40px] rounded-[6px] hover:ring-2 hover:ring-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    {...register("cf_password", { required: true })}
                  />
                  <div className="mt-1 h-[10px]">
                    <span className="text-red-500">
                      {errors?.cf_password && errors.cf_password.type === "required"
                        ? "Hãy nhập lại mật khẩu"
                        : ""}
                      {(errors.cf_password && errors.cf_password.type) === "cf_pass_err"
                        ? errors.cf_password.message
                        : ""}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap mt-[35px]">
                  <div className="w-full px-3">
                    <label className=" text-gray-700 text-sm font-bold mb-2">Vai trò</label>
                    <select
                      {...register("role", { required: true })}
                      className="  border h-[40px] pl-[10px] pr-8 rounded-md w-full hover:ring-2 hover:ring-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      defaultValue="2"
                    >
                      <option value="1">Ban lãnh đạo</option>
                      <option value="2">Trưởng phòng</option>
                      <option value="3">Phó phòng</option>
                      <option value="4">Nhân viên</option>
                    </select>
                    <div className="mt-1 h-[10px]">
                      <span className="text-red-500">
                        {errors?.role && errors?.role.type === "required" ? "Hãy chọn vai trò" : ""}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 ml-[80px]">
              <Image
                src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/148491413_2931504310416519_4770857099055785293_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=atIWIWEmPI8AX80zLY3&_nc_ht=scontent.fhan2-2.fna&oh=b7505dab1de0dbba981535de881c8c5a&oe=61AB337B"
                style={{
                  height: 200,
                  width: 200,
                  borderRadius: "50%",
                  marginTop: "27px",
                  marginBottom: "15px",
                  objectFit: "cover",
                }}
                alt=""
              />
              <Upload className="ml-[48px]" beforeUpload="false" showUploadList={false}>
                <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
              </Upload>
            </div>
          </div>
          <div className="flex justify-center mb-[50px]">
            <div className="mx-2">
              <ButtonSubmit titleButton="Xác nhận" />
            </div>
            <div className="mx-2">
              <NavLink to="/account">
                <ButtonCancel />
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AccountAdd;
