import { CardContent, Typography, Card, Box, Stack } from "@mui/material"

type FeatureCardProps = {
	icon: React.ReactNode
	title: string
	description: string
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
	return (
		<Card
			sx={{
				bgcolor: "secondary.main",
				color: "secondary.contrastText",
				display: "flex",

				width: "310px",
				alignItems: "center",
				justifyContent: "center",
				flex: 1,
			}}
		>
			<CardContent sx={{ pt: 4, pb: 8, px: 4 }}>
				<Stack spacing={4} direction="column">
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						{icon}
					</Box>
					<Typography
						align="center"
						sx={{
							fontWeight: 600,
							fontSize: "1.5rem",
							lineHeight: 1,
							letterSpacing: 0,
						}}
					>
						{title}
					</Typography>
					<Typography
						align="center"
						sx={{
							fontWeight: 400,
							fontSize: "1.25rem",
							lineHeight: 1,
							letterSpacing: 0,
						}}
					>
						{description}
					</Typography>
				</Stack>
			</CardContent>
		</Card>
	)
}
export default FeatureCard
