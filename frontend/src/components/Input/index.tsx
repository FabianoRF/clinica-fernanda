import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  labelTitle?: string;
  containerStyle?: object;
  isGroup?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  labelTitle,
  isGroup = false,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isGroup={isGroup}>
      <span>{labelTitle}</span>
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
};

export default Input;
