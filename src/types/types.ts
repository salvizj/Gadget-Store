export type CartItem = {
  product: Product
  quantity: number
}
export type Product = {
  id: number
  title: string
  price: number
  short_description: string
  long_description: string
  image: string
  year: number
  RAM: string
  warranty_period: string
  features: string[]
}

export type NavLink = {
  title: string
  path: string
}

export type ButtonSize = "small" | "medium" | "large"
export type ButtonVariant = "outlined" | "contained"
