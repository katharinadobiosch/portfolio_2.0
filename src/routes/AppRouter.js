import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div></div>,
    },

    // {
    //     path: "/",
    //     element: (
    //         <div>
    //             <h1>Hello World</h1>
    //             <Link to="about">About Us</Link>
    //         </div>
    //     ),
    // },
    // {
    //     path: "about",
    //     element: <div>About</div>,
    // },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
