import { Box, Typography } from "@mui/material"

type FooterProps = {
  text: string
}

const Footer = ({text}: FooterProps) => {
	return (
    <>
      <Box component="footer" sx={{ bgcolor: "primary.main", color: "primary.contrastText", py: 3.2 }}>
        <Typography color="inherit" sx={{  fontSize: "1.3rem", fontWeight: 600, ml: 8, letterSpacing: 0.5 }}>
          {text}
        </Typography>
      </Box>
		</>
	)
}

export default Footer
