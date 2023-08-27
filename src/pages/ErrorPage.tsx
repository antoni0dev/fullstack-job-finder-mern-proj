import { PATHS } from '@/lib/constants';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h1>Error page</h1>
      <Link to={PATHS.home}>Go back home</Link>
    </div>
  );
};

export default ErrorPage;
