import logo from '../../assets/appBar/cart.svg'
import './logo.css'
function Logo() {
  return (
    <div className='logo-con'>
        <img src={logo} alt='logo'/>
        <h2>SPARK</h2>
    </div>
  )
}

export default Logo