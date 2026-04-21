import { Typography, Stack } from "@mui/material"
import type { Product } from "../../types/types"

const Specs = ({ product }: { product: Product }) => {
	return (
		<Stack
			direction={{ xs: "column", xl: "row" }}
			spacing={{ xs: 2, md: 4 }}
			sx={{ pb: { xs: 2, md: 4 } }}
		>
			<Typography variant="h5" noWrap={true}>
				Year: {product.year}
			</Typography>
			<Typography variant="h5" noWrap={true}>
				RAM Memory: {product.RAM}
			</Typography>
			<Typography variant="h5" noWrap={true}>
				Warrenty: {product.warranty_period}
			</Typography>
		</Stack>
	)
}
export default Specs
