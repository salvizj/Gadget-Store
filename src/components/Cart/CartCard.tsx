import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { ProductImgPathFromTitle } from "../../utils/productUtils"
import type { Product } from "../../types/types"
import QuantityToggler from "../Products/QuantityToggler"
import { useDispatch } from "react-redux"
import {
	decrementQuantity,
	incrementQuantity,
} from "../../features/cart/cartSlice"

type CartCardProps = {
	product: Product
	quantity: number
}

const CartCard = ({ product, quantity }: CartCardProps) => {
	const dispatch = useDispatch()

	return (
		<>
			<Card
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					px: 6,
				}}
			>
				<CardMedia
					component="img"
					sx={{
						height: "auto",
						width: "293px",
						maxHeight: "267px",
						p: 4,
						objectFit: "contain",
					}}
					image={ProductImgPathFromTitle(product.title)}
					alt={product.title}
				/>
				<CardContent>
					<Typography variant="h6" gutterBottom>
						{product.title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Year: {product.year}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						RAM Memory: {product.RAM} GB
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Warrenty: {product.warranty_period}
					</Typography>
				</CardContent>

				<QuantityToggler
					productAlreadyInCart={true}
					productInCartCount={quantity}
					onIncrementClick={() =>
						dispatch(incrementQuantity({ productId: product.id }))
					}
					onDecrementClick={() =>
						dispatch(decrementQuantity({ productId: product.id }))
					}
				/>

				<CardContent sx={{ display: "flex", alignItems: "center" }}>
					<Typography variant="subtitle2" color="text.secondary">
						Price: ${(product.price * quantity).toFixed(2)}
					</Typography>
				</CardContent>
			</Card>
		</>
	)
}

export default CartCard
