import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/layout/Layout";
import App from "./src/App";
import Create from "./src/pages/Create";
import Update from "./src/pages/Update";
import SinglePages from "./src/pages/SinglePages";

export const router = createBrowserRouter([
    {path:"/",
    element:<Layout />,
    children:[
        {path:"/", element:<App />},
        {path:"/create", element:<Create />},
        {path:"/update/:id", element:<Update />},
        {path:"/single/:id", element:<SinglePages />}
    ]
    }
])