import { Typography, Grid, Stack, Button, Box } from "@mui/material"
import ProductCard from "../features/products/components/ProductCard"
import useProducts from "../features/products/hooks/useProducts"
import { useState } from "react"
import Form from "../features/products/components/ProductForm"
import useCreateProduct from "../features/products/hooks/useCreateProduct"
import useUpdateProduct from "../features/products/hooks/useUpdateProduct"
import useDeleteProduct from "../features/products/hooks/useDeleteProduct"
import type { Product } from "../types/types"
import AddIcon from "@mui/icons-material/Add"
import PageContainer from "../layouts/PageContainer"

const Products = () => {
	const [isCreateFormOpen, setIsCreateFormOpen] = useState(false)
	const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false)

	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

	const {
		products,
		error: productsError,
		loading: productsLoading,
		fetchProducts: refetch,
	} = useProducts()
	const {
		createProduct,
		loading: createLoading,
		error: createError,
	} = useCreateProduct(refetch)
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

	const onEditClick = (product: Product) => {
		setSelectedProduct(product)
		setIsUpdateFormOpen(true)
	}

	if (productsLoading || createLoading || updateLoading || deleteLoading) {
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

	if (productsError || createError || updateError || deleteError) {
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
						Error: {productsError} {createError} {updateError} {deleteError}
					</Typography>
				</Box>
			</>
		)
	}

	if (!products.length) {
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
			{isCreateFormOpen && (
				<Form
					closeForm={() => setIsCreateFormOpen(false)}
					actionBtnText="Add product"
					onCreate={createProduct}
				/>
			)}
			{isUpdateFormOpen && selectedProduct && (
				<Form
					closeForm={() => setIsUpdateFormOpen(false)}
					actionBtnText="Edit product"
					onUpdate={updateProduct}
					product={selectedProduct}
				/>
			)}

			<PageContainer sx={{ py: 10 }}>
				<Stack spacing={8} direction="column">
					<Box
						sx={{
							display: "flex",
							justifyContent: { xs: "center", md: "end" },
							alignItems: "center",
						}}
					>
						<Button
							variant="contained"
							size="large"
							sx={{ mb: 4, textTransform: "uppercase" }}
							onClick={() => setIsCreateFormOpen(true)}
						>
							<Stack
								direction="row"
								spacing={1}
								sx={{ alignItems: "center", justifyContent: "center" }}
							>
								<AddIcon /> <Typography>Add new product</Typography>
							</Stack>
						</Button>
					</Box>
					<Grid container spacing={2}>
						{products.map((product) => (
							<Grid
								size={{ xs: 12, sm: 6, md: 3, xl: 3 }}
								key={product.id}
								sx={{
									display: "flex",
								}}
							>
								<ProductCard
									product={product}
									onDeleteClick={() =>
										deleteProduct(product.id as unknown as string)
									}
									onEditClick={() => onEditClick(product)}
								/>
							</Grid>
						))}
					</Grid>
				</Stack>
			</PageContainer>
		</>
	)
}
export default Products
