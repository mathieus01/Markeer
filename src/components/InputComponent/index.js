import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Input, Error } from './styles';

export default function InputComponent({ name, type, pattern, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Input type={type} ref={inputRef} {...rest} className='form-control' pattern={pattern} />
      {error && <Error className='error text-danger'>{error}</Error>}
    </>
  );
}
