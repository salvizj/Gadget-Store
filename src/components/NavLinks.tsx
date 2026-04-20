import { Link } from "react-router"
import { Box, Button, Stack } from "@mui/material";
import type { NavLink } from "../types/types.ts";

type NavLinksProps = {
  navLinks: NavLink[]
  stackDirection?: "row" | "column"
  alignItems?: "start" | "center" | "end"
  cartItemCount?: number
}

const NavLinks = ({ navLinks, stackDirection, alignItems, cartItemCount }: NavLinksProps) => {
  return (
    <>
      <Box component="nav">
        <Stack direction={stackDirection} sx={{ alignItems: alignItems }}>
          {navLinks.map((link) => (
            <Button key={link.path} component={Link} to={link.path} color="inherit" sx={{ fontWeight: 600, textTransform: "none", fontSize: "1.25rem", lineHeight: 1 }}>
              {link.title}
              {link.title === "Cart" && ` (${cartItemCount}) `}
            </Button>
          ))}
        </Stack>
      </Box>
    </>
  )
}
export default NavLinks