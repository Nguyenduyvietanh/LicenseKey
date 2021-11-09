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
    _children: ["Quản lý License"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "LicenseKey",
    to: "/license-key",
    icon: <i class="fas fa-key pr-[30px]" style={{ maxWidth: "40px" }}></i>,
  },

  {
    _tag: "CSidebarNavItem",
    name: "Danh mục",
    to: "/license-key-category",
    icon: <i class="fas fa-clock pr-[30px]" style={{ maxWidth: "40px" }}></i>,
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Quản lý tài khoản"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Account",
    to: "/account",
    icon: (
      <i
        class="fas fa-user-alt max-w-1/3 pr-[30px]"
        style={{ maxWidth: "40px" }}
      ></i>
    ),
  },
  {
    _tag: "CSidebarNavItem",
    name: "Chức vụ",
    to: "/role",
    icon: (
      <i
        class="fas fa-user-tag max-w-1/3 pr-[30px]"
        style={{ maxWidth: "40px" }}
      ></i>
    ),
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Quản lý khách hàng"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Khách hàng",
    to: "/customer",
    icon: <i class="fas fa-users pr-[30px]" style={{ maxWidth: "40px" }}></i>,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Phòng Ban",
    to: "/department",
    icon: (
      <i class="fas fa-building pr-[30px]" style={{ maxWidth: "40px" }}></i>
    ),
  },
  {
    _tag: "CSidebarNavItem",
    name: "Tổ chức",
    to: "/organization",
    icon: <i class="fas fa-sitemap pr-[30px]" style={{ maxWidth: "40px" }}></i>,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Ưu tiên",
    to: "/priority",
    icon: (
      <i
        class="fab fa-accessible-icon pr-[30px]"
        style={{ maxWidth: "40px" }}
      ></i>
    ),
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Quản lý sản phẩm"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Sản Phẩm",
    to: "/product",
    icon: <i class="fas fa-copy pr-[30px]" style={{ maxWidth: "40px" }}></i>,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Version",
    to: "/version",
    icon: (
      <i class="fas fa-code-branch pr-[30px]" style={{ maxWidth: "40px" }}></i>
    ),
  },
];

export default _nav;
