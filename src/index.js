import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store/index";
import { Provider } from "react-redux";
import { icons } from "./assets/icons/index";
import "@fortawesome/fontawesome-free/css/all.css";
import "./assets/css/tailwind.css";
import "antd/dist/antd.css";

const loading = (
  <div>
    <link
      rel="stylesheet"
      href="https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css"
      integrity="sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM="
      crossOrigin="anonymous"
    />
    <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
      <span
        className="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0"
        style={{ top: "50%" }}
      >
        <i className="fas fa-circle-notch fa-spin fa-5x" />
      </span>
    </div>
  </div>
);
React.icons = icons;
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={loading}>
        <App />
      </Suspense>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
