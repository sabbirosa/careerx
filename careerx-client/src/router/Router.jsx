import {
  createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Login from "../components/Login";
import EditJob from "../pages/EditJob";
import Home from "../pages/Home";
import MyJobs from "../pages/MyJobs";
import PostJob from "../pages/PostJob";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/",
          element: <Home/>,
        },
        {
            path: "/post-job",
            element: <PostJob/>,
        },
        {
          path: "/my-jobs",
          element: <MyJobs/>,
        },
        {
          path: "/edit-job/:id",
          element: <EditJob/>,
          loader: ({params}) => fetch(`http://localhost:4000/all-jobs/${params.id}`) 
        }

      ],
    },
  ]);

  export default router;