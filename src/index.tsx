import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "@/store";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
// for date-picker i18n
import "dayjs/locale/zh-cn";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <App />
        </Provider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
