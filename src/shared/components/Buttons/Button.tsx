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
  type?: "button" | "submit"
}

const Button = ({
  size = "medium",
  onClick,
  children,
  variant = "outlined",
  component,
  to,
  type = "button",
}: ButtonProps) => {
  return (
    <MuiButton
      onClick={onClick}
      sx={[SIZE_STYLES[size], VARIANT_STYLES[variant][size]]}
      variant={variant}
      type={type}
      {...(component && { component })}
      {...(to && { to })}
    >
      {children}
    </MuiButton>
  )
}
export default Button
