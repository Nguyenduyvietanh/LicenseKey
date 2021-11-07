import React from "react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/",
    icon: <i class="fas fa-home fa-2x pr-[30px] text-purple-500 "></i>,
    badge: {
      color: "info",
      text: "Home",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Quản lý tài khoản"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Account",
    route: "/account",
    icon: <i class="fas fa-user-alt max-w-1/3 pr-[30px]" style={{ maxWidth: "40px" }}></i>,
    _children: [
      {
        _tag: "CSidebarNavItem",
        icon: <i class="fas fa-list-ul pr-2 text-center"></i>,
        name: "Danh sách",
        to: "/account",
      },
      {
        _tag: "CSidebarNavItem",
        icon: <i class="fas fa-plus pr-2 text-center"></i>,
        name: "Thêm mới",
        to: "/account/add",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Chức vụ",
    route: "/role",
    icon: <i class="fas fa-user-tag max-w-1/3 pr-[30px]" style={{ maxWidth: "40px" }}></i>,
    _children: [
      {
        _tag: "CSidebarNavItem",
        icon: <i class="fas fa-list-ul pr-2 text-center"></i>,
        name: "Danh sách",
        to: "/role",
      },
      {
        _tag: "CSidebarNavItem",
        icon: <i class="fas fa-plus pr-2 text-center"></i>,
        name: "Thêm mới",
        to: "/role/add",
      },
    ],
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Quản lý License"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "License",
    route: "/license-key",
    icon: <i class="fas fa-key pr-[30px]" style={{ maxWidth: "40px" }}></i>,
    _children: [
      {
        _tag: "CSidebarNavItem",
        icon: <i class="fas fa-list-ul pr-2 text-center"></i>,
        name: "Danh sách",
        to: "/license-key",
      },
      {
        _tag: "CSidebarNavItem",
        icon: <i class="fas fa-plus pr-2 text-center"></i>,
        name: "Thêm mới",
        to: "/license-key/add",
      },
    ],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Danh mục",
    route: "/license-key-category",
    icon: <i class="fas fa-clock pr-[30px]" style={{ maxWidth: "40px" }}></i>,
    _children: [
      {
        _tag: "CSidebarNavItem",
        icon: <i class="fas fa-list-ul pr-2 text-center"></i>,
        name: "Danh sách",
        to: "/license-key-category",
      },
      {
        _tag: "CSidebarNavItem",
        icon: <i class="fas fa-plus pr-2 text-center"></i>,
        name: "Thêm mới",
        to: "/license-key-category/add",
      },
    ],
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Quản lý khách hàng"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Khách hàng",
    route: "/customer",
    icon: <i class="fas fa-users pr-[30px]" style={{ maxWidth: "40px" }}></i>,
    _children: [
      {
        _tag: "CSidebarNavItem",
        icon: <i class="fas fa-list-ul pr-2 text-center"></i>,
        name: "Danh sách",
        to: "/customer",
      },
      {
        _tag: "CSidebarNavItem",
        icon: <i class="fas fa-plus pr-2 text-center"></i>,
        name: "Thêm mới",
        to: "/customer/add",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Phòng Ban",
    route: "/department",
    icon: <i class="fas fa-building pr-[30px]" style={{ maxWidth: "40px" }}></i>,
    _children: [
      {
        _tag: "CSidebarNavItem",
        icon: <i class="fas fa-list-ul pr-2 text-center"></i>,
        name: "Danh sách",
        to: "/department",
      },
      {
        _tag: "CSidebarNavItem",
        icon: <i class="fas fa-plus pr-2 text-center"></i>,
        name: "Thêm mới",
        to: "/department/add",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Tổ chức",
    route: "/organization",
    icon: <i class="fas fa-sitemap pr-[30px]" style={{ maxWidth: "40px" }}></i>,
    _children: [
      {
        _tag: "CSidebarNavItem",
        icon: <i class="fas fa-list-ul pr-2 text-center"></i>,
        name: "Danh sách",
        to: "/organization",
      },
      {
        _tag: "CSidebarNavItem",
        icon: <i class="fas fa-plus pr-2 text-center"></i>,
        name: "Thêm mới",
        to: "/organization/add",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Ưu tiên",
    route: "/priority",
    icon: <i class="fab fa-accessible-icon pr-[30px]" style={{ maxWidth: "40px" }}></i>,

    _children: [
      {
        _tag: "CSidebarNavItem",
        icon: <i class="fas fa-list-ul pr-2 text-center"></i>,
        name: "Danh sách",
        to: "/priority",
      },
      {
        _tag: "CSidebarNavItem",
        icon: <i class="fas fa-plus pr-2 text-center"></i>,
        name: "Thêm mới",
        to: "/priority/add",
      },
    ],
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Quản lý sản phẩm"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Sản Phẩm",
    route: "/products",
    icon: <i class="fas fa-copy pr-[30px]" style={{ maxWidth: "40px" }}></i>,
    _children: [
      {
        _tag: "CSidebarNavItem",
        icon: <i class="fas fa-list-ul pr-2 text-center"></i>,
        name: "Danh sách",
        to: "/products",
      },
      {
        _tag: "CSidebarNavItem",
        icon: <i class="fas fa-plus pr-2 text-center"></i>,
        name: "Thêm mới",
        to: "/products/add",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Version",
    route: "/version",
    icon: <i class="fas fa-code-branch pr-[30px]" style={{ maxWidth: "40px" }}></i>,
    _children: [
      {
        _tag: "CSidebarNavItem",
        icon: <i class="fas fa-list-ul pr-2 text-center"></i>,
        name: "Danh sách",
        to: "/version",
      },
      {
        _tag: "CSidebarNavItem",
        icon: <i class="fas fa-plus pr-2 text-center"></i>,
        name: "Thêm mới",
        to: "/version/add",
      },
    ],
  },
];

export default _nav;
