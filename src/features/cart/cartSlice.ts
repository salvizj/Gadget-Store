import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { CartItem, Product } from "../../types/types"

const initialState: CartItem[] = []

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Product>) => {
			const existingItem = state.find(
				(item) => item.product.id === action.payload.id,
			)
			if (!existingItem) {
				state.push({ product: action.payload, quantity: 1 })
			}
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			const index = state.findIndex(
				(item) => item.product.id === action.payload,
			)
			if (index !== -1) {
				state.splice(index, 1)
			}
		},
		incrementQuantity: (
			state,
			action: PayloadAction<{ productId: number }>,
		) => {
			const item = state.find(
				(item) => item.product.id === action.payload.productId,
			)
			if (item) {
				item.quantity += 1
			}
		},
		decrementQuantity: (
			state,
			action: PayloadAction<{ productId: number }>,
		) => {
			const item = state.find(
				(item) => item.product.id === action.payload.productId,
			)
			if (item && item.quantity > 1) {
				item.quantity -= 1
			}
			if (item && item.quantity === 1) {
				const index = state.findIndex(
					(item) => item.product.id === action.payload.productId,
				)
				state.splice(index, 1)
			}
		},
	},
})

export const {
	addToCart,
	removeFromCart,
	incrementQuantity,
	decrementQuantity,
} = cartSlice.actions
export default cartSlice.reducer
