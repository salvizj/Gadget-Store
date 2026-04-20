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
	year: number
	RAM: string
	img: string | null
	warranty_period: string
	features: string[]
}

export type CreateProduct = {
	title: string
	price: number
	short_description: string
	long_description: string
	year: number
	RAM: string
	warranty_period: string
}
export type NavLink = {
	title: string
	path: string
}
