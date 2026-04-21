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
	const buttonStyles = {
		cursor: "pointer",
		width: "45px",
		minWidth: "45px",
		minHeight: "48px",
		height: "48px",
	}

	return (
		<>
			{productAlreadyInCart && (
				<CardActions
					sx={{
						display: "flex",
						flexDirection: "row",
						gap: 2,
						alignItems: "center",
					}}
				>
					<Button
						variant="outlined"
						onClick={onDecrementClick}
						sx={buttonStyles}
					>
						{productInCartCount === 1 ? <TrashIcon /> : <RemoveIcon />}
					</Button>
					<Typography variant="counter">{productInCartCount}</Typography>
					<Button
						variant="contained"
						onClick={onIncrementClick}
						sx={buttonStyles}
					>
						<AddIcon />
					</Button>
				</CardActions>
			)}
		</>
	)
}

export default QuantityToggler
