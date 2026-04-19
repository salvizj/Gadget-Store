import { Box, Button, Card, CardActions, CardContent, Stack, TextField } from "@mui/material"
import type { Product, CreateProduct } from "../../types/products"
import type React from "react"
import { useState } from "react"

type FormProps = {
  product?: Product,
  closeForm: () => void,
  actionBtnText: string,
  onCreate?: (product: CreateProduct) => void,
  onUpdate?: (product: Product) => void
}

const Form = ({ product, closeForm, actionBtnText, onCreate, onUpdate }: FormProps) => {
  const isUpdate = !!product

  const [formData, setFormData] = useState<Product | CreateProduct>({
    ...(isUpdate && { id: product?.id }),
    title: product?.title ?? "",
    price: product?.price ?? 0,
    short_description: product?.short_description ?? "",
    long_description: product?.long_description ?? "",
    year: product?.year ?? 0,
    RAM: product?.RAM ?? "",
    warranty_period: product?.warranty_period ?? "",
    ...(isUpdate && { features: product?.features ?? [] })
  })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isUpdate && onUpdate) {
      onUpdate(formData as Product)
    } else if (onCreate) {
      onCreate(formData as CreateProduct)
    }

    closeForm()
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <Box sx={{
        position: "fixed",
        inset: 0,
        bgcolor: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}>
        <Card component="form" sx={{ py: 6, px: 10, width: { xs: "auto", md: "50%" } }} onSubmit={onSubmit}>
          <CardContent >
            <Stack direction="column" spacing={2} sx={{
              "& .MuiTextField-root": {
                bgcolor: "#21212114"
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none"
              }
            }}>
              <TextField name="title" label="Title" value={formData.title} onChange={onChange} />
              <TextField name="short_description" label="Short description" value={formData.short_description} onChange={onChange} />
              <TextField name="long_description" label="Long description" value={formData.long_description} onChange={onChange} />
              <TextField name="price" type="number" label="Price" value={formData.price} onChange={onChange} />
              <TextField name="year" type="number" label="Year" value={formData.year} onChange={onChange} />
              <TextField name="RAM" label="RAM memory" value={formData.RAM} onChange={onChange} />
              <TextField name="warranty_period" label="Warrenty period" value={formData.warranty_period} onChange={onChange} />
            </Stack>
          </CardContent>

          <CardActions sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button variant="outlined" onClick={closeForm}>Cancel</Button>
            <Button variant="contained" type="submit">{actionBtnText}</Button>
          </CardActions>
        </Card>
      </Box >
    </>
  )
}

export default Form