import React from "react";
import { DatePicker, Switch } from "antd";
import ButtonCancel from "./../../../components/Button/ButtonCancel";
import ButtonSubmit from "./../../../components/Button/ButtonSubmit";
import { NavLink } from "react-router-dom";

const { RangePicker } = DatePicker;
const LicenseKeyEdit = () => {
  return (
    <>
      <div className="flex justify-center ">
        <form className="w-2/5 border-2 border-gray-200 overflow-hidden shadow-lg bg-white rounded-[10px]">
          <div className="grid grid-cols-2 mx-[50px] mt-[50px]">
            <div className="col-span-1">
              <div className="flex flex-wrap mb-6">
                <div className="w-full px-3 ">
                  <label className=" text-gray-700 text-sm font-bold mb-2">Sản phẩm</label>
                  <select
                    className="border h-[40px] pl-[10px] pr-8 rounded-md w-full hover:ring-2 hover:ring-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    defaultValue="1"
                  >
                    <option value="1">VideoInsight</option>
                    <option value="2">Hface</option>
                    <option value="3">Novaland</option>
                  </select>
                </div>
                <div className="w-full px-3 pt-4">
                  <label className=" text-gray-700 text-sm font-bold mb-2">Khách hàng</label>
                  <select
                    className="  border h-[40px] pl-[10px] pr-8 rounded-md w-full hover:ring-2 hover:ring-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    defaultValue="2"
                  >
                    <option value="1">Nguyễn Duy Việt Anh</option>
                    <option value="2">Lê Văn Công</option>
                    <option value="3">Ngô Hữu Sơn</option>
                    <option value="4">Trấn Thành</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-wrap mb-6">
                <div className="w-full px-3 ">
                  <label className=" text-gray-700 text-sm font-bold mb-2">Thời gian</label>
                  <RangePicker className="" style={{ height: "40px", borderRadius: "5px" }} />
                </div>
                <div className="w-full px-3 pt-4 ">
                  <label className=" text-gray-700 text-sm font-bold mb-2">Danh mục</label>
                  <select
                    className="border h-[40px] pl-[10px] pr-8 rounded-md w-full hover:ring-2 hover:ring-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Chọn danh mục"
                  >
                    <option value="1">Dùng thử</option>
                    <option value="2">1 Năm</option>
                    <option value="3">5 Năm</option>
                    <option value="4">Vĩnh viễn</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-wrap mb-6">
                <div className="w-1/2 px-3">
                  <label className=" text-gray-700 text-sm font-bold mb-2">Trạng thái</label>
                  <Switch checkedChildren="Online" unCheckedChildren="Offline" />
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex flex-wrap mb-8">
                <div className="w-full px-3 ">
                  <label className=" text-gray-700 text-sm font-bold mb-2">Ghi chú</label>
                  <textarea
                    className="pl-[10px] pt-[10px] w-full border rounded-[6px] hover:ring-2 hover:ring-purple-300 focus:outline-none focus:ring-2  focus:ring-purple-600 focus:border-transparent"
                    rows={5}
                    placeholder="Ghi chú"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-[50px]">
            <div className="mx-2">
              <ButtonSubmit titleButton="Xác nhận" />
            </div>
            <div className="mx-2">
              <NavLink to="/license-key">
                <ButtonCancel />
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LicenseKeyEdit;
