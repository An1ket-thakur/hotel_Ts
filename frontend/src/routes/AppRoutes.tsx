import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/app/home/Page";
import SignupPage from "@/app/auth/Signup";
import LoginPage from "@/app/auth/Login";
import NotFound from "@/app/NotFound/Page";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
