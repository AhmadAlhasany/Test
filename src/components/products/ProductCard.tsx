import { Link } from 'react-router-dom'
import cart from '../../assets/products/cart.svg'
import { prodcutCardProps } from '../../models/products'

function ProductCard(props:prodcutCardProps) {

    const {thumbnail, id, price, title} = props

  return (
    <div className='productCard'>
        <img src={thumbnail} alt="product" />
        <div className='productInfoWra'>
            <div className='productInfo'>
                <h6>{title}</h6>
                <p>${price}</p>
            </div>
            <Link to={`./${id}`}>
                <img src={cart} alt="cart" />
            </Link>
        </div>
    </div>
  )
}

export default ProductCard