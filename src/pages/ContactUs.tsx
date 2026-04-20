import FeatureCard from "../components/FeatureCard"
import IframeMap from "../components/IframeMap"
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined"
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined"
import { Typography, Stack, Box } from "@mui/material"

const ContactUs = () => {
	const Features = [
		{
			icon: <HeadphonesOutlinedIcon sx={{ fontSize: 57 }} />,
			title: "Phone number",
			description: "0123456789",
		},
		{
			icon: <AlternateEmailOutlinedIcon sx={{ fontSize: 57 }} />,
			title: "Email",
			description: "gadget@store.com",
		},
	]
	return (
		<>
			<Box
				sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
			>
				<Stack
					direction={{ xs: "column", md: "row" }}
					spacing={14}
					sx={{ py: 12, width: "90%" }}
				>
					<Box sx={{ width: "100%", maxWidth: "750px" }}>
						<Stack direction="column" spacing={12}>
							<Typography variant="h2">
								Contact us by Phone, Email, or Vaisit us in our Officee
							</Typography>

							<Stack direction="column" spacing={4}>
								<Typography variant="body1">
									Our address: Station Nord 23456, Greenland
								</Typography>
								<Box sx={{ maxWidth: "750px", width: "100%" }}>
									<IframeMap />
								</Box>
							</Stack>
						</Stack>
					</Box>

					<Stack
						direction={{ xs: "row", md: "column" }}
						spacing={4}
						sx={{
							alignItems: "stretch",
							justifyContent: "center",
						}}
					>
						{Features.map((feature, index) => (
							<FeatureCard
								key={index}
								icon={feature.icon}
								title={feature.title}
								description={feature.description}
							/>
						))}
					</Stack>
				</Stack>
			</Box>
		</>
	)
}

export default ContactUs
