import { useState, useEffect, useCallback } from "react"
import type { Product } from "../../../types/types"

const useProducts = () => {
	const url = import.meta.env.VITE_URL || "http://localhost:3000"
	const [products, setProducts] = useState<Product[]>([])
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState(true)

	const fetchProducts = useCallback(async () => {
		try {
			setLoading(true)
			const response = await fetch(`${url}/products`)
			const products = await response.json()
			setProducts(products)
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (error) {
			setError("Failed to fetch products. Please try again later.")
		} finally {
			setLoading(false)
		}
	}, [url])

	useEffect(() => {
		fetchProducts()
	}, [url, fetchProducts])

	return { products, error, loading, fetchProducts }
}

export default useProducts
