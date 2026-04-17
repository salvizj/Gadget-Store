import { Box, Button, Typography, Stack } from "@mui/material"
import HeroImage from "../assets/images/hero_image.png"

const Hero = () => {
  return (
    <Box sx={{ bgcolor: "secondary.main", color: "secondary.contrastText" }} >
    <Stack direction="row" spacing={4} sx={{ mx:2 }}>
        <Stack spacing={4} direction="column" sx={{ justifyContent: "center", alignItems: "flex-start", px: 8  }}>
          <Stack spacing={4} direction="column">
            <Typography variant="h2">
              Experience the Future of Technology Today!
            </Typography>
            <Typography sx={{fontSize: "1.25rem", fontWeight: 400, letterSpacing: 0, lineHeight: 1.3}}>
              Unleash your inner tech enthusiast with our wide range of gadgets.
              Become a pro expert within a moment.
            </Typography>
          </Stack>

          <Stack spacing={3} direction="row" sx={{textTransform: "uppercase"}}>
            <Button
              variant="outlined"
              color="primary"
              sx={{ textTransform: "uppercase", fontWeight: 500, fontSize: "1.25rem", lineHeight: 1.3, letterSpacing: "1.64px"}}
            >
              Contact Us
            </Button>
            <Button
              variant="contained"
              color="primary"
               sx={{ textTransform: "uppercase", fontWeight: 500, fontSize: "1.25rem", lineHeight: 1.3, letterSpacing: "1.84px"}}
            >
              Shop Now
            </Button>
          </Stack>
        </Stack>

        <Box
          component="img"
          src={HeroImage}
          alt="Hero Image"
          sx={{
            width: "100%",
            maxWidth: "600px",
            maxHeight: "700px",
          }}
        />
      </Stack>
    </Box>
  )
}
export default Hero
