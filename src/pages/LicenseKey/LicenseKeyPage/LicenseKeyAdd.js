import React from "react";
import { DatePicker, Popover, Switch } from "antd";
import ButtonCancel from "./../../../components/Button/ButtonCancel";
import ButtonSubmit from "./../../../components/Button/ButtonSubmit";
import { NavLink } from "react-router-dom";

const { RangePicker } = DatePicker;
const LicenseKeyAdd = () => {
  const content = (
    <div>
      <div>
        <span>
          <i class="fas fa-phone"></i> : 085.985.0000
        </span>
      </div>
      <div className="pt-[5px]">
        <span>
          <i class="fas fa-envelope"></i> : anhndvhti@gmail.com
        </span>
      </div>
      <div className="pt-[5px]">
        <span>
          <i class="fas fa-map-marker-alt"></i> : 21 Lê đức thọ - Nam từ liêm -
          Hà Nội
        </span>
      </div>
    </div>
  );
  const contentVersion = (
    <div>
      <di>
        <span className="font-semibold">Version</span> : VI.1.2
      </di>
      <div>
        <span className=" font-semibold">Loại</span> : OnLine
      </div>
      <div>
        <span className=" font-semibold">Địa chỉ MAC</span> : 198.123.100.115
      </div>
      <div>
        <span className=" font-semibold">Domain</span> : nguyenduyvietanh.com
      </div>
    </div>
  );
  return (
    <>
      <div className="flex justify-center ">
        <form className="w-full lg:w-4/5 border-2 border-gray-200 overflow-hidden shadow-lg bg-white rounded-[10px]">
          <div className="grid grid-cols-2 sm:mx-[50px] mt-[20px] sm:mt-[50px]">
            <div className="col-span-1">
              <div className="flex flex-wrap mb-6">
                <div className="w-full px-3 ">
                  <label className=" text-gray-700 text-sm font-bold mb-2">
                    Tổ chức
                  </label>
                  <select
                    className="border h-[40px] pl-[10px] pr-8 rounded-md w-full hover:ring-2 hover:ring-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    defaultValue="1"
                  >
                    <option value="1">Công an HN</option>
                    <option value="2">Công an SG</option>
                    <option value="3">Công an ĐN</option>
                  </select>
                </div>
                <div className="w-full px-3 pt-4">
                  <label className=" text-gray-700 text-sm font-bold mb-2">
                    Phòng ban
                  </label>
                  <select
                    className="  border h-[40px] pl-[10px] pr-8 rounded-md w-full hover:ring-2 hover:ring-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    defaultValue="2"
                  >
                    <option value="1">C01</option>
                    <option value="2">C02</option>
                    <option value="3">C03</option>
                    <option value="4">C09</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="grid grid-cols-6 mb-6 ">
                <div className="col-span-1 w-full px-3 mt-[75px]">
                  <i class="fas fa-angle-double-right fa-3x text-gray-500"></i>
                </div>
                <div className="col-span-5">
                  <div className="w-full px-3 mt-[50px]">
                    <div className="flex">
                      <label className=" text-gray-700 text-sm font-bold mb-2">
                        Khách hàng
                      </label>
                      <div className="ml-auto cursor-pointer">
                        <Popover content={content} title="Thông tin">
                          <i className="far fa-eye hover:text-purple-700"></i>
                        </Popover>
                      </div>
                    </div>
                    <select
                      className="border h-[40px] pl-[10px] pr-8 rounded-md w-full hover:ring-2 hover:ring-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      defaultValue="2"
                    >
                      <option value="1">Nguyễn Duy Việt Anh</option>
                      <option value="2">Lê Văn Công</option>
                      <option value="3">Vũ Đức Tài</option>
                      <option value="4">Trấn Thành</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 mb-8 pt-[20px]">
              <div className="w-full px-3 ">
                <label className=" text-gray-700 text-sm font-bold mb-2">
                  Sản phẩm
                </label>
                <select
                  className="  border h-[40px] pl-[10px] pr-8 rounded-md w-full hover:ring-2 hover:ring-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  defaultValue="2"
                >
                  <option value="1">VideoInsight</option>
                  <option value="2">Hface</option>
                  <option value="3">Novaland</option>
                </select>
              </div>
            </div>
            <div className="col-span-1 pt-[20px]">
              <div className="grid grid-cols-6 mb-1">
                <div className="col-span-1 w-full px-3 mt-[25px] ">
                  <i class="fas fa-angle-double-right fa-3x text-gray-500"></i>
                </div>
                <div className="col-span-5 w-full px-3 ">
                  <div className="flex">
                    <label className=" text-gray-700 text-sm font-bold mb-2">
                      Version
                    </label>
                    <div className="ml-auto cursor-pointer">
                      <Popover content={contentVersion} title="Thông tin">
                        <i className="far fa-eye hover:text-purple-700"></i>
                      </Popover>
                    </div>
                  </div>
                  <select
                    className="border h-[40px] pl-[10px] pr-8 rounded-md w-full hover:ring-2 hover:ring-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    defaultValue="2"
                  >
                    <option value="1">V1.1</option>
                    <option value="2">V2.1</option>
                    <option value="3">V1.2</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-wrap">
                <div className="w-full px-3 ">
                  <label className=" text-gray-700 text-sm font-bold mb-2">
                    Danh mục
                  </label>
                  <select
                    className="border h-[40px] pl-[10px] pr-8 rounded-md w-full hover:ring-2 hover:ring-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    defaultValue="1"
                  >
                    <option value="1">Dùng thử</option>
                    <option value="2">1 năm</option>
                    <option value="3">5 năm</option>
                    <option value="3">Vĩnh viễn</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-span-2 mt-10">
              <div className="flex flex-wrap mb-8">
                <div className="w-full px-3 ">
                  <label className=" text-gray-700 text-sm font-bold mb-2">
                    Ghi chú
                  </label>
                  <textarea
                    className="pl-[10px] pt-[10px] w-full border rounded-[6px] hover:ring-2 hover:ring-purple-300 focus:outline-none focus:ring-2  focus:ring-purple-600 focus:border-transparent"
                    rows={5}
                    placeholder="Ghi chú"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-[20px] sm:mb-[50px]">
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

export default LicenseKeyAdd;
