import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { RegistrationType } from '@/lib/models/registrationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Message } from '@/components';
import Wrapper from '@/assets/wrappers/RegisterAndLoginPage';
import { registrationSchema } from '@/lib/models/registrationSchema';
import { PATHS } from '@/lib/constants';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm<RegistrationType>({
    resolver: zodResolver(registrationSchema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<RegistrationType> = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h4>Register</h4>
        <div className="form-row">
          <label className="form-label" htmlFor="firstName">
            First Name
          </label>
          <input
            {...register('firstName')}
            type="text"
            className="form-input"
          />
          {errors.firstName && errors.firstName.message && (
            <Message variant="error" message={errors.firstName.message} />
          )}
        </div>

        <div className="form-row">
          <label className="form-label" htmlFor="lastName">
            Last Name
          </label>
          <input {...register('lastName')} type="text" className="form-input" />
          {errors.lastName && errors.lastName.message && (
            <Message variant="error" message={errors.lastName.message} />
          )}
        </div>

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
          Submitx
        </button>
        <p>
          Already have an account{' '}
          <Link to={PATHS.login}>
            <span>Login</span>
          </Link>{' '}
          now.
        </p>
      </form>
    </Wrapper>
  );
};

export default RegisterPage;
