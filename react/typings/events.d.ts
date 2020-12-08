export interface PixelMessage extends MessageEvent {
  data:
    | ProductViewData
    | ProductClickData
    | OrderPlacedData
    | OrderPlacedTrackedData
    | PageViewData
    | ProductImpressionData
    | AddToCartData
    | RemoveToCartData
    | CartChangedData
    | HomePageInfo
    | ProductPageInfoData
    | SearchPageInfoData
    | UserData
    | CartIdData
    | PromoViewData
    | PromotionClickData
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

export interface UserData extends PageInfoData {
  eventType: 'userData'
  eventName: 'vtex:userData'
  firstName?: string
  lastName?: string
  document?: string
  id?: string
  email?: string
  phone?: string
  isAuthenticated: boolean
}

export interface CartIdData extends PageInfoData {
  eventType: 'cartId'
  eventName: 'vtex:cartId'
  cartId: string
}

export interface HomePageInfo extends PageInfoData {
  eventType: 'homeView'
}

export interface ProductPageInfoData extends PageInfoData {
  eventType: 'productPageInfo'
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

export interface CartChangedData extends EventData {
  event: 'cartChanged'
  eventName: 'vtex:cartChanged'
  items: CartItem[]
}

export interface OrderPlacedData extends Order, EventData {
  event: 'orderPlaced'
  eventName: 'vtex:orderPlaced'
}

export interface OrderPlacedTrackedData extends Order, EventData {
  event: 'orderPlacedTracked'
  eventName: 'vtex:orderPlacedTracked'
}

export interface ProductViewData extends EventData {
  event: 'productView'
  eventName: 'vtex:productView'
  product: Product
}

export interface ProductClickData extends EventData {
  event: 'productClick'
  eventName: 'vtex:productClick'
  product: ProductSummary
  list?: string
}

export interface ProductImpressionData extends EventData {
  event: 'productImpression'
  eventName: 'vtex:productImpression'
  impressions: Impression[]
  product?: ProductSummary // deprecated, use impressions list!
  position?: number // deprecated, use impressions list!
  list: string
}

export interface CartData extends EventData {
  event: 'cart'
  eventName: 'vtex:cart'
  orderForm: OrderForm
}

export interface PromoViewData extends EventData {
  event: 'promoView'
  eventName: 'vtex:promoView'
  promotions: Promotion[]
}

export interface PromotionClickData extends EventData {
  event: 'promotionClick'
  eventName: 'vtex:promotionClick'
  promotions: Promotion[]
}

interface Promotion {
  id?: string
  name?: string
  creative?: string
  position?: string
}

interface CartItem {
  brand: string
  ean: string
  category: string
  detailUrl: string
  imageUrl: string
  name: string
  price: number
  productId: string
  productRefId: string
  quantity: number
  seller: string
  sellerName: string
  skuId: string
  variant: string
}

export interface OrderForm {
  id: string
  items: CartItem[]
}

export interface Order {
  accountName: string
  corporateName: string
  coupon: string
  currency: string
  openTextField: string
  orderGroup: string
  salesChannel: string
  visitorAddressCity: string
  visitorAddressComplement: string
  visitorAddressCountry: string
  visitorAddressNeighborhood: string
  visitorAddressNumber: string
  visitorAddressPostalCode: string
  visitorAddressState: string
  visitorAddressStreet: string
  visitorContactInfo: string[]
  visitorContactPhone: string
  visitorType: string
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
  transactionLatestShippingEstimate: Date
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  components: any[]
  measurementUnit: string
  unitMultiplier: number
}

export interface PriceTag {
  identifier: string
  isPercentual: boolean
  value: number
}

export interface Product {
  brand: string
  brandId: string
  categories: string[]
  categoryId: string
  categoryTree: Array<{ id: string; name: string }>
  detailUrl: string
  items: Item[]
  linkText: string
  productId: string
  productName: string
  productReference: string
  selectedSku: Item
}

export interface Item {
  itemId: string
  name: string
  ean: string
  referenceId: { Key: string; Value: string }
  imageUrl: string
  sellers: Seller[]
}

export interface ProductSummary {
  brand: string
  brandId: string
  categories: string[]
  items: ItemSummary[]
  linkText: string
  productId: string
  productName: string
  productReference: string
  sku: ItemSummary
}

interface ItemSummary {
  itemId: string
  ean: string
  name: string
  referenceId: { Key: string; Value: string }
  seller: Seller
  sellers: Seller[]
}

export interface Seller {
  commertialOffer: CommertialOffer
  sellerId: string
  sellerName: string
}

export interface CommertialOffer {
  Price: number
  ListPrice: number
  AvailableQuantity: number
}
