import Wrapper from '@/assets/wrappers/LandingPage';
import main from '/images/main.svg';
import { Link } from 'react-router-dom';
import { PATHS } from '@/lib/constants';
import { Logo } from '@/components';

const LandingPage = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app.
          </h1>
          <p>
            Simplify your job hunt. Organize applications, track opportunities,
            and visualize your progress. Revolutionize your search. Land that
            dream job faster!
          </p>
          <Link to={PATHS.register} className="btn register-link">
            Register
          </Link>
          <Link to={PATHS.login} className="btn">
            Login
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default LandingPage;
