import {
	Typography,
	Card,
	CardMedia,
	CardContent,
	Button,
	CardActions,
	ClickAwayListener,
	Box,
} from "@mui/material"
import { ProductImgPathFromTitle } from "../../../utils/productUtils"
import { Link } from "react-router"
import { useState } from "react"
import type { Product } from "../../../types/types"
import ProductContextMenu from "./ProductContextMenu"

type ProductCardProps = {
	product: Product
	onEditClick: (product: Product) => void
	onDeleteClick: () => void
}
const ProductCard = ({
	product,
	onEditClick,
	onDeleteClick,
}: ProductCardProps) => {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<>
			<Card
				sx={{
					display: "flex",
					flexDirection: "column",
					overflow: "visible",
					width: "100%",
					height: "100%",
					pb: 4,
				}}
			>
				<CardContent sx={{ px: 3, pt: 2, pb: 1 }}>
					<Typography variant="h6" sx={{ color: "primary.main" }}>
						{product.title}
					</Typography>
					<Typography variant="subtitle2">
						Price: {product.price}&euro;
					</Typography>
				</CardContent>

				<CardMedia
					component="img"
					image={ProductImgPathFromTitle(product.title)}
					alt={product.title}
					sx={{
						height: "310px",
						width: "194px",
						alignSelf: "center",
					}}
				/>
				<CardContent sx={{ flex: 1 }}>
					<Typography variant="body2">{product.short_description}</Typography>
				</CardContent>

				<CardActions
					sx={{
						display: "flex",
						justifyContent: "center",
						gap: 2,
						px: 2,
						m: 0,
					}}
				>
					<Button
						variant="outlined"
						size="small"
						component={Link}
						to={`/products/${product.id}`}
					>
						Details
					</Button>

					<Box sx={{ position: "relative" }}>
						<Button
							variant="outlined"
							size="small"
							onClick={() => setMenuOpen(true)}
						>
							Menu
						</Button>

						{menuOpen && (
							<ClickAwayListener onClickAway={() => setMenuOpen(false)}>
								<Box
									sx={{
										position: "absolute",
										zIndex: 20,
										p: 2,
										bgcolor: "#ffffff",
										boxShadow: 2,
										top: -10,
									}}
								>
									<ProductContextMenu
										product={product}
										onEditClick={() => onEditClick(product)}
										onDeleteClick={onDeleteClick}
										closeMenu={() => setMenuOpen(false)}
									/>
								</Box>
							</ClickAwayListener>
						)}
					</Box>
				</CardActions>
			</Card>
		</>
	)
}

export default ProductCard
