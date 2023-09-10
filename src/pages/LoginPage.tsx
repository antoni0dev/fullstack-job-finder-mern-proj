import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { LoginType } from '@/lib/models/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Wrapper from '@/assets/wrappers/RegisterAndLoginPage';
import { loginSchema } from '@/lib/models/loginSchema';
import { PATHS } from '@/lib/constants';
import FormRow from '@/components/FormRow';
import { Logo } from '@/components';

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
        <Logo />

        <h4>Login</h4>
        <FormRow
          label="Email"
          name="email"
          type="email"
          register={register}
          error={errors.email}
        />

        <FormRow
          label="Password"
          name="password"
          type="password"
          register={register}
          error={errors.password}
        />

        <button
          className="btn btn-block"
          type="submit"
          disabled={!isValid || !isDirty}
        >
          Submit
        </button>
        <button className="btn btn-block">Explore the app</button>
        <p>
          New member?
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
