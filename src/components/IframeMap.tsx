import { Box } from "@mui/material"

const IframeMap = () => {
	return (
		<Box
			component="iframe"
			src="https://www.openstreetmap.org/export/embed.html?bbox=-16.714668273925785%2C81.59281314906035%2C-16.599311828613285%2C81.60617988340938&amp;layer=mapnik&amp;marker=81.59949915577201%2C-16.65699005126953"
			sx={{
				border: "1px solid black",
				width: "100%",
				height: "100%",
				minHeight: 0,
				flex: 1,
				display: "block",
			}}
		/>
	)
}

export default IframeMap
