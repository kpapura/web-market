import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";

const ProductPage = lazy(() => import("../pages/ProductPage/ProductPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<ProductPage/>} />
      </Route>
    </Routes>
  );
};
