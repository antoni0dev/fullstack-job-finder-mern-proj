import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { LoginType } from '@/lib/models/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Message } from '@/components';
import Wrapper from '@/assets/wrappers/RegisterAndLoginPage';
import { loginSchema } from '@/lib/models/loginSchema';
import { PATHS } from '@/lib/constants';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
  });

  console.log(isValid);

  const onSubmit: SubmitHandler<LoginType> = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h4>Login</h4>
        <div className="form-row">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input {...register('email')} type="email" className="form-input" />
          {errors.email && errors.email.message && (
            <Message variant="error" message={errors.email.message} />
          )}
        </div>

        <div className="form-row">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            {...register('password')}
            type="password"
            className="form-input"
          />
          {errors.password && errors.password.message && (
            <Message variant="error" message={errors.password.message} />
          )}
        </div>

        <button className="btn" type="submit" disabled={!isValid || !isDirty}>
          Submit
        </button>
        <p>
          New to this?{' '}
          <Link to={PATHS.register}>
            <span>Register</span>
          </Link>{' '}
          now.
        </p>
      </form>
    </Wrapper>
  );
};

export default LoginPage;
