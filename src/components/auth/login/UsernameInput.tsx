import React, { useEffect, useRef } from 'react'
import user from "../../../assets/auth/user.svg"
import { unsernameInputProps } from '../../../models/login';

function UsernameInput(props:unsernameInputProps) {
    const {handleChange, username} = props

    const usernameInputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
      if (usernameInputRef.current) {
        usernameInputRef.current.focus();
      }
    }, []);

  return (
    <div className="input username">
        <img src={user} alt="username" className="icon" />
        <input
        type="text"
        value={username}
        onChange={(e) => handleChange(e)}
        name="username"
        id="username"
        placeholder="Username"
        ref={usernameInputRef}
        />
    </div>
  )
}

export default UsernameInput