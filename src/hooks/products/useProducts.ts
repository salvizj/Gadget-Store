import type { Product } from "../../types/products"
import { useState, useEffect } from "react"

const useProducts = () => {
  const url = import.meta.env.VITE_URL || "http://localhost:3000"
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${url}/products`)
      const products = await response.json()
      setProducts(products)
    } catch (error) {
      setError("Failed to fetch products")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [url])

  return { products, error, loading, fetchProducts }
}

export default useProducts
