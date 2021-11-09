import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import routes from "../../routers/routers";
import { useLocation } from "react-router-dom";
import { TheHeaderDropdown, TheHeaderDropdownNotif } from "./index";
import logo1 from "../../assets/image/logo.png";
import "../../assets/css/TheHeader.css";

const TheHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.changeState.sidebarShow);

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };
  const location = useLocation().pathname;
  const titlePage = routes.filter((item) => item.path === location);

  return (
    <>
      <CHeader withSubheader>
        <CToggler
          inHeader
          className="ml-md-3 d-lg-none"
          onClick={toggleSidebarMobile}
        />
        <CToggler
          inHeader
          className="ml-3 d-md-down-none"
          onClick={toggleSidebar}
        />
        <CHeaderBrand className="mx-auto d-lg-none" to="/">
          <CIcon name="logo" src={logo1} alt="Logo" />
        </CHeaderBrand>

        <CHeaderNav className="d-md-down-none mr-auto">
          <CHeaderNavItem className="px-3">
            <CHeaderNavLink to="/">Dashboard</CHeaderNavLink>
          </CHeaderNavItem>
          <CHeaderNavItem className="px-3">
            <CHeaderNavLink to="/account">Users</CHeaderNavLink>
          </CHeaderNavItem>
          <CHeaderNavItem className="px-3">
            <CHeaderNavLink to="/license-key">LicenseKey</CHeaderNavLink>
          </CHeaderNavItem>
        </CHeaderNav>

        <CHeaderNav className="px-3">
          <TheHeaderDropdownNotif />
          <TheHeaderDropdown />
        </CHeaderNav>
      </CHeader>
      <div className="px-3 justify-content-between sm:mt-1 md:mt-6">
        <span className="md:ml-[14px] text-[15px] md:text-[28px] capitalize  text-purple-600 font-semibold font-serif">
          {titlePage && titlePage.length > 0
            ? titlePage[0]?.name
            : "Sửa thông tin"}
        </span>
        <CBreadcrumbRouter
          className="border-0 m-0 px-0 px-md-3 font-thin"
          routes={routes}
        />
      </div>
    </>
  );
};

export default TheHeader;
