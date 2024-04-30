import React from "react";
import { useStoreDispatch, useStoreSelector } from "@/store/hooks";
import { setUser } from "@/store/features/userSlice";
import { Button } from "antd";

function Login() {
  const userName = useStoreSelector((state) => state.user.userName);
  const dispatch = useStoreDispatch();
  return (
    <>
      <div>用户名：{userName}</div>
      <Button
        type="primary"
        onClick={() => {
          dispatch(setUser("张三"));
        }}
      >
        Button
      </Button>
    </>
  );
}

export default Login;
