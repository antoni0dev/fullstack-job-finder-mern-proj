import { PATHS } from '@/lib/constants';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div>
      <Link to={PATHS.login}>Go to Login</Link>
    </div>
  );
};

export default RegisterPage;
