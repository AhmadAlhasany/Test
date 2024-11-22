import lock from "../../../assets/auth/lock.svg"
import eye from "../../../assets/auth/eye.svg"
import eyeSlash from "../../../assets/auth/eyeSlash.svg"
import React, { useState } from 'react'
import { passwordInputProps } from "../../../models/login"

function PasswordInput(props: passwordInputProps) {
    const [showPassword, setShowPassword] = useState(false)
    const {password, handleChange} = props

  return (
    <div className="input">
        <img src={lock} alt="lock" className="icon" />
        <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => handleChange(e)}
            name="password"
            id="password"
            placeholder="Password"
        />
        <button type="button" className="eye" onClick={() => setShowPassword(prev => !prev)}>
        <img src={showPassword ? eyeSlash : eye} alt="eye" />
        </button>
    </div>
  )
}

export default PasswordInput