import App from './App.jsx';
import Shop from './Shop.jsx';
import Home from './Home.jsx';
import ErrorPage from './ErrorPage.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/shop', element: <Shop /> },
    ],
  },
];

export default routes;
