import { Box } from "@mui/material"
import { Outlet } from "react-router"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

const DefaultLayout = () => {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Products", path: "/products" },
    { title: "Contact Us", path: "/contact-us" },
    { title: "Cart", path: "/cart" },
  ]
  return (
    <>
      <Box component="div" sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", }}>
        <Header navLinks={navLinks} />
        <Box component="main" sx={{ flexGrow: 1 }} >
          <Outlet />
        </Box>
        <Footer text="© All rights reserved" />
      </Box>
    </>
  )
}
export default DefaultLayout
