import { useState } from "react"
import type { CreateProduct } from "../../types/products"

const useCreateProduct = (refetch: () => void) => {
  const url = import.meta.env.VITE_URL || "http://localhost:3000"
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const createProduct = async (product: CreateProduct) => {
    try {
      setLoading(true)
      const response = await fetch(`${url}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      })
      if (!response.ok) {
        throw new Error("Failed to create product")
      }
      const data = await response.json()
      return data
      refetch()
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