import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { Button } from "./components/Button"
import { Login } from "./pages/Login"
import { darkTheme } from "./styles/themes/dark"
import { lightTheme } from "./styles/themes/light"

function App() {
  const [isLightMode, setIsLightMode] = useState<boolean>(true);

  return (
    <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
      <Button onClick={() => setIsLightMode(!isLightMode)}>{isLightMode ? 'Dark mode' : 'Light mode'}</Button>
      <Login />
    </ThemeProvider>
  )


}

export default App
