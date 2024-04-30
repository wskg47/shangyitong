import React, { Suspense } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import routes from "./routes";
import Loading from "@/components/Loading";

function Element(props: any) {
  let { element: Component } = props;
  const navigate = useNavigate(),
    location = useLocation(),
    params = useParams(),
    [usp] = useSearchParams();
  return (
    <Component
      navigate={navigate}
      location={location}
      params={params}
      usp={usp}
    ></Component>
  );
}

function createRouter(routes: any) {
  return routes.map((route: any) => {
    const { path, children } = route;
    return (
      <Route key={path} path={path} element={<Element {...route} />}>
        {Array.isArray(children) && createRouter(children)}
      </Route>
    );
  });
}
const RouterView = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>{createRouter(routes)}</Routes>
      </Suspense>
    </>
  );
};

export default RouterView;
