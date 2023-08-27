import { PATHS } from '@/lib/constants';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <Link to={PATHS.home}>Go to home</Link>
      <Link to={PATHS.register}>Go to reigstration</Link>
    </div>
  );
};

export default LoginPage;
