import { Box, Card, CardActions, CardContent, Stack, TextField, Typography } from "@mui/material"
import type React from "react"
import { useState } from "react"
import type { Product } from "../../../types/types"
import { FORM_FIELDS } from "../../../constants/formFields"
import Button from "../../../shared/components/Buttons/Button"
import { productFormSchema, type ProductFormData } from "../../../schemas/productSchema"

type FormProps = {
  product?: Product
  closeForm: () => void
  actionBtnText: string
  onCreate?: (product: ProductFormData) => Promise<void>
  onUpdate?: (product: ProductFormData) => Promise<void>
}

const Form = ({ product, closeForm, actionBtnText, onCreate, onUpdate }: FormProps) => {
  const isUpdate = !!product

  const [formData, setFormData] = useState({
    ...(isUpdate && { id: product?.id }),
    title: product?.title ?? "",
    price: String(product?.price ?? ""),
    short_description: product?.short_description ?? "",
    long_description: product?.long_description ?? "",
    year: String(product?.year ?? ""),
    RAM: product?.RAM ?? "",
    warranty_period: product?.warranty_period ?? "",
    features: product?.features ?? "",
    image: (product?.image ?? "").split(".")[0] ?? "",
  })

  const [validationErrors, setValidationErrors] = useState<Record<string, string | undefined>>({})

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const result = productFormSchema.safeParse(formData)

    if (!result.success) {
      console.error("Validation errors:", result.error.issues)
      const errors = Object.fromEntries(result.error.issues.map((issue) => [issue.path[0], issue.message]))

      setValidationErrors(errors)
      return
    }

    if (isUpdate && onUpdate) {
      await onUpdate(result.data)
    } else if (onCreate) {
      await onCreate(result.data)
    }

    closeForm()
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({ ...prev, [name]: value }))

    setValidationErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const onFeatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, features: e.target.value }))

    setValidationErrors((prev) => ({ ...prev, features: undefined }))
  }

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        bgcolor: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <Card
        component="form"
        sx={{
          py: 2,
          px: 10,
          width: { xs: "auto", md: "50%" },
          overflowY: "auto",
          maxHeight: "100vh",
        }}
        onSubmit={onSubmit}
      >
        <CardContent>
          <Stack
            direction="column"
            spacing={2}
            sx={{
              "& .MuiTextField-root": {
                bgcolor: "#21212114",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            {FORM_FIELDS.map((field) => (
              <Stack key={field.name}>
                <TextField
                  name={field.name}
                  label={field.label}
                  type={field.type}
                  value={formData[field.name as keyof ProductFormData]}
                  onChange={field.name === "features" ? onFeatureChange : onChange}
                  error={!!validationErrors[field.name]}
                />
                {validationErrors[field.name] && (
                  <Typography color="error" variant="body2">
                    {validationErrors[field.name]}
                  </Typography>
                )}
              </Stack>
            ))}
          </Stack>
        </CardContent>

        <CardActions sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button variant="outlined" onClick={closeForm} size="medium">
            Cancel
          </Button>
          <Button variant="contained" type="submit" size="medium">
            {actionBtnText}
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default Form
