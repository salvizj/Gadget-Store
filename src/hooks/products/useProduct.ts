import { useEffect, useState } from "react"
import type { Product } from "../../types/products"

const useProduct = (id: string | undefined) => {
  const url = import.meta.env.VITE_URL || "http://localhost:3000"
  const [product, setProduct] = useState<Product | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchProduct = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${url}/products/${id}`)
      const product = await response.json()
      setProduct(product)
    } catch (error) {
      setError("Failed to fetch product")
      throw error
    } finally {
      setLoading(false)
    }
  }

  if (!id) {
    setError("Product ID is required")
    setLoading(false)
    return { product: null, error: "Product ID is required", loading: false, fetchProduct: fetchProduct}
  }

  useEffect(() => {
    fetchProduct()
  }, [url, id])

  return { product, error, loading, fetchProduct }
}

export default useProduct