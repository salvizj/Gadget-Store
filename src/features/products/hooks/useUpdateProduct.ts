import { useState } from "react"
import type { ProductFormData } from "../../../types/types"

const useUpdateProduct = (refetch: () => void) => {
	const url = import.meta.env.VITE_URL || "http://localhost:3000"
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const updateProduct = async (product: ProductFormData) => {
		try {
			setLoading(true)
			const response = await fetch(`${url}/products/${product.id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(product),
			})
			if (!response.ok) {
				throw new Error("Failed to update product")
			}
			const data = await response.json()
			refetch()
			return data
		} catch (error) {
			setError("Failed to update product")
			throw error
		} finally {
			setLoading(false)
		}
	}

	return { updateProduct, loading, error }
}

export default useUpdateProduct
