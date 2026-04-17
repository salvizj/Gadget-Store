import CssBaseline from "@mui/material/CssBaseline"
import { Route, Routes } from "react-router"
import { Typography } from "@mui/material"
import DefaultLayout from "./pages/Layout/DefaultLayout"
import ContactUs from "./pages/ContactUs"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import theme from "./theme/theme"
import { ThemeProvider } from "@mui/material/styles"
function App() {
	return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline  />
			<Routes>
				<Route element={<DefaultLayout />}>
					<Route index element={<Home />}></Route>
					<Route path="products" element={<Products />} />
					<Route path="contact-us" element={<ContactUs />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Typography variant="h1">404: Not Found</Typography>} />
				</Route>
			</Routes>
    </ThemeProvider>
		</>
	)
}

export default App
