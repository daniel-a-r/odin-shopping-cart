import { Link, useRouteError } from 'react-router';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <h1>
        {error.status} {error.statusText}
      </h1>
      <h2>
        <Link>Go Home</Link>
      </h2>
    </>
  );
};

export default ErrorPage;
