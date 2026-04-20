import { Box, Button, Typography, Stack } from "@mui/material"
import HeroImage from "../assets/images/hero_image.png"
import { Link } from "react-router"

const Hero = () => {
	return (
		<>
			<Box
				sx={{
					bgcolor: "secondary.main",
					color: "secondary.contrastText",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Stack
					spacing={4}
					direction={{ xs: "column", md: "row" }}
					sx={{
						pt: { xs: 10, md: 10, lg: 0 },
						justifyContent: "center",
						justifyItems: "center",
						alignItems: "stretch",
						width: "90%",
					}}
				>
					<Stack
						spacing={4}
						direction="column"
						sx={{
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
						}}
					>
						<Stack spacing={4} direction="column" sx={{ maxWidth: "560px" }}>
							<Typography variant="h2">
								Experience the Future of Technology Today!
							</Typography>
							<Typography
								sx={{
									fontSize: "1.25rem",
									fontWeight: 400,
									letterSpacing: 0,
									lineHeight: 1.3,
								}}
							>
								Unleash your inner tech enthusiast with our wide range of
								gadgets. Become a pro expert within a moment.
							</Typography>
						</Stack>

						<Stack
							spacing={3}
							direction="row"
							sx={{
								width: "100%",
								textTransform: "uppercase",
								justifyContent: "flex-start",
								alignItems: { xs: "center", md: "flex-start" },
							}}
						>
							<Button
								variant="outlined"
								color="primary"
								component={Link}
								to="/contact-us"
								sx={{
									textTransform: "uppercase",
									fontWeight: 500,
									fontSize: "1.25rem",
									lineHeight: 1.3,
									letterSpacing: "1.64px",
								}}
							>
								Contact Us
							</Button>
							<Button
								variant="contained"
								color="primary"
								component={Link}
								to="/products"
								sx={{
									textTransform: "uppercase",
									fontWeight: 500,
									fontSize: "1.25rem",
									lineHeight: 1.3,
									letterSpacing: "1.84px",
								}}
							>
								Shop Now
							</Button>
						</Stack>
					</Stack>

					<Box
						sx={{
							display: { xs: "none", md: "flex" },
							justifyContent: "flex-end",
							alignItems: "center",
							width: "100%",
							flex: 1,
						}}
					>
						<Box
							component="img"
							src={HeroImage}
							alt="Hero Image"
							sx={{
								maxWidth: "600px",
								maxHeight: "700px",
							}}
						/>
					</Box>
				</Stack>
			</Box>
		</>
	)
}
export default Hero
