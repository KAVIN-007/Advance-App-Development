import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Admin from "./components/Admin/admin";
import User from "./components/User/user";

const Login = React.lazy(() => import("./components/Login/Login"));
const ForgotPassword = React.lazy(() =>
  import("./components/Forgot_Password/Forgot_password")
);
const ForgotEmail = React.lazy(() =>
  import("./components/Forgot_Password/Forgot_email")
);
const Landing = React.lazy(() => import("./components/Landing/landing"));
const RegisterPassword = React.lazy(() =>
  import("./components/Register/Register_password")
);
const RegisterEmail = React.lazy(() =>
  import("./components/Register/Register_email")
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Landing />
                  <Footer />
                </>
              }
            />
            <Route
              path="/user"
              element={
                <>
                  <Navbar />
                  <User />
                  <Footer />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register/password" element={<RegisterPassword />} />
            <Route path="/register/email" element={<RegisterEmail />} />
            <Route path="/forgot/email" element={<ForgotEmail />} />
            <Route path="/forgot/password" element={<ForgotPassword />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
