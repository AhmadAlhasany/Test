import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthCheck = () => {
  const navigate = useNavigate();
  const [userAuthenticated,setUserAuthenticated] = useState(false);
  
  useEffect(() => {
    console.log('running')
    const token = localStorage.getItem('authToken');
    if (token) 
        setUserAuthenticated(true);
    else
        setUserAuthenticated(false)
    }, [navigate]);
    return {userAuthenticated}

};

export default useAuthCheck;
