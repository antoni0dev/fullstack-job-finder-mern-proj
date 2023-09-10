import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { RegistrationType } from '@/lib/models/registrationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Wrapper from '@/assets/wrappers/RegisterAndLoginPage';
import { registrationSchema } from '@/lib/models/registrationSchema';
import { PATHS } from '@/lib/constants';
import FormRow from '@/components/FormRow';

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
        <FormRow
          label="First Name"
          name="firstName"
          register={register}
          error={errors.firstName}
        />
        <FormRow
          label="Last Name"
          name="lastName"
          register={register}
          error={errors.lastName}
        />

        <FormRow
          label="Age"
          name="age"
          type="number"
          register={register}
          error={errors.age}
        />

        <FormRow
          label="Email"
          name="email"
          register={register}
          error={errors.email}
        />

        <FormRow
          label="Location"
          name="location"
          register={register}
          error={errors.location}
        />

        <FormRow
          label="Password"
          name="password"
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
        <p>
          Already have an account?{' '}
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
