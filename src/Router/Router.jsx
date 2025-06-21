import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "../components/Home";
import SingleLawerDetails from "../components/SingleLawerDetails";
import SeeAppoin from "../components/SeeAppoin";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
      path:"/my-booking",
      loader:()=>fetch('/Lawer.json'),
      element:<SeeAppoin></SeeAppoin>
  },

  {
    path:"/singleLawer/:id",
    loader:()=>fetch('/Lawer.json'),
    element:<SingleLawerDetails></SingleLawerDetails>
  },
  {
     path:"/blog",
     element:<Blog></Blog>
  },
  {
    path:"/*",
    element:<ErrorPage></ErrorPage>
  }
]);

export default router