import { Link } from "react-router"
import { Box, Button, Stack } from "@mui/material"
import { navLinks } from "../../constants/navLinks"

type NavMenuProps = {
	stackDirection?: "row" | "column"
	alignItems?: "start" | "center" | "end"
	cartItemCount?: number
}

const NavMenu = ({
	stackDirection,
	alignItems,
	cartItemCount,
}: NavMenuProps) => {
	return (
		<>
			<Box component="nav">
				<Stack
					direction={stackDirection}
					spacing={2}
					sx={{ alignItems: alignItems }}
				>
					{navLinks.map((link) => (
						<Button
							key={link.path}
							component={Link}
							to={link.path}
							color="inherit"
							sx={{
								fontWeight: 600,
								textTransform: "none",
								fontSize: "1.25rem",
								lineHeight: 1,
							}}
						>
							{link.title}
							{link.title === "Cart" && ` (${cartItemCount}) `}
						</Button>
					))}
				</Stack>
			</Box>
		</>
	)
}
export default NavMenu
