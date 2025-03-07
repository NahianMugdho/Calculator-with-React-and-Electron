import { createHashRouter } from "react-router-dom";
import Calculator from "../Calculator/Calculator";
import Layout from "../Layout/Layout";

const router = createHashRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <h1>404</h1>,
        
    },
]);

export default router;