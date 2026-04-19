import { Typography, Card, CardMedia, CardContent, Stack, Button, CardActions, ClickAwayListener, Box } from "@mui/material"
import { ProductImgPathFromTitle } from "../../utils/productUtils";
import { Link } from "react-router"
import type { Product } from "../../types/products";
import { useState } from "react";
import MenuCard from "./MenuCard";

type ProductCardProps = {
  product: Product
  onEditClick: (product: Product) => void
  onDeleteClick: () => void
}
const ProductCard = ({ product, onEditClick, onDeleteClick }: ProductCardProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Card
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          overflow: "visible",
          pb: 2,
        }}
      >
        <CardContent>
          <Stack>
            <Typography variant="h6" sx={{ color: "primary.main" }} >{product.title}</Typography>
            <Typography variant="subtitle2">
              Price: {product.price}&euro;
            </Typography>
          </Stack>
        </CardContent>

        <CardMedia
          component="img"
          image={ProductImgPathFromTitle(product.title)}
          alt={product.title}
          sx={{ height: "auto", width: "100%", maxHeight: "310px", p: 4, objectFit: "contain" }}
        />

        <CardContent sx={{ flex: 1 }}>
          <Typography variant="body2" gutterBottom>
            {product.short_description}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mb: 2,
          }}
        >
          <Button variant="outlined" size="small" component={Link} to={`/products/${product.id}`}>
            Details
          </Button>

          <Box sx={{ position: "relative" }}>
            <Button variant="outlined" size="small" onClick={() => setMenuOpen(true)}>
              Menu
            </Button>

            {menuOpen && (
              <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
                <Box sx={{ position: "absolute", zIndex: 20, p: 2, bgcolor: "#ffffff", boxShadow: 2, top: -10 }}>
                  <MenuCard
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