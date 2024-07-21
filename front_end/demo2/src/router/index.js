import { createBrowserRouter } from 'react-router-dom'
import Content from '@/pages/Content';
import Home from '../pages/Home';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
    },
    {
        path:'/content',
        element:<Content></Content>
    }
])

export default router