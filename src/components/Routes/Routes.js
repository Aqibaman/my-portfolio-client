import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main";
import Home from "../Home/Home/Home";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import AboutMe from "../Shared/AboutMe";
import Blog from "../Shared/Blog";
import ErrorPage from "../Shared/ErrorPage";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/projects/:id',
                element: <ProjectDetails></ProjectDetails>,
                loader: ({ params }) => fetch(`https://my-portfolio-server-ecru.vercel.app/projects/${params.id}`)
            },
            {
                path: '/about',
                element: <AboutMe></AboutMe>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;