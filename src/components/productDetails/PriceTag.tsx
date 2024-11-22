import { priceTagProps } from "../../models/products"

function PriceTag(props: priceTagProps) {
    const {discountPercentage, price, stock} = props
    const discountedPrice = discountPercentage  ? price * (1 - discountPercentage / 100) : null;

  return (
    <div className='priceTag'>
        <div>
            <span className="text-lg sm:text-xl font-semibold">Price:</span>
            <span className="text-xl sm:text-2xl font-bold text-[#E5AA5C]">
            ${discountedPrice ? discountedPrice.toFixed(2) : price.toFixed(2)}
            </span>
        </div>
        {discountPercentage && (
            <div>
                <span className="text-sm">Original Price:</span>
                <span className="text-sm line-through">${price.toFixed(2)}</span>
            </div>
        )}
        {discountPercentage && (
            <div>
                <span className="text-sm">Discount:</span>
                <span className="text-sm font-semibold text-green-600">{discountPercentage}% OFF</span>
            </div>
        )}
        <div>
            <span className="text-sm">Stock:</span>
            <span className="text-sm font-semibold">{stock} units</span>
        </div>
    </div>
    )
}

export default PriceTag