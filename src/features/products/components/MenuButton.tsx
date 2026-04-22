import { Button as MuiButton } from "@mui/material"
import { MENU_BUTTON_STYLE } from "../../../constants/buttonStyles"

type MenuButtonProps = {
	onClick?: () => void
	component?: React.ElementType
	to?: string
	children: React.ReactNode
}

const MenuButton = ({ onClick, children, component, to }: MenuButtonProps) => {
	return (
		<MuiButton
			onClick={onClick}
			sx={MENU_BUTTON_STYLE}
			{...(component && { component })}
			{...(to && { to })}
		>
			{children}
		</MuiButton>
	)
}

export default MenuButton
