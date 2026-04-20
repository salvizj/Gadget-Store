import { Button, CardActions, Typography } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import TrashIcon from "@mui/icons-material/Delete"

type QuantityTogglerProps = {
	productAlreadyInCart: boolean
	productInCartCount: number
	onIncrementClick: () => void
	onDecrementClick: () => void
}

const QuantityToggler = ({
	productAlreadyInCart,
	productInCartCount,
	onIncrementClick,
	onDecrementClick,
}: QuantityTogglerProps) => {
	return (
		<>
			{productAlreadyInCart && (
				<CardActions
					sx={{
						display: "flex",
						flexDirection: "row",
						gap: 2,
						alignItems: "center",
						width: "100%",
						height: "100%",
					}}
				>
					<Button
						variant="outlined"
						onClick={() => onDecrementClick()}
						sx={{
							cursor: "pointer",
						}}
					>
						{productInCartCount === 1 ? <TrashIcon /> : <RemoveIcon />}
					</Button>
					<Typography variant="counter">{productInCartCount}</Typography>
					<Button
						variant="contained"
						onClick={() => onIncrementClick()}
						sx={{
							cursor: "pointer",
						}}
					>
						<AddIcon />
					</Button>
				</CardActions>
			)}
		</>
	)
}

export default QuantityToggler
