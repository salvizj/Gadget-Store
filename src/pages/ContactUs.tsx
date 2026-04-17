import FeatureCard from "../components/FeatureCard"
import IframeMap from "../components/IframeMap"
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import { Typography, Stack, Container } from "@mui/material"

const ContactUs = () => {
  const Features = [
    { icon: <HeadphonesOutlinedIcon sx={{ fontSize: 57 }}/>, title: "Phone number", description: "0123456789" },
    { icon: <AlternateEmailOutlinedIcon sx={{ fontSize: 57 }}/>, title: "Email", description: "gadget@store.com" }
  ]
  return (
    <>
      <Container component="section" maxWidth="lg" sx={{ py: 12}}>
        <Stack direction="row" spacing={14}>

          <Stack direction="column" spacing={12} sx={{maxWidth: "650px"}}>
            <Typography variant="h2">Contact us by Phone, Email, or Visit us in our Officee</Typography>
            
            <Stack direction="column" spacing={4}>
              <Typography>Our address: Station Nord 23456, Greenland</Typography>
              <IframeMap />
            </Stack>
          </Stack>

          <Stack direction="column" spacing={4} sx={{flex:1, pr: 14}} >
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

export default ContactUs
