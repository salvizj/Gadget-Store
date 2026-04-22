import type { Theme } from "@mui/material"
import type { SystemStyleObject } from "@mui/system"
import type { ButtonSize, ButtonVariant } from "../types/types"

const DEFAULT_BUTTON_STYLES: SystemStyleObject<Theme> = {
	fontFamily: "Roboto",
	fontWeight: 500,
	textTransform: "uppercase",
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
			borderColor: "#00000033",
			pt: "7.98px",
			pr: "11.17px",
			pb: "7.98px",
			pl: "11.17px",
		},
		medium: {
			borderWidth: "1.38px",
			borderColor: "#00000033",
			pt: "13.83px",
			pr: "19.36px",
			pb: "13.83px",
			pl: "19.36px",
		},
		large: {
			borderWidth: "1.51px",
			borderColor: "#00000033",
			pt: "14.72px",
			pr: "20.61px",
			pb: "14.72px",
			pl: "20.61px",
		},
	},
	contained: {
		small: {},
		medium: {
			borderRadius: "5.4px",
			pt: "13.83px",
			pr: "19.36px",
			pb: "13.83px",
			pl: "19.36px",
			boxShadow: "0px 4px 4px #00000040",
		},
		large: {
			borderRadius: "5.89px",
			pt: "14.72px",
			pr: "20.61px",
			pb: "14.72px",
			pl: "20.61px",
			boxShadow: "0px 4px 4px #00000040",
		},
	},
}

export const MENU_BUTTON_STYLE: SystemStyleObject<Theme> = {
	fontFamily: "Roboto",
	fontWeight: 400,
	lineHeight: 0.67,
	letterSpacing: "0.15px",
	color: "#000000DE",
	fontSize: "1rem",
	height: "54px",
	width: "102px",

	backgroundColor: "#21212114",
}
