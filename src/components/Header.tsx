import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router"
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded"

type NavLink = {
  title: string
  path: string
}

type HeaderProps = {
  navLinks: NavLink[]
}

const Header = ({ navLinks }: HeaderProps) => {
  return (
    <AppBar position="static" component="header" sx={{ py: 1 }}>
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Stack direction="row" sx={{ alignItems: "center", gap: 3, mx:5 }}>
          <ComputerRoundedIcon sx={{ fontSize: "2.25rem" }} />
          <Typography color="inherit" sx={{ fontWeight: 600, fontSize: "2.25rem", lineHeight: 1, letterSpacing: 0 }}>
            Gadget Store
          </Typography>
        </Stack>
        <Box component="nav">
          <Stack direction="row">
            {navLinks.map((link) => (
              <Button key={link.path} component={Link} to={link.path} color="inherit" sx={{ fontWeight: 600, textTransform: "none", fontSize: "1.25rem", lineHeight: 1 }}>
                {link.title}
              </Button>
            ))}
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
