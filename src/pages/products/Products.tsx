import ProductCard from '../../components/products/ProductCard';
import { useProducts } from '../../hooks/useProducts'
import { productsProps } from '../../models/products';
import './products.css'

export default function Products(props:productsProps) {
  const {isLoading, products} = props
  return (
    <div className='products'>
      {isLoading && <h3 className=' col-span-full text-center text-2xl '>Loading...</h3>}
      {products.map((product)=>{
        return(
          <ProductCard  key={product.id} id={product.id} thumbnail={product.thumbnail} price={product.price} title={product.title}/>
        )
      })}
    </div>
  )
}
