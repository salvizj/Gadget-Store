import { Box, Typography, Stack } from "@mui/material"
import HeroImage from "../../assets/images/hero_image.png"
import { Link } from "react-router"
import Button from "../../shared/components/Buttons/Button"

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
					spacing={{ xs: 0, lg: 4 }}
					direction={{ lg: "row" }}
					sx={{
						py: { xs: 10, lg: 0 },
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
							maxWidth: "560px",
						}}
					>
						<Stack spacing={4} direction="column">
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
								textTransform: "uppercase",
								justifyContent: "flex-start",
								alignItems: "center",
							}}
						>
							<Button variant="outlined" component={Link} to="/contact-us">
								Contact Us
							</Button>
							<Button variant="contained" component={Link} to="/products">
								Shop Now
							</Button>
						</Stack>
					</Stack>

					<Box
						sx={{
							display: { xs: "none", lg: "flex" },
							justifyContent: "flex-end",
							alignItems: "center",
							flex: 1,
						}}
					>
						<Box
							component="img"
							src={HeroImage}
							alt="Hero Image"
							sx={{
								width: "600px",
								height: "700px",
							}}
						/>
					</Box>
				</Stack>
			</Box>
		</>
	)
}
export default Hero
