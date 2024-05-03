import React, { useEffect, useMemo } from "react";
import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Tabs } from "antd";
import {
  AppstoreAddOutlined,
  ContainerOutlined,
  SoundOutlined,
  PushpinOutlined,
  SecurityScanOutlined,
} from "@ant-design/icons";
import type { TabsProps } from "antd";
import { getHospitalInfo } from "@/API/hospital";
import { useStoreDispatch } from "@/store/hooks";
import { setHospitalInfo } from "@/store/features/hospitalInfoSlice";

const items: TabsProps["items"] = [
  {
    key: `/hospital/register`,
    label: "预约挂号",
    icon: <AppstoreAddOutlined />,
  },
  {
    key: "/hospital/detail",
    label: "医院详情",
    icon: <ContainerOutlined />,
  },
  {
    key: "/hospital/notice",
    label: "预约通知",
    icon: <SoundOutlined />,
  },
  {
    key: "/hospital/close",
    label: "停诊信息",
    icon: <PushpinOutlined />,
  },
  {
    key: "/hospital/query",
    label: "查询/取消",
    icon: <SecurityScanOutlined />,
  },
];

function Hospital() {
  const location = useLocation();
  const [usp] = useSearchParams();
  const navigate = useNavigate();
  const hoscode = usp.get("hoscode");
  const dispatch = useStoreDispatch();

  useEffect(() => {
    getHospitalInfo(hoscode).then((res) => {
      dispatch(setHospitalInfo(res.data));
    });
  }, [hoscode, dispatch]);

  const cacheTabs = useMemo(() => {
    console.log(1);

    const onChangeTab = (key: string) => {
      navigate(key + `?hoscode=${hoscode}`);
    };
    return (
      <Tabs
        tabPosition="left"
        defaultActiveKey={location.pathname}
        items={items?.map((item) => {
          return {
            key: item.key,
            label: item.label,
            icon: item.icon,
            children: <Outlet />,
          };
        })}
        onChange={(key) => {
          onChangeTab(key);
        }}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hoscode]);
  return (
    <>
      {/* <Tabs
        tabPosition="left"
        defaultActiveKey={location.pathname}
        items={items?.map((item) => {
          return {
            key: item.key,
            label: item.label,
            icon: item.icon,
            children: <Outlet />,
          };
        })}
        onChange={(key) => {
          onChangeTab(key);
        }}
      /> */}
      {cacheTabs}
    </>
  );
}

export default Hospital;
