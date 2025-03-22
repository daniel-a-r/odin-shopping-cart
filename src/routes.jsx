import App from './App.jsx';
import Shop from './Shop.jsx';
import ErrorPage from './ErrorPage.jsx';

const routes = [
  {
    path: '/',
    Component: App,
    errorElement: <ErrorPage />,
  },
  {
    path: '/shop',
    Component: Shop,
  },
];

export default routes;
