import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.black};
  }

  input {
    border: none;
    border-radius: 6px;
    padding: 1rem;
    outline: none;
    border: 1px solid ${({ theme }) => theme.black};
  }
`
