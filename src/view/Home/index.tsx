import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>首页</div>
      <Button onClick={() => navigate("/login")}>go登录页</Button>
    </>
  );
}

export default Home;
