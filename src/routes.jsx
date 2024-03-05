import Landing from './views/landing/Landing'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectInfo from "./views/ProjectInfo/ProjectInfo";



function RoutesProvi() {

  const router = createBrowserRouter([

    { path: "/", element: <Landing/>},
    { path: "/project", element: <ProjectInfo/>}

  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default RoutesProvi;