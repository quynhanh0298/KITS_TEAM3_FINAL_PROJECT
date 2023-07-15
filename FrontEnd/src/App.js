import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";

import PricePage from "./pages/PricePage";
import HelpPage from "./pages/HelpPage";
import CourseDetail from "pages/CourseDetails";
import { DashboardLayout } from "components/Dashboard/DashboardLayout";
import DashboardPage from "pages/DashboardPage";
import MessagesPage from "pages/MessagesPage";
import SessionsPage from "pages/SessionsPage";
import HourOfPurchaseHistoryPage from "pages/HourOfPurchaseHistoryPage";
import MyTutorsPage from "pages/MyTutorsPage";
import MyClassesPage from "pages/MyClassesPage";
import SignUp from "pages/SignUp";
import LogIn from "pages/student/LogIn";
import ForgotPassword from "pages/student/ForgotPassword";
import ResetPassword from "pages/student/ResetPassword";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="pricing" element={<PricePage />} />
            <Route path="help" element={<HelpPage />} />
            <Route path="coursedetails" element={<CourseDetail />} />
          </Route>
          <Route path="/">
            <Route path="sign-up" element={<SignUp />} />
            <Route path="log-in" element={<LogIn />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
          <Route path="/mainboard" element={<DashboardLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="messages" element={<MessagesPage />} />
            <Route path="sessions" element={<SessionsPage />} />
            <Route
              path="hour-purchase-history"
              element={<HourOfPurchaseHistoryPage />}
            />
            <Route path="my-tutors" element={<MyTutorsPage />} />
            <Route path="my-classes" element={<MyClassesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
