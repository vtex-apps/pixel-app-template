export interface PixelMessage extends MessageEvent {
  data:
    | ProductViewData
    | ProductClickData
    | OrderPlacedData
    | PageViewData
    | ProductImpressionData
    | AddToCartData
    | RemoveToCartData
}

export interface EventData {
  event: string
  eventName: string
  currency: string
}

export interface PageViewData extends EventData {
  event: 'pageView'
  eventName: 'vtex:pageView'
  pageTitle: string
  pageUrl: string
  referrer: string
}

export interface AddToCartData extends EventData {
  event: 'addToCart'
  eventName: 'vtex:addToCart'
  items: CartItem[]
}

export interface RemoveToCartData extends EventData {
  event: 'removeFromCart'
  eventName: 'vtex:removeFromCart'
  items: CartItem[]
}

export interface OrderPlacedData extends Order, EventData {
  event: 'orderPlaced'
  eventName: 'vtex:orderPlaced'
}

export interface ProductViewData extends EventData {
  event: 'productView'
  eventName: 'vtex:productView'
  product: Product
}

export interface ProductClickData extends EventData {
  event: 'productClick'
  eventName: 'vtex:productClick'
  product: Product
}

export interface ProductImpressionData extends EventData {
  event: 'productImpression'
  eventName: 'vtex:productImpression'
  impressions: Impression[]
  product?: Product // deprecated, use impressions list!
  position?: number // deprecated, use impressions list!
  list: string
}

interface CartItem {
  skuId: string
  variant: string
  price: number
  name: string
  quantity: number
  productRefId: string
  brand: string
  category: string
}

export interface Order {
  currency: string
  accountName: string
  orderGroup: string
  salesChannel: string
  coupon: string
  visitorType: string
  visitorContactInfo: string[]
  visitorAddressState: string
  visitorAddressCountry: string
  visitorAddressPostalCode: string
  transactionId: string
  transactionDate: string
  transactionAffiliation: string
  transactionTotal: number
  transactionShipping: number
  transactionSubtotal: number
  transactionDiscounts: number
  transactionTax: number
  transactionCurrency: string
  transactionPaymentType: PaymentType[]
  transactionShippingMethod: ShippingMethod[]
  transactionProducts: ProductOrder[]
  transactionPayment: {
    id: string
  }
}

export interface Impression {
  product: Product
  position: number
}

interface PaymentType {
  group: string
  paymentSystemName: string
  installments: number
  value: number
}

interface ShippingMethod {
  itemId: string
  selectedSla: string
}

interface ProductOrder {
  id: string
  name: string
  sku: string
  skuRefId: string
  skuName: string
  productRefId: string
  ean: string
  slug: string
  brand: string
  brandId: string
  seller: string
  sellerId: string
  category: string
  categoryId: string
  categoryTree: string[]
  categoryIdTree: string[]
  priceTags: PriceTag[]
  originalPrice: number
  price: number
  sellingPrice: number
  tax: number
  quantity: number
  components: any[]
  measurementUnit: string
  unitMultiplier: number
}

interface PriceTag {
  identifier: string
  isPercentual: boolean
  value: number
}

interface Product {
  brand: string
  categoryId?: string // inconsistency
  categories: string[]
  productId: string
  productName: string
  selectedSku?: string // inconsistency
  items: Item[]
  sku: Item
  [key: string]: any
}

interface Item {
  itemId: string
  name: string
  seller?: Seller
  [key: string]: any
}

interface Seller {
  commertialOffer: CommertialOffer
  [key: string]: any
}

interface CommertialOffer {
  Price: number
  [key: string]: any
}
