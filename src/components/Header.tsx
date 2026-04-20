import {
	AppBar,
	Stack,
	Toolbar,
	Typography,
	useMediaQuery,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded"
import { useState } from "react"
import theme from "../theme/theme"
import NavLinks from "./NavLinks"
import type { NavLink } from "../types/types"
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"

type HeaderProps = {
	navLinks: NavLink[]
}

const Header = ({ navLinks }: HeaderProps) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const isMobile = useMediaQuery(theme.breakpoints.down("md"))
	const cartItemCount = useSelector((state: RootState) =>
		state.cart.reduce((sum, item) => sum + item.quantity, 0),
	)

	return (
		<AppBar position="static" component="header" elevation={0} sx={{ py: 1 }}>
			<Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
				<Stack direction="row" sx={{ alignItems: "center", gap: 3, mx: 5 }}>
					<ComputerRoundedIcon sx={{ fontSize: "2.25rem" }} />
					<Typography
						color="inherit"
						sx={{
							fontWeight: 600,
							fontSize: "2.25rem",
							lineHeight: 1,
							letterSpacing: 0,
						}}
					>
						Gadget Store
					</Typography>
				</Stack>

				{isMobile && mobileMenuOpen && (
					<MenuIcon
						sx={{ cursor: "pointer" }}
						onClick={() => setMobileMenuOpen((prev) => !prev)}
						fontSize="large"
					/>
				)}

				{isMobile && !mobileMenuOpen && (
					<CloseIcon
						sx={{ cursor: "pointer" }}
						onClick={() => setMobileMenuOpen((prev) => !prev)}
						fontSize="large"
					/>
				)}

				{!isMobile && (
					<NavLinks
						navLinks={navLinks}
						stackDirection="row"
						alignItems="center"
						cartItemCount={cartItemCount}
					/>
				)}
			</Toolbar>

			{isMobile && mobileMenuOpen && (
				<NavLinks
					navLinks={navLinks}
					stackDirection="column"
					alignItems="start"
					cartItemCount={cartItemCount}
				/>
			)}
		</AppBar>
	)
}

export default Header
