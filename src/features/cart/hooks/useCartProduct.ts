import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../store/store"
import type { Product } from "../../types/types"
import { addToCart, decrementQuantity, incrementQuantity } from "../cartSlice"

const useCartProduct = (productId: number) => {
  const dispatch = useDispatch()

  const productAlreadyInCart = useSelector((state: RootState) => {
    return state.cart.some((item) => Number(item.product.id) === Number(productId))
  })

  const productInCartCount = useSelector(
    (state: RootState) => state.cart.find((item) => Number(item.product.id) === Number(productId))?.quantity || 0,
  )

  return {
    productAlreadyInCart,
    productInCartCount,
    addToCartClick: (product: Product) => dispatch(addToCart(product)),
    onIncrementClick: (productId: number) => dispatch(incrementQuantity({ productId })),
    onDecrementClick: (productId: number) => dispatch(decrementQuantity({ productId })),
  }
}
export default useCartProduct
