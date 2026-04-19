import { useState } from "react"

const useDeleteProduct = (refetch: () => void) => {
  const url = import.meta.env.VITE_URL || "http://localhost:3000"
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const deleteProduct = async (id: string) => {
    try {
      setLoading(true)
      const response = await fetch(`${url}/products/${id}`, {
        method: "DELETE",
      })
      if (!response.ok) {
        throw new Error("Failed to delete product")
      }
      refetch()
    } catch (error) {
      setError("Failed to delete product")
      throw error
    } finally {
      setLoading(false)
    }
  }

  return { deleteProduct, error, loading }
}

export default useDeleteProduct