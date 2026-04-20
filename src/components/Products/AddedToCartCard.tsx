import {
	Button,
	Card,
	CardContent,
	CardActions,
	Typography,
} from "@mui/material"
type AddedToCardProps = {
	closeWindow: () => void
}

const AddedToCartCard = ({ closeWindow }: AddedToCardProps) => {
	return (
		<Card
			sx={{
				zIndex: 1000,
				position: "fixed",
				top: "50%",
				left: "50%",
				maxWidth: 511,
				transform: "translate(-50%, -50%)",
				textAlign: "center",
				p: 8,
			}}
			elevation={3}
		>
			<CardContent>
				<Typography
					gutterBottom
					variant="h4"
					component="div"
					sx={{ lineHeight: 1.15 }}
				>
					Product successfully added to cart!
				</Typography>
			</CardContent>
			<CardActions sx={{ justifyContent: "center" }}>
				<Button
					variant="contained"
					color="primary"
					size="small"
					onClick={closeWindow}
				>
					Close Window
				</Button>
			</CardActions>
		</Card>
	)
}

export default AddedToCartCard
