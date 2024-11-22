import { productDeatilsProps } from '../../models/products';
import { useParams } from 'react-router-dom';
import './productDetails.css'
import PriceTag from '../../components/productDetails/PriceTag';

function ProductDetails(props: productDeatilsProps){
    
    const {products} = props, {id} = useParams();
    let product = products.find((product)=> product.id == Number(id));
    
    if(!product)
        return null
    
    return (
    <div className='productDetails'>

        <div className='leftImage'>
            <img src={product.thumbnail} alt="productPic" />
        </div>

        <div className='productOverview'>
            <h2>{product.title}</h2>
            <span>Product ID: {product.id}</span>
            <p>{product.description}</p>
            <PriceTag price={product.price} discountPercentage={product.discountPercentage} stock={product.stock} />
            <button className='addToCart'>Add to Cart</button>
        </div>

    </div>
    );
};

export default ProductDetails;

