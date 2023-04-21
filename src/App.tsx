import "./App.css";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { MainLayout } from "./MainLayout";
import { ScorePage, SignUp } from "./pages";

function App() {
  const router: RouteObject = {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Navigate to="/signup" /> },
      { path: "signup", element: <SignUp /> },
      { path: "score", element: <ScorePage /> },
    ],
  };

  const routing = useRoutes([router]);

  return <>{routing}</>;
}

export default App;
