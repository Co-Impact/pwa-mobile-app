import { Outlet } from "react-router"
import { AuthProvider } from "../context/AuthContext"
// import { ToastContainer } from "react-toastify"
// import { useThemeContext } from "../theme/ThemeProvider";

const RootRoute = () => {
  // const {mode} = useThemeContext();
  return (
    <AuthProvider>
      <Outlet />
      {/*<ToastContainer theme={mode ? 'dark' : 'light'} />*/}
    </AuthProvider>
  )
}

export default RootRoute