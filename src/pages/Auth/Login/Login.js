import React from "react";
import { useForm } from "react-hook-form";
import "../../../assets/css/login.css";
import backgroupImage from "../../../assets/image/backgr.jpg";
const Login = () => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <>
      <div className="login-box" style={{ backgroundImage: `url(${backgroupImage})` }}>
        <h2 className="font-semibold text-[30px]">Đăng nhập</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-3">
            <label className=" text-gray-300 text-sm font-bold mb-2">Tài khoản</label>
            <input
              className="border pl-[10px] w-full h-[40px] rounded-[6px] hover:ring-2 hover:ring-purple-300 focus:outline-none focus:ring-2  focus:ring-purple-600 focus:border-transparent"
              type="text"
              placeholder="Họ và tên"
              {...register("username", { required: true })}
            />
            <div className="mt-1 h-[10px] ">
              <span className="text-red-500">
                {errors?.username && errors?.username.type === "required"
                  ? "Hãy nhập tài khoản"
                  : ""}
              </span>
            </div>
          </div>
          <div className="mt-3">
            <label className=" text-gray-300 text-sm font-bold mb-2">Mật khẩu</label>
            <input
              className="border pl-[10px] w-full h-[40px] rounded-[6px] hover:ring-2 hover:ring-purple-300 focus:outline-none focus:ring-2  focus:ring-purple-600 focus:border-transparent"
              type="password"
              placeholder="Password"
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
          <div className="flex justify-center">
            <button href="#">
              Đăng nhập
              <span className="span1" />
              <span className="span2" />
              <span className="span3" />
              <span className="span4" />
            </button>
          </div>
          <div className="pt-4 ml-2">
            <span>Bạn chưa có tài khoản?</span>
            <a className="font-semibold pl-2" style={{ color: "blue" }}>
              Đăng kí ngay
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
