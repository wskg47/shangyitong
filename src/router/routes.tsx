import { lazy, Suspense } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Loading from "@/components/Loading";

const Home = lazy(() => import("@/view/Home"));
const Login = lazy(() => import("@/view/Login"));
const Hospital = lazy(() => import("@/view/Hospital"));
const Register = lazy(() => import("@/view/Hospital/Register"));
const Detail = lazy(() => import("@/view/Hospital/Detail"));
const User = lazy(() => import("@/view/User"));
const Error = lazy(() => import("@/view/404"));

const RouteView = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/user",
      element: <User />,
    },
    {
      path: "/hospital",
      element: <Hospital />,
      children: [
        {
          path: "",
          element: <Navigate to="register" />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "detail",
          element: <Detail />,
        },
      ],
    },
    {
      path: "/404",
      element: <Error />,
    },
  ]);
  return <Suspense fallback={<Loading />}>{element}</Suspense>;
};

export default RouteView;
