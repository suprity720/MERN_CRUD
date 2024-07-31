import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import NewBlog from "./components/NewBlog";
import ShowBlog from "./components/ShowBlog";
import EditBlog from "./components/EditBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/new", element: <NewBlog /> },
      { path: "/blogs/:id", element: <ShowBlog /> },
      { path: "/blogs/:id/edit", element: <EditBlog /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
