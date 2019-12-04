export interface PixelMessage extends MessageEvent {
  data:
    | ProductViewData
    | ProductClickData
    | OrderPlacedData
    | PageViewData
    | ProductImpressionData
    | AddToCartData
    | RemoveToCartData
    | HomePageInfo
    | ProductPageInfoData
    | SearchPageInfoData
}

export interface EventData {
  event: string
  eventName: string
  currency: string
}

export interface PageInfoData extends EventData {
  event: 'pageInfo'
  eventName: 'vtex:pageInfo'
  accountName: string
  pageTitle: string
  pageUrl: string
}

export interface HomePageInfo extends PageInfoData {
  eventType: 'homeView'
}

export interface ProductPageInfoData extends PageInfoData {
  eventType: 'productView'
}

export interface SearchPageInfoData extends PageInfoData {
  eventType:
    | 'internalSiteSearchView'
    | 'categoryView'
    | 'departmentView'
    | 'emptySearchView'
  category?: CategoryMetaData
  department?: DepartmentMetaData
  search?: SearchMetaData
}

interface CategoryMetaData {
  id: string
  name: string
}

interface DepartmentMetaData {
  id: string
  name: string
}

interface SearchMetaData {
  term: string
  category: CategoryMetaData
  results: number
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
  product: ProductDetail
}

export interface ProductClickData extends EventData {
  event: 'productClick'
  eventName: 'vtex:productClick'
  product: ProductSummary
}

export interface ProductImpressionData extends EventData {
  event: 'productImpression'
  eventName: 'vtex:productImpression'
  impressions: Impression[]
  product?: ProductSummary // deprecated, use impressions list!
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
  product: ProductSummary
  position: number
}

export interface PaymentType {
  group: string
  paymentSystemName: string
  installments: number
  value: number
}

export interface ShippingMethod {
  itemId: string
  selectedSla: string
}

export interface ProductOrder {
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

export interface PriceTag {
  identifier: string
  isPercentual: boolean
  value: number
}

interface Product {
  brand: string
  brandId: string
  categories: string[]
  productId: string
  productName: string
  productReference: string
  linkText: string
  items: Item[]
}

export interface ProductSummary extends Product {
  sku: Item
}

export interface ProductDetail extends Product {
  categoryId: string
  categoryTree: { id: string; name: string }[]
  selectedSku: Item
}

export interface Item {
  itemId: string
  name: string
  ean?: string // TODO: provide this info at productImpression
  referenceId: { Key: string; Value: string }
  seller?: Seller
  sellers: Seller[]
}

export interface Seller {
  commertialOffer: CommertialOffer
  sellerId: string
}

export interface CommertialOffer {
  Price: number
  ListPrice: number
  AvailableQuantity: number
}
