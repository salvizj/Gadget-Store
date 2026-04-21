import { Stack, Typography } from "@mui/material"
import type { Product } from "../../types/types"

type SpecsProps = {
	product: Product
}

const Specs = ({ product }: SpecsProps) => {
	const specTextSx = {
		whiteSpace: "nowrap" as const,
		fontWeight: 600,
		fontSize: "1rem",
		lineHeight: 1.25,
	}

	return (
		<Stack direction="column" spacing={1}>
			<Typography variant="body2" sx={specTextSx}>
				Year: {product.year}
			</Typography>
			<Typography variant="body2" noWrap sx={specTextSx}>
				RAM Memory: {product.RAM}
			</Typography>
			<Typography variant="body2" sx={specTextSx}>
				Warranty: {product.warranty_period}
			</Typography>
			<Typography variant="body2" sx={specTextSx}>
				Price: {product.price} $
			</Typography>
		</Stack>
	)
}

export default Specs
