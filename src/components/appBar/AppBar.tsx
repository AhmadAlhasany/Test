import { Link, useNavigate } from "react-router-dom"
import Logo from "../logo/Logo"
import './appBar.css'

function AppBar({userAuthenticated}:{userAuthenticated:boolean}) {
    const navigate = useNavigate()
  return (
    <nav>
        <Logo/>
        <div className="navButtons">
            <Link className="link" to='./'>Products</Link>
            {userAuthenticated ? 
                <>
                    <Link className="link" to='./profile'>Profile</Link>
                    <button onClick={()=>{
                        localStorage.removeItem('authToken');
                        navigate('/login', {replace: true})
                    }}>LogOut</button>    
                </>
            :
                <Link className="button" to='./login' >LogIn</Link>
            }
        </div>
    </nav>
  )
}

export default AppBar