import React from "react";
import { Link, NavLink } from "react-router-dom";
import ButtonCancel from "../../../components/Button/ButtonCancel";
import ButtonSubmit from "../../../components/Button/ButtonSubmit";

const LicenseKeyList = () => {
  return (
    <>
      <div className="overflow-x-auto mt-2 mb-10">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="w-full mb-3 flex justify-between">
              <div>
                <NavLink to="/license-key/add">
                  <ButtonSubmit
                    iconButton={<i class="fas fa-plus pr-[15px]"></i>}
                    titleButton="Thêm mới"
                  />
                </NavLink>
              </div>
              <div className="flex justify-end">
                <div className="w-[200px] pt-[2px] mr-2">
                  <select className="text-gray-400 border-none inline-block focus:outline-none py-[11px] pl-3 pr-8 rounded-md w-full">
                    <option>All</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div className="flex justify-center bg-white rounded-xl border-2 w-[280px]">
                  <input
                    type="search"
                    placeholder="Search..."
                    className="block rounded-md border-0 focus:outline-none focus:ring-0 focus:border-blue-500 flex-grow p-[9px]"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 my-auto m-2"
                    style={{ color: "gray" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <ButtonCancel />
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded overflow-auto border-b-4 border-r border-purple-400 border-opacity-25">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-blue-100 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-center w-[80px]">STT</th>
                    <th className="py-3 px-6 text-left">Địa chỉ MAC</th>
                    <th className="py-3 px-6 text-left">Khách hàng</th>
                    <th className="py-3 px-6 text-center">Sản phẩm</th>
                    <th className="py-3 px-6 text-center">Danh mục</th>
                    <th className="py-3 px-6 text-center">Phân loại</th>
                    <th className="py-3 px-6 text-center">Ngày kích hoạt</th>
                    <th className="py-3 px-6 text-center">Ngày hết hạn</th>
                    <th className="py-3 px-6 text-center">Trạng thái</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-6 text-center">1</td>
                    <td className="py-2 px-6 text-left ">
                      <span className="font-medium">123.198.456</span>
                    </td>
                    <td className="py-2 px-6 text-left">
                      <span className="font-medium">Nguyễn Duy Việt Anh</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">VideoInsight</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">1 năm</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                        Online
                      </span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">24/6/2021</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">24/6/2022</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium bg-blue-400 text-white py-2 px-3 rounded-xl text-xs">
                        Đang sử dụng
                      </span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <div className="mr-2 transform  hover:scale-110">
                          <Link to="/license-key/edit/1">
                            <i class="fas fa-pencil-alt w-9 h-9 stroke-current text-purple-600 bg-purple-100 rounded-full pt-[11px]"></i>
                          </Link>
                        </div>
                        <div className="mr-2 transform  hover:scale-110">
                          <i class="fas fa-trash-alt w-9 h-9 stroke-current text-red-600 bg-red-100 rounded-full pt-[11px]"></i>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-6 text-center">2</td>
                    <td className="py-2 px-6 text-left ">
                      <span className="font-medium">198.145.87</span>
                    </td>
                    <td className="py-2 px-6 text-left">
                      <span className="font-medium">Ngô Bá Khá</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">Hface</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">Dùng thử</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium bg-red-500 text-red-200 py-1 px-3 rounded-full text-xs">
                        Offline
                      </span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">15/11/2021</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">15/11/2022</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium bg-[#2f7c59] text-white py-2 px-3 rounded-xl text-xs">
                        Còn 3 ngày
                      </span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <div className="mr-2 transform  hover:scale-110">
                          <i class="fas fa-pencil-alt w-9 h-9 stroke-current text-purple-600 bg-purple-100 rounded-full pt-[11px]"></i>
                        </div>
                        <div className="mr-2 transform  hover:scale-110">
                          <i class="fas fa-trash-alt w-9 h-9 stroke-current text-red-600 bg-red-100 rounded-full pt-[11px]"></i>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-6 text-center">3</td>
                    <td className="py-2 px-6 text-left ">
                      <span className="font-medium">198.145.87</span>
                    </td>
                    <td className="py-2 px-6 text-left">
                      <span className="font-medium">Giang Rồng</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">Hface</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">Dùng thử</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                        Online
                      </span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">05/11/2021</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">05/11/2022</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium bg-[#ff0000] text-white py-2 px-3 rounded-xl text-xs">
                        Hết hạn
                      </span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <div className="mr-2 transform  hover:scale-110">
                          <i class="fas fa-pencil-alt w-9 h-9 stroke-current text-purple-600 bg-purple-100 rounded-full pt-[11px]"></i>
                        </div>
                        <div className="mr-2 transform  hover:scale-110">
                          <i class="fas fa-trash-alt w-9 h-9 stroke-current text-red-600 bg-red-100 rounded-full pt-[11px]"></i>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-6 text-center">4</td>
                    <td className="py-2 px-6 text-left ">
                      <span className="font-medium">123.198.456</span>
                    </td>
                    <td className="py-2 px-6 text-left">
                      <span className="font-medium">Võ Thị Sáu</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">VideoInsight</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">Vĩnh viễn</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                        Online
                      </span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">24/6/2021</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">00/00/0000</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium bg-blue-400 text-white py-2 px-3 rounded-xl text-xs">
                        Đang sử dụng
                      </span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <div className="mr-2 transform  hover:scale-110">
                          <i class="fas fa-pencil-alt w-9 h-9 stroke-current text-purple-600 bg-purple-100 rounded-full pt-[11px]"></i>
                        </div>
                        <div className="mr-2 transform  hover:scale-110">
                          <i class="fas fa-trash-alt w-9 h-9 stroke-current text-red-600 bg-red-100 rounded-full pt-[11px]"></i>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-6 text-center">5</td>
                    <td className="py-2 px-6 text-left ">
                      <span className="font-medium">198.142.78</span>
                    </td>
                    <td className="py-2 px-6 text-left">
                      <span className="font-medium">Lê Văn Công</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">Hface</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">5 năm</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                        Online
                      </span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">24/6/2021</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">24/6/2026</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium bg-blue-400 text-white py-2 px-3 rounded-xl text-xs">
                        Đang sử dụng
                      </span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <div className="mr-2 transform  hover:scale-110">
                          <i class="fas fa-pencil-alt w-9 h-9 stroke-current text-purple-600 bg-purple-100 rounded-full pt-[11px]"></i>
                        </div>
                        <div className="mr-2 transform  hover:scale-110">
                          <i class="fas fa-trash-alt w-9 h-9 stroke-current text-red-600 bg-red-100 rounded-full pt-[11px]"></i>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LicenseKeyList;
