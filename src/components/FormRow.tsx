import { FC } from 'react';
import { Controller, Control, FieldError } from 'react-hook-form';
import { RegistrationType } from '@/lib/models/registrationSchema';
import { Message } from '.';

interface Props {
  label?: string;
  name: keyof RegistrationType;
  type: string;
  control: Control<RegistrationType>;
  required: boolean;
  error: FieldError | undefined;
}

const camelCaseToLabel = (str: string) => {
  return str.split(/(?=[A-Z])/).join(' ');
};

const FormRow: FC<Props> = ({
  label,
  name,
  type,
  control,
  required,
  error,
}) => {
  const finalLabel = label || camelCaseToLabel(name);

  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {finalLabel}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            {...field}
            type={type}
            required={required}
            className="form-input"
          />
        )}
      />
      {error && error.message && (
        <Message variant="error" message={error.message} />
      )}
    </div>
  );
};

export default FormRow;
