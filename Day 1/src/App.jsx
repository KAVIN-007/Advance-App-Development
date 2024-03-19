import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Forgot_password from "./components/Forgot_Password/Forgot_password";
import Landing from "./components/Landing/landing";
import Register_Password from "./components/Register/Register_password";
import Register_email from "./components/Register/Register_email";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login/>
              </>
            }
          ></Route>
          <Route
            path="/register/password"
            element={
              <>
                <Register_Password />
              </>
            }
          ></Route>
          <Route
            path="/register/email"
            element={
              <>
                <Register_email />
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Landing />
              </>
            }
          ></Route>
          <Route
            path="/forgot"
            element={
              <>
                <Forgot_password />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
