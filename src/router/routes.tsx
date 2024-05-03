import { lazy, Suspense } from "react";
import {
  useRoutes,
  Navigate,
  RouteObject,
  useLocation,
} from "react-router-dom";
import Loading from "@/components/Loading";

// 首页
const Home = lazy(() => import("@/view/Home"));
// 登录
const Login = lazy(() => import("@/view/Login"));
// 医院
const Hospital = lazy(() => import("@/view/Hospital"));
const Register = lazy(() => import("@/view/Hospital/Register"));
const Detail = lazy(() => import("@/view/Hospital/Detail"));
const Notice = lazy(() => import("@/view/Hospital/Notice"));
const Close = lazy(() => import("@/view/Hospital/Close"));
const Query = lazy(() => import("@/view/Hospital/Query"));
// 个人中心
const User = lazy(() => import("@/view/User"));
// 404
const Error = lazy(() => import("@/view/404"));

/**
 * @description: 获取当前路由信息，添加标题
 * @param {any} routes
 * @param {any} pathInfo
 * @return {*}
 */
const getRouterMate = (
  routes: (RouteObject & {
    meta?: { title?: string; description?: string };
    children?: (RouteObject & { meta?: { title?: string } })[];
  })[],
  pathInfo?: any
): RouteObject | any => {
  return routes.map((item: any) => {
    if (item.children && Array.isArray(item.children)) {
      return getRouterMate(item.children, pathInfo);
    }
    if (item.path === pathInfo.pathname) {
      document.title = item?.meta.title || "医疗系统";
      return item;
    }
    return false;
  });
};
const RouteView = () => {
  const routes: (RouteObject & {
    meta?: { title?: string; description?: string };
    children?: (RouteObject & { meta?: { title?: string } })[];
  })[] = [
    {
      path: "/",
      element: <Home />,
      meta: { title: "首页" },
    },
    {
      path: "/login",
      element: <Login />,
      meta: { title: "用户登录" },
    },
    {
      path: "/user",
      element: <User />,
      meta: { title: "个人中心" },
    },
    {
      path: "/hospital",
      element: <Hospital />,
      meta: { title: "医院管理" },
      children: [
        {
          path: "",
          element: <Navigate to="/hospital/register" />,
        },
        {
          path: "/hospital/register",
          element: <Register />,
          meta: { title: "预约挂号" },
        },
        {
          path: "/hospital/detail",
          element: <Detail />,
          meta: { title: "医院详情" },
        },
        {
          path: "/hospital/notice",
          element: <Notice />,
          meta: { title: "预约须知" },
        },
        {
          path: "/hospital/close",
          element: <Close />,
          meta: { title: "停诊信息" },
        },
        {
          path: "/hospital/query",
          element: <Query />,
          meta: { title: "预约查询" },
        },
      ],
    },
    {
      path: "/404",
      element: <Error />,
      meta: { title: "404" },
    },
  ];
  const element = useRoutes(routes);
  const location = useLocation();

  // 获取当前路由，添加文档标题
  getRouterMate(routes, location);

  return <Suspense fallback={<Loading />}>{element}</Suspense>;
};

export default RouteView;
