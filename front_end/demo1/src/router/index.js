import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Manage from "@/pages/Manage";
import Upload from "@/pages/Upload";
import MailLayout from "../pages/Layout";
import Detail from "@/pages/Detail";

const router = createBrowserRouter([
    {
        path: '/',
        element: (
                <MailLayout/>
        ),
        children: [
            {
                index:true,
                element:<Home />,
            },
            {
                path: 'manage',
                element:<Manage/>,
            },
            {
                path:'upload',
                element:<Upload/>
            },
        ],
    },{
        path:'/detail',
        element: (
            <Detail/>
        )
    }
])

export default router