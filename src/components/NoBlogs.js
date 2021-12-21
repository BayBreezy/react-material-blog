import { Button, Container, Typography } from "@mui/material";
import { Image } from "mui-image";
import { Link } from "react-router-dom";

const NoBlogs = () => {
	return (
		<Container
			component={"main"}
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
				textAlign: "center",
				margin: "0 auto",
			}}
		>
			<Image
				style={{ borderRadius: "5px" }}
				src="https://source.unsplash.com/random"
				width="80%"
				height="300px"
			></Image>
			<Typography sx={{ marginTop: "20px" }} variant="subtitle1">
				No post to see. Create one now 🙂.
			</Typography>
			<Button
				component={Link}
				to="/new"
				sx={{ marginTop: "20px" }}
				variant="outlined"
			>
				Create Blog Post
			</Button>
		</Container>
	);
};

export default NoBlogs;
