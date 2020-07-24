import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { SelectCustomize } from './styles';

function Select({ name, options, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, registerField } = useField(name);
  useEffect(() => {
    console.log('teste', selectRef.current);
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <SelectCustomize {...rest} name={name} ref={selectRef}>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </SelectCustomize>
  );
}

export default Select;
