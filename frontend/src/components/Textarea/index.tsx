import React, { TextareaHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  labelTitle?: string;
  containerStyle?: object;
  isGroup?: boolean;
}

const TextArea: React.FC<InputProps> = ({
  name,
  labelTitle,
  isGroup = false,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

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
      <textarea ref={inputRef} defaultValue={defaultValue} rows={7} {...rest} />
    </Container>
  );
};

export default TextArea;
