import type { Product } from "../../types/products"
import { Typography, Stack } from "@mui/material"

const Specs = ({ product }: { product: Product }) => {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 2, md: 4 }} sx={{ pb: { xs: 2, md: 4 } }}>
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