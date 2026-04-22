import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Stack,
	TextField,
	Typography,
} from "@mui/material"
import type React from "react"
import { useState } from "react"
import type { Product, ProductFormData } from "../../../types/types"
import { formFields } from "../../../constants/formFields"

type FormProps = {
	product?: Product
	closeForm: () => void
	actionBtnText: string
	onCreate?: (product: ProductFormData) => void
	onUpdate?: (product: ProductFormData) => void
}

const Form = ({
	product,
	closeForm,
	actionBtnText,
	onCreate,
	onUpdate,
}: FormProps) => {
	const isUpdate = !!product

	const [formData, setFormData] = useState<ProductFormData>({
		...(isUpdate && { id: product?.id }),
		title: product?.title ?? "",
		price: String(product?.price ?? ""),
		short_description: product?.short_description ?? "",
		long_description: product?.long_description ?? "",
		year: String(product?.year ?? ""),
		RAM: product?.RAM ?? "",
		warranty_period: product?.warranty_period ?? "",
		features: product?.features ?? "",
		image: product?.image ?? "",
	})

	const [validationErrors, setValidationErrors] = useState<{
		[key: string]: string
	}>({})

	const parseFeatures = (features: string): string[] => {
		return features.split(",").map((f) => f.trim())
	}

	const validateForm = () => {
		const errors: { [key: string]: string } = {}

		if (!formData.title) {
			errors.title = "Title is required"
		}
		if (Number(formData.price) <= 0) {
			errors.price = "Price must be greater than 0"
		}
		if (!formData.short_description) {
			errors.short_description = "Short description is required"
		}
		if (!formData.long_description) {
			errors.long_description = "Long description is required"
		}
		if (!formData.image) {
			errors.image = "Image name is required"
		}
		if (formData.image !== formData.title) {
			errors.image = "Image name need to be the same as title"
		}
		if (Number(formData.year) <= 0) {
			errors.year = "Year must be greater than 0"
		}
		if (!formData.RAM) {
			errors.RAM = "RAM memory is required"
		}
		if (!formData.warranty_period) {
			errors.warranty_period = "Warranty period is required"
		}
		const featuresArray = parseFeatures(formData.features as string)

		if (featuresArray.length === 0 || featuresArray[0] === "") {
			errors.features = "At least one feature is required"
		}

		setValidationErrors(errors)
		return Object.keys(errors).length === 0
	}

	const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!validateForm()) {
			return
		}

		const normalizedData = {
			...formData,
			price: Number(formData.price),
			year: Number(formData.year),
			features:
				typeof formData.features === "string"
					? parseFeatures(formData.features)
					: formData.features,
		}

		if (isUpdate && onUpdate) {
			await onUpdate(normalizedData as ProductFormData)
		} else if (onCreate) {
			await onCreate(normalizedData as ProductFormData)
		}

		closeForm()
	}

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target

		setFormData((prev) => ({ ...prev, [name]: value }))

		setValidationErrors({})
	}

	const onFeatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({ ...prev, features: e.target.value }))

		setValidationErrors({})
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
						{formFields.map((field) => (
							<Stack key={field.name}>
								<TextField
									name={field.name}
									label={field.label}
									type={field.type}
									value={formData[field.name as keyof ProductFormData]}
									onChange={
										field.name === "features" ? onFeatureChange : onChange
									}
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
					<Button variant="outlined" onClick={closeForm}>
						Cancel
					</Button>
					<Button variant="contained" type="submit">
						{actionBtnText}
					</Button>
				</CardActions>
			</Card>
		</Box>
	)
}

export default Form
