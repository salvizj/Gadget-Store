import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import { ProductImgPathFromTitle } from "../../utils/productUtils"
import type { Product } from "../../types/types"
import QuantityToggler from "../Products/QuantityToggler"
import { useDispatch } from "react-redux"
import {
	decrementQuantity,
	incrementQuantity,
} from "../../features/cart/cartSlice"
import Specs from "./Specs"

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
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					px: 6,
				}}
			>
				<Stack direction="row" sx={{ alignItems: "center" }} spacing={-1}>
					<CardMedia
						component="img"
						sx={{
							height: "267px",
							width: "293px",
							objectFit: "contain",
						}}
						image={ProductImgPathFromTitle(product.title)}
						alt={product.title}
					/>

					<CardContent
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 2,
						}}
					>
						<Typography variant="h4" gutterBottom>
							{product.title}
						</Typography>

						<Specs product={product} />
					</CardContent>
				</Stack>

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

				<CardContent
					sx={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<Typography
						variant="h5"
						color="text.secondary"
						sx={{ whiteSpace: "nowrap" }}
					>
						Total: ${product.price * quantity}
					</Typography>
				</CardContent>
			</Card>
		</>
	)
}

export default CartCard
