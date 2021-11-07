import React from "react";
import { NavLink } from "react-router-dom";
import ButtonCancel from "../../../components/Button/ButtonCancel";
import ButtonSubmit from "../../../components/Button/ButtonSubmit";

const RoleList = () => {
  return (
    <>
      <div className="overflow-x-auto mt-2 mb-10">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="w-full mb-3 flex justify-between">
              <div>
                <NavLink to="/role/add">
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
                    <th className="py-3 px-6 text-left">Tên vai trò</th>
                    <th className="py-3 px-6 text-center">Mã vai trò</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-6 text-center">1</td>
                    <td className="py-2 px-6 text-left ">
                      <span className="font-medium">SuperAdmin</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">1</span>
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
                    <td className="py-2 px-6 text-center">2</td>
                    <td className="py-2 px-6 text-left ">
                      <span className="font-medium">Admin</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">2</span>
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
                      <span className="font-medium">Customer</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="font-medium">3</span>
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

export default RoleList;
