import { Container, Stack, Typography, Card, Button, Box } from "@mui/material"
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import CartCard from "../components/Cart/CartCard"
import { Link } from "react-router"

const Cart = () => {
	const totalSum = useSelector((state: RootState) =>
		state.cart
			.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
			.toFixed(2),
	)

	const itemCount = useSelector((state: RootState) =>
		state.cart.reduce((total, item) => total + item.quantity, 0),
	)

	const itemsInCart = useSelector((state: RootState) => state.cart)

	if (itemCount === 0) {
		return (
			<Container
				maxWidth={false}
				sx={{
					py: 14,
					maxWidth: "80%vw",
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "start",
					}}
				>
					<Typography variant="h4" gutterBottom>
						Shopping Cart
					</Typography>
				</Box>
				<Card
					sx={{
						mx: 22,
						mt: 20,
						pb: 16,
						pt: 10,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Stack direction="column" spacing={4} sx={{ alignItems: "center" }}>
						<Typography variant="h4" gutterBottom>
							Your shopping cart is empty
						</Typography>
						<Typography variant="h4" gutterBottom>
							Go to
							<Button component={Link} to="/products">
								<Typography
									component="span"
									variant="h4"
									gutterBottom
									sx={{
										textDecoration: "underline",
										textTransform: "capitalize",
										textUnderlineOffset: "2px",
									}}
								>
									Product Page
								</Typography>
							</Button>
						</Typography>
					</Stack>
				</Card>
			</Container>
		)
	}

	return (
		<>
			<Container maxWidth={false} sx={{ py: 4, maxWidth: "80vw" }}>
				<Stack
					direction="row"
					sx={{ justifyContent: "space-between", alignItems: "center", py: 10 }}
				>
					<Typography variant="h4" gutterBottom>
						Shopping Cart
					</Typography>
					{itemCount > 0 && (
						<Typography variant="h4" gutterBottom>
							Total: ${totalSum}
						</Typography>
					)}
				</Stack>

				<Stack direction="column" sx={{ gap: 6 }}>
					{itemsInCart.map((item) => (
						<CartCard
							key={item.product.id}
							product={item.product}
							quantity={item.quantity}
						/>
					))}
				</Stack>
			</Container>
		</>
	)
}
export default Cart
