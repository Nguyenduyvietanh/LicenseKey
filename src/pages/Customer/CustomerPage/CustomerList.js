import React from "react";
import ButtonAdd from "../../../components/Button/Button";

const CustomerList = () => {
  return (
    <>
      <div className="overflow-x-auto mt-2 mb-10">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="w-full mb-3 flex justify-between">
              <div>
                <ButtonAdd />
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
                  <button className="custom-btn btn-add" style={{ width: "110px", height: "40px" }}>
                    Huỷ bỏ
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded overflow-auto border-b-4 border-r border-purple-400 border-opacity-25">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-blue-100 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-center w-[80px]">STT</th>
                    <th className="py-3 px-6 text-left">Họ và tên</th>
                    <th className="py-3 px-6 text-left">Ảnh</th>
                    <th className="py-3 px-6 text-left">Số điện thoại</th>
                    <th className="py-3 px-6 text-left">Email</th>
                    <th className="py-3 px-6 text-left">Phòng ban</th>
                    <th className="py-3 px-6 text-left">Tổ chức</th>
                    <th className="py-3 px-6 text-center">Sản phẩm</th>
                    <th className="py-3 px-6 text-center">Độ ưu tiên</th>
                    <th className="py-3 px-6 text-center">Trạng thái</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-6 text-center">1</td>
                    <td className="py-2 px-6 text-left ">
                      <span className="font-medium">Nguyễn Duy Việt Anh</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <img
                        className="w-[35px] h-[35px] rounded-full"
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                      />
                    </td>
                    <td className="py-2 px-6 text-left ">
                      <span className="font-medium">0859850000</span>
                    </td>
                    <td className="py-2 px-6 text-left">
                      <span className="font-medium">vietanhdeptrai@gmail.com</span>
                    </td>
                    <td className="py-2 px-6 text-left ">
                      <span className="font-medium">Phòng dịch vụ</span>
                    </td>
                    <td className="py-2 px-6 text-left ">
                      <span className="font-medium">Công ty HTI</span>
                    </td>
                    <td className="py-2 px-6 text-left ">
                      <span className="font-medium">VideoInsight</span>
                    </td>
                    <td className="py-2 px-6 text-left ">
                      <span className="font-medium">Độ ưu tiên</span>
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
                      <span className="font-medium">Trấn thành</span>
                    </td>
                    <td className="py-2 px-6 text-left">
                      <img
                        className="w-[35px] h-[35px] rounded-full"
                        src="https://event.mediacdn.vn/2020/10/20/tran-thanh-p-16031678576061691914167.png"
                      />
                    </td>
                    <td className="py-2 px-6 text-left">
                      <span className="font-medium">tranthanhvippro@gmail.com</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                        Admin
                      </span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <div className="mr-2 transform hover:scale-110">
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
                      <span className="font-medium">Ngô Bá Khá</span>
                    </td>
                    <td className="py-2 px-6 text-left">
                      <img
                        className="w-[35px] h-[35px] rounded-full"
                        src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Kh%C3%A1_B%E1%BA%A3nh_khai_tr%C6%B0%C6%A1ng_shop_b%C3%A1n_qu%E1%BA%A7n_%C3%A1o_%E1%BB%9F_Qu%E1%BB%91c_Oai_2019-03-16.png"
                      />
                    </td>
                    <td className="py-2 px-6 text-left">
                      <span className="font-medium">khabanh@gmail.com</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">
                        Customer
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
                      <span className="font-medium">Nguyễn Duy Việt Anh</span>
                    </td>
                    <td className="py-2 px-6 text-left">
                      <img
                        className="w-[35px] h-[35px] rounded-full"
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                      />
                    </td>
                    <td className="py-2 px-6 text-left">
                      <span className="font-medium">vietanhdeptrai@gmail.com</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                        SuperAdmin
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
                      <span className="font-medium">Trấn thành</span>
                    </td>
                    <td className="py-2 px-6 text-left">
                      <img
                        className="w-[35px] h-[35px] rounded-full"
                        src="https://event.mediacdn.vn/2020/10/20/tran-thanh-p-16031678576061691914167.png"
                      />
                    </td>
                    <td className="py-2 px-6 text-left">
                      <span className="font-medium">tranthanhvippro@gmail.com</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                        Admin
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
                    <td className="py-2 px-6 text-center">6</td>
                    <td className="py-2 px-6 text-left ">
                      <span className="font-medium">Ngô Bá Khá</span>
                    </td>
                    <td className="py-2 px-6 text-left">
                      <img
                        className="w-[35px] h-[35px] rounded-full"
                        src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Kh%C3%A1_B%E1%BA%A3nh_khai_tr%C6%B0%C6%A1ng_shop_b%C3%A1n_qu%E1%BA%A7n_%C3%A1o_%E1%BB%9F_Qu%E1%BB%91c_Oai_2019-03-16.png"
                      />
                    </td>
                    <td className="py-2 px-6 text-left">
                      <span className="font-medium">khabanh@gmail.com</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">
                        Customer
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
                    <td className="py-2 px-6 text-center">7</td>
                    <td className="py-2 px-6 text-left ">
                      <span className="font-medium">Ngô Bá Khá</span>
                    </td>
                    <td className="py-2 px-6 text-left">
                      <img
                        className="w-[35px] h-[35px] rounded-full"
                        src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Kh%C3%A1_B%E1%BA%A3nh_khai_tr%C6%B0%C6%A1ng_shop_b%C3%A1n_qu%E1%BA%A7n_%C3%A1o_%E1%BB%9F_Qu%E1%BB%91c_Oai_2019-03-16.png"
                      />
                    </td>
                    <td className="py-2 px-6 text-left">
                      <span className="font-medium">khabanh@gmail.com</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">
                        Customer
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
                    <td className="py-2 px-6 text-center">8</td>
                    <td className="py-2 px-6 text-left ">
                      <span className="font-medium">Nguyễn Duy Việt Anh</span>
                    </td>
                    <td className="py-2 px-6 text-left">
                      <img
                        className="w-[35px] h-[35px] rounded-full"
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                      />
                    </td>
                    <td className="py-2 px-6 text-left">
                      <span className="font-medium">vietanhdeptrai@gmail.com</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                        SuperAdmin
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
                    <td className="py-2 px-6 text-center">9</td>
                    <td className="py-2 px-6 text-left ">
                      <span className="font-medium">Trấn thành</span>
                    </td>
                    <td className="py-2 px-6 text-left">
                      <img
                        className="w-[35px] h-[35px] rounded-full"
                        src="https://event.mediacdn.vn/2020/10/20/tran-thanh-p-16031678576061691914167.png"
                      />
                    </td>
                    <td className="py-2 px-6 text-left">
                      <span className="font-medium">tranthanhvippro@gmail.com</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                        Admin
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
                    <td className="py-2 px-6 text-center">10</td>
                    <td className="py-2 px-6 text-left ">
                      <span className="font-medium">Ngô Bá Khá</span>
                    </td>
                    <td className="py-2 px-6 text-left">
                      <img
                        className="w-[35px] h-[35px] rounded-full"
                        src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Kh%C3%A1_B%E1%BA%A3nh_khai_tr%C6%B0%C6%A1ng_shop_b%C3%A1n_qu%E1%BA%A7n_%C3%A1o_%E1%BB%9F_Qu%E1%BB%91c_Oai_2019-03-16.png"
                      />
                    </td>
                    <td className="py-2 px-6 text-left">
                      <span className="font-medium">khabanh@gmail.com</span>
                    </td>
                    <td className="py-2 px-6 text-center">
                      <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">
                        Customer
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

export default CustomerList;