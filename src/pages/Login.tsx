import { useTheme } from 'styled-components'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import * as S from './styles'

export function Login() {
  const theme = useTheme();

  return (
    <S.LoginContainer>
      <Input label='Login' placeholder='Type your login' />
      <Input label='Password' placeholder='Type your password' type='password' />
      <Button background={theme?.blue}>Login</Button>
    </S.LoginContainer>
  )
}