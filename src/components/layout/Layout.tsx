
import { Outlet } from 'react-router-dom'
import AppBar from '../appBar/AppBar'
import useAuthCheck from '../../hooks/useAuthCheck'

function Layout() {
  const {userAuthenticated} = useAuthCheck()
  return (
    <>
        <AppBar userAuthenticated={userAuthenticated}/>
        <Outlet context={userAuthenticated}/>
    </>
  )
}

export default Layout