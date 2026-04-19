import { Button, Stack } from "@mui/material"
import type { Product } from "../../types/products"

type MenuCardProps = {
  product: Product
  onDeleteClick: () => void
  onEditClick: (product: Product) => void
  closeMenu: () => void
}

const MenuCard = ({ product, onDeleteClick, onEditClick, closeMenu }: MenuCardProps) => {
  return (
    <Stack spacing={2}>
      <Button size="small" variant="text" onClick={() => { onEditClick(product); closeMenu() }} sx={{ bgcolor: "#21212114", color: "#000000DE", textTransform: "capitalize", justifyContent: "flex-start" }}>Edit</Button>
      <Button size="small" variant="text" onClick={() => { onDeleteClick(); closeMenu() }} sx={{ bgcolor: "#21212114", color: "#000000DE", textTransform: "capitalize", justifyContent: "flex-start" }}>Delete</Button>
    </Stack >
  )
}
export default MenuCard