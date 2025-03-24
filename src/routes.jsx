import App from './App.jsx';
import Shop from './Shop.jsx';
import Home from './Home.jsx';
import Loading from './Loading.jsx';
import ErrorPage from './ErrorPage.jsx';
import { shopLoader } from './loaders.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/shop',
        element: <Shop />,
        loader: shopLoader,
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
];

export default routes;
