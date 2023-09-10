import React from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { Message } from '.';

type FormRowProps<T extends FieldValues> = {
  label: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  type?: string;
  error?: { message?: string };
};

const FormRow = <T extends FieldValues>(
  props: FormRowProps<T>
): React.ReactElement => {
  const { label, register, name, type = 'text', error } = props;

  return (
    <div className="form-row">
      <label className="form-label" htmlFor={String(name)}>
        {label}
      </label>
      <input {...register(name)} type={type} className="form-input" />
      {error && error.message && (
        <Message variant="error" message={error.message} />
      )}
    </div>
  );
};

export default FormRow;
