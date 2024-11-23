import { useNavigate, useOutletContext } from 'react-router-dom'
import { useProfile } from '../../hooks/useProfile'
import './profile.css'

export default function Profile() {
  const navigate = useNavigate()
  const {isLoading, profile} = useProfile()
  const profileAuthenticated = useOutletContext()
  
  if(!profileAuthenticated){
    navigate('/login',{replace: true});
    return null
  } 

  return (
    <div className="profile">
      {isLoading ? <h3 className='col-span-full text-center text-2xl self-start'>Loading...</h3> :
        <div className='profileCard'>
          
          <div className="picAndNameWra">
            <img 
              src={profile.image} 
              alt={profile.username} 
            />
            <h2>{profile.username}</h2>
          </div>

          <div className="userInfo">
            <div>
              <p className="title">Email</p>
              <p className="value">{profile.email}</p>
            </div>
            <div>
              <p className="title">Age</p>
              <p className="value">{profile.age} years old</p>
            </div>
            <div>
              <p className="title">Phone</p>
              <p className="value">{profile.phone}</p>
            </div>
            
            <button
              onClick={()=>{
                localStorage.removeItem('authToken');
                navigate('/login',{replace: true});
              }}
              className="profileLogoutButton"
            >
              Logout
            </button>
          </div>

        </div>
      }
    </div>
  )
}

