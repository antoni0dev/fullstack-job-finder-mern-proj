import { PATHS } from '@/lib/constants';
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import Wrapper from '@/assets/wrappers/ErrorPage';
import img from '/images/not-found.svg';

const ErrorPage = () => {
  const error = useRouteError();

  return isRouteErrorResponse(error) && error.status === 404 ? (
    <Wrapper>
      <div>
        <img src={img} alt="error image for 404 errors" />
        <h3>Ohh! Page not found</h3>
        <p>We can&apos;t find the page you are looking for...</p>
        <Link to={PATHS.dashboard}>Go to dashboard</Link>
      </div>
    </Wrapper>
  ) : (
    <h3>Something went wrong</h3>
  );
};

export default ErrorPage;
