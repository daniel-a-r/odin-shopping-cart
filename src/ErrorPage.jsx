import { Link } from 'react-router';

const ErrorPage = ({ message = null }) => {
  return (
    <>
      <h1>{message ? message : '404 Not Found'}</h1>
      <h2>
        <Link>Go Home</Link>
      </h2>
    </>
  );
};

export default ErrorPage;
