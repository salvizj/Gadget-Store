import { Stack } from "@mui/material"
import type { Product } from "../../../types/types"
import MenuButton from "./MenuButton"

type ProductContextMenuProps = {
	product: Product
	onDeleteClick: () => void
	onEditClick: (product: Product) => void
	closeMenu: () => void
}

const ProductContextMenu = ({
	product,
	onDeleteClick,
	onEditClick,
	closeMenu,
}: ProductContextMenuProps) => {
	return (
		<Stack
			spacing={2}
			sx={{
				width: "100%",
				height: "100%",
				borderRadius: "4px",
				top: "21px",
				left: "21px",
			}}
		>
			<MenuButton
				onClick={() => {
					onEditClick(product)
					closeMenu()
				}}
			>
				Edit
			</MenuButton>
			<MenuButton
				onClick={() => {
					onDeleteClick()
					closeMenu()
				}}
			>
				Delete
			</MenuButton>
		</Stack>
	)
}
export default ProductContextMenu
