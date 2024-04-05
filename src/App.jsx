import "./App.css";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Search from "./pages/search/Search";
import Create from "./pages/create/Create";
import MainLayout from "./layout/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
