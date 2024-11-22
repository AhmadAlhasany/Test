export interface productType {
    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    tags: string[]
    brand: string
    sku: string
    weight: number
    dimensions: Dimensions
    warrantyInformation: string
    shippingInformation: string
    availabilityStatus: string
    reviews: Review[]
    returnPolicy: string
    minimumOrderQuantity: number
    meta: Meta
    images: string[]
    thumbnail: string
  }
  
  export interface Dimensions {
    width: number
    height: number
    depth: number
  }
  
  export interface Review {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
  }
  
  export interface Meta {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
  }
  
  export interface productsProps{
    products:productType[]
    isLoading:boolean
  }

  export interface prodcutCardProps{
    id: number
    title: string
    price: number
    thumbnail: string
  }

  export interface productDeatilsProps{
    products:productType[]
  }

  export interface priceTagProps{
    price: number
    discountPercentage: number
    stock: number
  }