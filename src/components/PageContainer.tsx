import { Container } from "@mui/material"
import type { ContainerProps } from "@mui/material"

const PageContainer = ({ children, sx, ...props }: ContainerProps) => {
	return (
		<Container
			component="section"
			maxWidth={false}
			sx={[
				{ maxWidth: "94vw", width: "100%" },
				...(Array.isArray(sx) ? sx : [sx]),
			]}
			{...props}
		>
			{children}
		</Container>
	)
}

export default PageContainer
