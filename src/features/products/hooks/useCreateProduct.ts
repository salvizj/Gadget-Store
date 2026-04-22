import { useState } from "react"
import type { ProductFormData } from "../../../types/types"

const useCreateProduct = (refetch: () => void) => {
	const url = import.meta.env.VITE_URL || "http://localhost:3000"
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const createProduct = async (product: ProductFormData) => {
		try {
			setLoading(true)
			const response = await fetch(`${url}/products`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(product),
			})
			if (!response.ok) {
				throw new Error("Failed to create product")
			}
			const data = await response.json()
			refetch()
			return data
		} catch (error) {
			setError("Failed to create product")
			throw error
		} finally {
			setLoading(false)
		}
	}

	return { createProduct, loading, error }
}

export default useCreateProduct
