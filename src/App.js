import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Appointment from "./pages/Appointment/Appointment";
import PatientLogin from "./pages/Patient/PatientLogin/PatientLogin";
import PatientSignUp from "./pages/PatientSignup/PatientSignUp";
import PatientDashboard from "./pages/Patient/PatientDashboard/PatientDashboard";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import DoctorLogin from "./pages/Doctor/DoctorLogin";
import AdminLogin from "./pages/Admin/AdminLogin";
import { Navigate } from "react-router-dom";
import ForgotPassword from "./pages/Patient/PatientLogin/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/Patient/PatientLogin/ForgotPassword/ResetPass";
import IsAuthenticated from "./guard/IsAuthenticated";

const App = () => {
  const storedData = JSON.parse(localStorage.getItem("data"));

  return (
    <Routes>
      <Route
        path="/"
        element={
          <IsAuthenticated role={storedData?.role}>
            <Home />
          </IsAuthenticated>
        }
      />
      <Route
        path="/PatientLogin"
        element={
          <IsAuthenticated role={storedData?.role}>
            <PatientLogin />
          </IsAuthenticated>
        }
      />
      <Route path="/PatientLogin/ForgotPassword" element={<ForgotPassword />} />
      <Route
        path="/PatientLogin/ForgotPassword/ResetPassword/:token"
        element={<ResetPassword />}
      />

      <Route
        path="/DoctorLogin"
        element={
          <IsAuthenticated role={storedData?.role}>
            <DoctorLogin />
          </IsAuthenticated>
        }
      />
      <Route
        path="/AdminLogin"
        element={
          <IsAuthenticated role={storedData?.role}>
            <AdminLogin />
          </IsAuthenticated>
        }
      ></Route>

      {/* patient conditional rendering */}

      {storedData?.data.token && storedData.role === "Patient" ? (
        <Route path="/PatientLogin/Dashboard/" element={<PatientDashboard />} />
      ) : (
        <Route
          path="/PatientLogin/Dashboard/"
          element={<Navigate to="/PatientLogin" />}
        />
      )}

      {storedData?.data.token && storedData.role === "Patient" ? (
        <Route
          path="/PatientLogin/Dashboard/Appointment"
          element={<Appointment />}
        />
      ) : (
        <Route
          path="/PatientLogin/Dashboard/Appointment"
          element={<Navigate to="/PatientLogin" />}
        />
      )}

      {/* doctor conditional rendering */}

      {storedData?.data.token && storedData.role === "Doctor" ? (
        <Route path="/DoctorLogin/Dashboard/" element={<DoctorDashboard />} />
      ) : (
        <Route
          path="/DoctorLogin/Dashboard/"
          element={<Navigate to="/DoctorLogin" />}
        />
      )}
      {/* admin conditional rendering */}

      {storedData?.data.token && storedData.role === "Admin" ? (
        <Route path="/AdminLogin/Dashboard/" element={<AdminDashboard />} />
      ) : (
        <Route
          path="/AdminLogin/Dashboard/"
          element={<Navigate to="/AdminLogin" />}
        />
      )}

      <Route path="/PatientSignUp" element={<PatientSignUp />}></Route>
    </Routes>
  );
};

export default App;
