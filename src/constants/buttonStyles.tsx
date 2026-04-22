import type { Theme } from "@mui/material"
import type { SystemStyleObject } from "@mui/system"
import type { ButtonSize, ButtonVariant } from "../types/types"

const DEFAULT_BUTTON_STYLES: SystemStyleObject<Theme> = {
	fontFamily: "Roboto",
	fontWeight: 500,
	textTransform: "uppercase",
	borderColor: "#00000033",
}

export const SIZE_STYLES: Record<ButtonSize, SystemStyleObject<Theme>> = {
	small: {
		...DEFAULT_BUTTON_STYLES,
		height: "30px",
		fontSize: "0.698rem",
		letterSpacing: "1px",
	},
	medium: {
		...DEFAULT_BUTTON_STYLES,
		height: "48px",
		fontSize: "1.21rem",
		lineHeight: 1.14,
		letterSpacing: "1.73px",
	},
	large: {
		...DEFAULT_BUTTON_STYLES,
		height: "55px",
		fontSize: "1.20rem",
		lineHeight: 1.14,
		letterSpacing: "1.84px",
	},
}

export const VARIANT_STYLES: Record<
	ButtonVariant,
	Record<ButtonSize, SystemStyleObject<Theme>>
> = {
	outlined: {
		small: {
			borderWidth: "0.8px",
			borderRadius: "3.19px",
			pt: "4.79px",
			pr: "4.79px",
			pb: "4.79px",
			pl: "6.38px",
		},
		medium: {
			borderWidth: "1.38px",
			borderRadius: "5.53px",
			pt: "8.3px",
			pr: "8.3px",
			pb: "8.3px",
			pl: "11.06px",
		},
		large: {
			borderWidth: "1.51px",
			borderRadius: "6.03px",
			pt: "9.04px",
			pr: "9.04px",
			pb: "9.04px",
			pl: "12.06px",
		},
	},
	contained: {
		small: {},
		medium: {
			borderRadius: "5.4px",
			pt: "8.1px",
			pr: "8.1px",
			pb: "8.1px",
			pl: "10.8px",
		},
		large: {
			borderRadius: "5.89px",
			pt: "8.83px",
			pr: "8.83px",
			pb: "8.83px",
			pl: "11.78px",
		},
	},
}
