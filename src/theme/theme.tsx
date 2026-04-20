import { createTheme } from "@mui/material/styles"

declare module "@mui/material/styles" {
	interface TypographyVariants {
		counter: React.CSSProperties
	}
	interface TypographyVariantsOptions {
		counter?: React.CSSProperties
	}
}

declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		counter: true
	}
}
declare module "@mui/material/styles" {}

const theme = createTheme({
	palette: {
		primary: {
			main: "#3F51B5",
			contrastText: "#FFFFFF",
		},
		secondary: {
			main: "#F5E48B",
			contrastText: "#1D1D1D",
		},
		background: {
			default: "#FFFFFF",
		},
		text: {
			primary: "#1D1D1D",
			secondary: "#00000099",
		},
	},
	typography: {
		fontFamily: "Roboto",
		counter: {
			fontSize: "3.125rem",
			fontWeight: 500,
			letterSpacing: "1.73px",
			lineHeight: 0.44,
		},
		h2: {
			fontSize: "3.125rem",
			fontWeight: 700,
			lineHeight: 1,
			letterSpacing: "0px",
		},
		h3: {
			fontSize: "2.25rem",
			fontWeight: 600,
			letterSpacing: 0,
			lineHeight: 1,
		},
		h4: {
			fontSize: "2.25rem",
			color: "#3F51B5",
			fontWeight: 500,
			lineHeight: 0.67,
			letterSpacing: "0.15px",
		},
		h5: {
			fontSize: "1.5rem",
			color: "#000000DE",
			fontWeight: 600,
			lineHeight: 0.83,
			letterSpacing: "0.25px",
		},
		h6: {
			fontSize: "1.25rem",
			color: "#3F51B5",
			fontWeight: 500,
			lineHeight: 1.2,
			letterSpacing: "0.15px",
		},
		body1: {
			fontSize: "1.25rem",
			fontWeight: 400,
			letterSpacing: 0,
			lineHeight: 1,
		},
		body2: {
			fontSize: "0.875rem",
			fontWeight: 400,
			color: "text.secondary",
			letterSpacing: "0.25px",
			lineHeight: 1.43,
		},
		subtitle1: {
			fontSize: "1rem",
			fontWeight: 400,
			lineHeight: 1.5,
			letterSpacing: "0.15px",
		},
		subtitle2: {
			fontSize: "0.875rem",
			fontWeight: 500,
			lineHeight: 1.57,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				sizeSmall: {
					fontSize: "0.698rem",
					padding: "6px 12px",
				},
				sizeMedium: {
					fontSize: "1.1821rem",
					padding: "8px 20px",
					borderRadius: "5.53px",
				},
				sizeLarge: {
					fontSize: "1.454rem",
					padding: "11px 24px",
				},
				outlined: {
					borderColor: "#00000033",
				},
			},
		},
	},
})

export default theme
