import {
	Typography,
	Stack,
	Button,
	Card,
	CardMedia,
	CardActions,
	CardContent,
	Box,
	ClickAwayListener,
} from "@mui/material"
import { useParams } from "react-router"
import FeatureList from "../components/Products/FeatureList"
import { ProductImgPathFromTitle } from "../utils/productUtils"
import Specs from "../components/Products/Specs"
import useProduct from "../hooks/products/useProduct"
import MenuCard from "../components/Products/MenuCard"
import { useState } from "react"
import Form from "../components/Products/Form"
import useUpdateProduct from "../hooks/products/useUpdateProduct"
import useDeleteProduct from "../hooks/products/useDeleteProduct"
import { useDispatch, useSelector } from "react-redux"
import {
	addToCart,
	decrementQuantity,
	incrementQuantity,
} from "../features/cart/cartSlice"
import type { RootState } from "../store/store"
import AddedToCartCard from "../components/Products/AddedToCartCard"
import QuantityToggler from "../components/Products/QuantityToggler"
import PageContainer from "../components/PageContainer"

const Product = () => {
	const { id } = useParams()
	const {
		product,
		error: productError,
		loading: productLoading,
		fetchProduct: refetch,
	} = useProduct(id)

	const {
		updateProduct,
		loading: updateLoading,
		error: updateError,
	} = useUpdateProduct(refetch)
	const {
		deleteProduct,
		loading: deleteLoading,
		error: deleteError,
	} = useDeleteProduct(refetch)

	const [menuOpen, setMenuOpen] = useState(false)
	const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false)
	const [isAddedToCartCardOpen, setIsAddedToCartCardOpen] = useState(false)

	const dispatch = useDispatch()

	const productAlreadyInCart = useSelector((state: RootState) =>
		state.cart.some((item) => item.product.id === product?.id),
	)

	const productInCartCount = useSelector(
		(state: RootState) =>
			state.cart.find((item) => item.product.id === product?.id)?.quantity ?? 0,
	)

	if (productLoading || updateLoading || deleteLoading) {
		return (
			<>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100vh",
					}}
				>
					<Typography variant="h2">Loading...</Typography>
				</Box>
			</>
		)
	}

	if (productError || updateError || deleteError) {
		return (
			<>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100vh",
					}}
				>
					<Typography variant="h2">
						Error: {productError || updateError || deleteError}
					</Typography>
				</Box>
			</>
		)
	}

	if (!product) {
		return (
			<>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100vh",
					}}
				>
					<Typography variant="h2">Product not found</Typography>
				</Box>
			</>
		)
	}

	return (
		<>
			{isUpdateFormOpen && product && (
				<Form
					closeForm={() => setIsUpdateFormOpen(false)}
					actionBtnText="Update"
					onUpdate={updateProduct}
					product={product}
				/>
			)}
			{isAddedToCartCardOpen && (
				<AddedToCartCard closeWindow={() => setIsAddedToCartCardOpen(false)} />
			)}

			<PageContainer sx={{ mb: 14, mt: 8 }}>
				<Card
					elevation={1}
					sx={{
						px: { xs: 2, sm: 4, md: 12 },
						py: { xs: 3, md: 5 },
						display: "flex",
						flexDirection: { xs: "column", xl: "row-reverse" },
						gap: { xs: 3, xl: 0 },
					}}
				>
					<CardMedia
						component="img"
						sx={{
							width: { xs: "100%", xl: "auto" },
							maxWidth: { xs: "100%", xl: "550px" },
							maxHeight: "550px",
							objectFit: "contain",
							selfAlign: "center",
						}}
						image={ProductImgPathFromTitle(product.title)}
						alt={product.title}
					></CardMedia>

					<CardContent
						sx={{
							display: "flex",
							flex: 1,
							flexDirection: "column",
							alignItems: "start",
							width: { xs: "100%", xl: "50%" },
							p: { xs: 0, sm: 2 },
						}}
					>
						<Stack direction="column" spacing={5}>
							<Typography variant="h4" gutterBottom>
								{product.title}
							</Typography>
							<Typography
								gutterBottom
								sx={{
									color: "secondary.text",
									fontWeight: 400,
									fontSize: "1rem",
									lineHeight: 1.875,
									letterSpacing: "0.25px",
									maxWidth: { xs: "100%", md: "70%" },
								}}
							>
								{product.long_description}
							</Typography>
							<Specs product={product} />
						</Stack>
						<FeatureList features={product.features ?? []} />
						<Typography variant="h5" gutterBottom sx={{ py: 4 }}>
							Price: {product.price}€
						</Typography>

						<Box sx={{ position: "relative" }}>
							<CardActions
								sx={{
									display: "flex",
									gap: 2,
									p: 0,
									minHeight: "48px",
									height: "48px",
								}}
							>
								<Button variant="outlined" onClick={() => setMenuOpen(true)}>
									Menu
								</Button>

								{productAlreadyInCart ? (
									<QuantityToggler
										productAlreadyInCart={productAlreadyInCart}
										productInCartCount={productInCartCount}
										onIncrementClick={() =>
											dispatch(incrementQuantity({ productId: product.id }))
										}
										onDecrementClick={() =>
											dispatch(decrementQuantity({ productId: product.id }))
										}
									/>
								) : (
									<Button
										variant="contained"
										onClick={() => {
											dispatch(addToCart(product))
											setIsAddedToCartCardOpen(true)
										}}
									>
										Add to Cart
									</Button>
								)}
							</CardActions>

							{menuOpen && (
								<ClickAwayListener onClickAway={() => setMenuOpen(false)}>
									<Box
										sx={{
											position: "absolute",
											zIndex: 20,
											p: 2,
											bgcolor: "#ffffff",
											boxShadow: 2,
											top: 0,
										}}
									>
										<MenuCard
											product={product}
											onEditClick={() => setIsUpdateFormOpen(true)}
											onDeleteClick={() => deleteProduct(id as string)}
											closeMenu={() => setMenuOpen(false)}
										/>
									</Box>
								</ClickAwayListener>
							)}
						</Box>
					</CardContent>
				</Card>
			</PageContainer>
		</>
	)
}

export default Product
