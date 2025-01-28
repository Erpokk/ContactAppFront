import "./App.css";
import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute.jsx";
import { RestrictedRoute } from "./RestrictedRoute.jsx";
import { Layout } from "./Layout.jsx";
import { selectIsRefreshing } from "../redux/auth/selectors.js";

import { refreshUser } from "../redux/auth/operations.js";
import GoogleCallback from "./GoogleCallback/GoogleCallback.jsx";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegisterPage = lazy(() =>
  import("../pages/RegisterPage/RegisterPage.jsx")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>
      Refreshing....FIRS RENDER ON BACKEND RENDER.COM ON FREE VERSION CANT DELAY
      UP TO 50 SECNODS PLEASE WAIT
    </h1>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactPage />} />
          }
        />
        <Route path="/confirm-google-auth" element={<GoogleCallback />} />
      </Routes>
    </Layout>
  );
}

export default App;
