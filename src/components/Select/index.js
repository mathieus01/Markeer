import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { SelectCustomize, Error } from './styles';

function Select({ name, options, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <SelectCustomize {...rest} name={name} ref={selectRef}>
        <option disabled>Selecione</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectCustomize>
      {error && <Error className='error text-danger'>{error}</Error>}
    </>
  );
}

export default Select;
