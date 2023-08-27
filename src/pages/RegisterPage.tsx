import { PATHS } from '@/lib/constants';
import { Link } from 'react-router-dom';
import Wrapper from '@/assets/wrappers/RegisterAndLoginPage';
import { Logo } from '@/components';
import FormRow from '@/components/FormRow';
import { useForm } from 'react-hook-form';
import {
  registrationSchema,
  RegistrationType,
} from '@/lib/models/registrationSchema';
import { zodResolver } from '@hookform/resolvers/zod';

const RegisterPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm<RegistrationType>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      location: '',
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = () => {
    console.log('You need to implement submit logic for reg form');
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow
          type="text"
          name="firstName"
          control={control}
          required
          error={errors.firstName}
        />
        <FormRow
          type="text"
          name="lastName"
          control={control}
          required
          error={errors.lastName}
        />
        <FormRow
          type="number"
          name="age"
          control={control}
          required
          error={errors.age}
        />
        <FormRow
          type="text"
          name="location"
          control={control}
          required
          error={errors.location}
        />
        <FormRow
          type="email"
          name="email"
          control={control}
          required
          error={errors.email}
        />
        <FormRow
          type="password"
          name="password"
          control={control}
          required
          error={errors.password}
        />
        <button className="btn" type="submit" disabled={!isValid || !isDirty}>
          Submit
        </button>
      </form>
      <p>
        Already a user? <Link to={PATHS.login}>Login</Link>
      </p>
    </Wrapper>
  );
};

export default RegisterPage;
