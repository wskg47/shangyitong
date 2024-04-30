import React from "react";
import { Outlet } from "react-router-dom";

function Hospital() {
  return (
    <>
      医院信息
      <Outlet></Outlet>
    </>
  );
}

export default Hospital;
