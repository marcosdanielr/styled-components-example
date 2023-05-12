import { InputHTMLAttributes } from 'react';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Input({ label, ...rest }: InputProps) {

  return (
    <S.Container>
      {label && <span>{label}</span>}
      <input {...rest} />
    </S.Container>
  )
}