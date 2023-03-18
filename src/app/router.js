import Home from '../pages/Home';
import Api from '../pages/Api';
import I18next from '../pages/I18next';
import Redux from '../pages/Redux';
import RouterV6 from '../pages/RouterV6';


const RouteList = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/api',
        element: <Api />
    },
    {
        path: '/i18next',
        element: <I18next />
    },
    {
        path: '/redux',
        element: <Redux />
    },
    {
        path: '/router/:id',
        element: <RouterV6 />
    }
];
export default RouteList;
