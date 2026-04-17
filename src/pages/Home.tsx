import { Container, Typography, Stack } from "@mui/material"
import FeatureCard from "../components/FeatureCard"
import Hero from "../components/Hero"
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined"
import WifiIcon from "@mui/icons-material/Wifi"
import DevicesOtherOutlinedIcon from "@mui/icons-material/DevicesOtherOutlined"
const Home = () => {
  const Features = [
    {
      icon: <WifiIcon sx={{ fontSize: 57 }} />,
      title: "Wireless Freedom",
      description:
        "wireless gadgets that provide freedom of movement while using them",
    },
    {
      icon: <DevicesOtherOutlinedIcon sx={{ fontSize: 57 }} />,
      title: "Stay Connected",
      description:
        " gadgets that help people stay connected with their loved ones and colleagues",
    },
    {
      icon: <LightbulbOutlinedIcon sx={{ fontSize: 57 }} />,
      title: "Smart Home",
      description:
        "gadgets that make your home smarter and more efficient at the space of your own home",
    },
  ]

  return (
    <>
      <Hero />
      <Container component="section" maxWidth={false} sx={{ py: 8, maxWidth: "1000px" }}>
        <Stack spacing={10} direction="column">
          <Typography align="center" sx={{fontSize: "2.25rem", fontWeight: 600, letterSpacing: 0, lineHeight: 1}}>
            Why Choose Us?
          </Typography>

          <Stack direction="row" spacing={8}>
            {Features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

export default Home
