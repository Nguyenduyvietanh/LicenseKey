import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import ButtonCancel from "../../../components/Button/ButtonCancel";
import ButtonSubmit from "../../../components/Button/ButtonSubmit";
const LicenseKeyCategoryAdd = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="flex justify-center mt-[50px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full lg:w-1/2 border-2 border-gray-200 overflow-hidden shadow-lg bg-white rounded-[10px]"
        >
          <div className=" mx-[100px] mt-[50px]">
            <div className="flex flex-wrap mb-8">
              <div className="w-full px-3 ">
                <label className=" text-gray-700 text-sm font-bold mb-2">Tên Danh mục</label>
                <input
                  className="border pl-[10px] w-full h-[40px] rounded-[6px] hover:ring-2 hover:ring-purple-300 focus:outline-none focus:ring-2  focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Tên danh mục"
                  {...register("title", { required: true })}
                />
              </div>
            </div>
            <div className="flex justify-center mb-[50px]">
              <div className="mx-2">
                <ButtonSubmit titleButton="Xác nhận" />
              </div>
              <div className="mx-2">
                <NavLink to="/license-key-category">
                  <ButtonCancel />
                </NavLink>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LicenseKeyCategoryAdd;
