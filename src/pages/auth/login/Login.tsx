
import shopping from '../../../assets/auth/shopping.webp'
import UsernameInput from "../../../components/auth/login/UsernameInput";
import PasswordInput from "../../../components/auth/login/PasswordInput";
import { useLogin } from "../../../hooks/useLogin";
import "./login.css";

function Login() {
  const { isLoading, formData, handleChange, handleLogin } = useLogin()
  
  return (
    <div className="loginWra">
      <div className="login">

        <div className="loginCard">
          <h3 className="header3">Get full access to the web</h3>
          <form onSubmit={(e)=>handleLogin(e)}>
            <div className="textInputsWra">  
              <UsernameInput username={formData.username} handleChange={handleChange}/>
              <PasswordInput password={formData.password} handleChange={handleChange}/>
              <div className='rememberMe'>
                <input type="checkbox" checked={formData.rememberMe} onChange={(e)=>handleChange(e)} name="rememberMe" id="rememberMe" />
                <label htmlFor="rememberMe">Remeber me</label>
              </div>
            </div>
            <button type="submit" className="customButton" disabled={!(formData.password && formData.username) || isLoading}>
              Login
            </button>
          </form>
        </div>

        <div className="rightImage">
          <img src={shopping} alt="shoppingImage" />
        </div>

      </div>
    </div>
  );
}

export default Login;
