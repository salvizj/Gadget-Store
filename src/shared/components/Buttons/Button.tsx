import { Button as MuiButton } from "@mui/material"
import type { ButtonSize, ButtonVariant } from "../../../types/types"
import { SIZE_STYLES, VARIANT_STYLES } from "../../../constants/buttonStyles"

type ButtonProps = {
	size?: ButtonSize
	onClick?: () => void
	children: React.ReactNode
	variant?: ButtonVariant
	component?: React.ElementType
	to?: string
}

const Button = ({
	size = "medium",
	onClick,
	children,
	variant = "outlined",
	component,
	to,
}: ButtonProps) => {
	return (
		<MuiButton
			onClick={onClick}
			sx={[SIZE_STYLES[size], VARIANT_STYLES[variant][size]]}
			variant={variant}
			{...(component && { component })}
			{...(to && { to })}
		>
			{children}
		</MuiButton>
	)
}
export default Button
