import React from "react";
import logo from "../../assets/image/logo.png";
import Chart from "./components/Chart";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-16 mt-[35px]">
        <div className="px-4 py-3 flex flex-wrap col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-xl border border-gray-200 r">
          <div className="relative bg-gradient-to-tr from-purple-500 to-purple-700 -mt-14 mb-2 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-purple ">
            <div class="absolute top-0 right-0 h-[20px] px-[5px] font-semibold text-white bg-red-500 rounded-lg">
              +49%
            </div>
            <span class="material-icons text-white text-3xl leading-none">
              <i class="fas fa-users"></i>
            </span>
          </div>

          <div className="w-full flex-grow flex-1 text-right">
            <header className="flex justify-end items-start mb-3 border-b border-gray-200">
              <img className="mb-3" src={logo} width={80} height={80} alt="" />
            </header>
            <h2 className="text-xs font-semibold text-gray-400 uppercase">
              Khách hàng
            </h2>
            <div className="flex justify-end">
              <div className="text-3xl font-bold text-purple-600 mr-1">17</div>
              <i class="fas fa-user text-gray-500 mt-[17px] "></i>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 flex flex-wrap col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-xl border border-gray-200 r">
          <div className="relative bg-gradient-to-tr from-purple-500 to-purple-700 -mt-14 mb-2 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-purple ">
            <div class="absolute top-0 right-0 h-[20px] px-[5px] font-semibold text-white bg-yellow-500  rounded-lg">
              -9%
            </div>
            <span class="material-icons text-white text-3xl leading-none">
              <i class="fas fa-plane"></i>
            </span>
          </div>

          <div className="w-full flex-grow flex-1 text-right">
            <header className="flex justify-end items-start mb-3 border-b border-gray-200">
              <img className="mb-3" src={logo} width={80} height={80} alt="" />
            </header>
            <h2 className="text-xs font-semibold text-gray-400 uppercase">
              Key Online
            </h2>
            <div className="flex justify-end">
              <div className="text-3xl font-bold text-purple-600 mr-1">9</div>
              <i class="fas fa-key text-gray-500 mt-[17px] "></i>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 flex flex-wrap col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-xl border border-gray-200 r">
          <div className="relative bg-gradient-to-tr from-purple-500 to-purple-700 -mt-14 mb-2 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-purple ">
            <div class="absolute top-0 right-0 h-[20px] px-[5px] font-semibold text-white bg-red-500 rounded-lg">
              +11%
            </div>
            <span class="material-icons text-white text-3xl leading-none">
              <i class="fas fa-plane-slash"></i>
            </span>
          </div>

          <div className="w-full flex-grow flex-1 text-right">
            <header className="flex justify-end items-start mb-3 border-b border-gray-200">
              <img className="mb-3" src={logo} width={80} height={80} alt="" />
            </header>
            <h2 className="text-xs font-semibold text-gray-400 uppercase">
              Key Offline
            </h2>
            <div className="flex justify-end">
              <div className="text-3xl font-bold text-purple-600 mr-1">3</div>
              <i class="fas fa-key text-gray-500 mt-[17px] "></i>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 flex flex-wrap col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-xl border border-gray-200 r">
          <div className="relative bg-gradient-to-tr from-purple-500 to-purple-700 -mt-14 mb-2 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-purple ">
            <div class="absolute top-0 right-0 h-[20px] px-[5px] font-semibold text-white bg-yellow-500 rounded-lg">
              -5%
            </div>
            <span class="material-icons text-white text-3xl leading-none">
              <i class="fas fa-laptop-code"></i>
            </span>
          </div>

          <div className="w-full flex-grow flex-1 text-right">
            <header className="flex justify-end items-start mb-3 border-b border-gray-200">
              <img className="mb-3" src={logo} width={80} height={80} alt="" />
            </header>
            <h2 className="text-xs font-semibold text-gray-400 uppercase">
              Sản Phẩm
            </h2>
            <div className="flex justify-end">
              <div className="text-3xl font-bold text-purple-600 mr-1">8</div>
              <i class="fas fa-file-code text-gray-500 mt-[17px] "></i>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 flex flex-wrap col-span-full xl:col-span-8">
          <Chart />
        </div>
      </div>
    </>
  );
};

export default Home;
