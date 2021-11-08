import Home from "../pages/Home/Home";
import AccountList from "./../pages/Account/AccountPage/AccountList";
import AccountAdd from "../pages/Account/AccountPage/AccountAdd";
import RoleList from "../pages/Role/RolePage/RoleList";
import LicenseKeyList from "./../pages/LicenseKey/LicenseKeyPage/LicenseKeyList";
import LicenseKeyCategoryList from "../pages/LicenseKeyCategory/LicenseKeyCategoryPage/LicenseKeyCategoryList";
import AccountEdit from "../pages/Account/AccountPage/AccountEdit";
import RoleAdd from "./../pages/Role/RolePage/RoleAdd";
import LicenseKeyCategoryAdd from "./../pages/LicenseKeyCategory/LicenseKeyCategoryPage/LicenseKeyCategoryAdd";
import RoleEdit from "./../pages/Role/RolePage/RoleEdit";
import LicenseKeyAdd from "./../pages/LicenseKey/LicenseKeyPage/LicenseKeyAdd";
import LicenseKeyEdit from "../pages/LicenseKey/LicenseKeyPage/LicenseKeyEdit";
import OrganizationList from "./../pages/Organization/OrganizationPage/OrganizationList";
import OrganizationAdd from "./../pages/Organization/OrganizationPage/OrganizationAdd";
import CustomerList from "./../pages/Customer/CustomerPage/CustomerList";
import ProductList from "./../pages/Product/ProductPage/ProductList";

const routes = [
  { path: "/", exact: true, component: Home, name: "Home" },
  { path: "/license-key", exact: true, name: "Quản lý LicenseKey", component: LicenseKeyList },
  { path: "/license-key/add", name: "Thêm mới LicenseKey", component: LicenseKeyAdd },
  { path: "/license-key/edit/:id", name: "Sửa LicenseKey", component: LicenseKeyEdit },
  {
    path: "/license-key-category",
    exact: true,
    name: "Quản lý danh mục License",
    component: LicenseKeyCategoryList,
  },
  {
    path: "/license-key-category/add",
    name: "Thêm danh mục",
    component: LicenseKeyCategoryAdd,
  },
  { path: "/account", exact: true, name: "Quản lý tài khoản", component: AccountList },
  { path: "/account/add", name: "Thêm mới tài khoản", component: AccountAdd },
  { path: "/account/edit/:id", name: "Sửa tài khoản", component: AccountEdit },
  { path: "/customer", exact: true, name: "Quản lý khách hàng", component: CustomerList },
  { path: "/role", exact: true, name: "Quản lý vai trò", component: RoleList },
  { path: "/role/add", name: "Thêm mới vai trò", component: RoleAdd },
  { path: "/role/edit/:id", name: "Thêm mới vai trò", component: RoleEdit },
  { path: "/organization", exact: true, name: "Quản lý tổ chức", component: OrganizationList },
  { path: "/organization/add", name: "Thêm mới tổ chức", component: OrganizationAdd },
  { path: "/product", exact: true, name: "Quản lý sản phẩm", component: ProductList },
];

export default routes;
