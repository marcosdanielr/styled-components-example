import { styled } from 'styled-components'

interface ButtonProps {
  background?: string
}

export const Button = styled.button<ButtonProps>`
  border: none;
  outline: none;
  padding: 1rem;
  background: ${({ background, theme }) => background ?? theme.cyan};
  color: ${({ theme }) => theme.white};
  font-size: 12px;
  cursor: pointer;
  border-radius: 6px;
`
