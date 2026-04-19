import { Stack, Typography } from '@mui/material'
const FeatureList = ({ features }: { features: string[] }) => {
  if (features.length === 0) {
    return <></>
  }
  return (
    <>
      <Typography variant="h5">
        Features:
      </Typography>
      <Stack spacing={1} component="ul">
        {features.map((feature) => (
          <Typography key={feature} component="li" variant="body2">
            {feature}
          </Typography>
        ))}
      </Stack>
    </>
  )
}

export default FeatureList