import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#3F51B5",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#F5E48B",
      contrastText: "#1D1D1D"
    },
    background: {
      default: "#FFFFFF"
    },
  },
  typography: {
    h2: {
      fontSize: "3.125rem",
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: "0px",
    },
    h4: {
      fontSize: "2.25rem",
      fontWeight: 500,
      lineHeight: 0.67,
      letterSpacing: "0.15px",
    },
    h6: {
      fontSize: "1.25rem",
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
      fontSize: "0.875",
      fontWeight: 400,
      lineHeight: 1.43,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          fontSize: "0.875rem",
          padding: "6px 16px",
        },
        sizeMedium: {
          fontSize: "1rem",
          padding: "8px 20px",
        },  
        sizeLarge: {
          fontSize: "1.25rem",
          padding: "11px 24px",
        },
      },
    },
  },
})


export default theme