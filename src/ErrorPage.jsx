const ErrorPage = ({ message = null }) => {
  return <h1>{message ? message : '404'}</h1>;
};

export default ErrorPage;
