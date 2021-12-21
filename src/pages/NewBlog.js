import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBlogs } from "../contexts/BlogContext";

const NewBlog = () => {
	const { createBlog } = useBlogs();
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const navigate = useNavigate();

	const handleCreate = () => {
		createBlog(title, body);
		//redirect to home
		navigate("/");
	};
	return (
		<Container
			component="main"
			sx={{
				padding: "10px 0",
			}}
		>
			<Typography variant="h3" margin="15px 0" align="center">
				New Blog Post
			</Typography>
			<Grid container justifyContent={"center"} marginTop={"50px"} spacing={3}>
				<Grid item xs={11} sm={8} md={7}>
					<TextField
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
						label="Blog Title"
						fullWidth
					></TextField>
				</Grid>
				<Grid item xs={11} sm={8} md={7}>
					<TextField
						value={body}
						onChange={(e) => setBody(e.target.value)}
						minRows={4}
						multiline
						required
						label="Body"
						fullWidth
					></TextField>
				</Grid>
				<Grid item xs={11} sm={8} md={7}>
					<Button
						onClick={handleCreate}
						sx={{
							textTransform: "capitalize",
							padding: "10px 15px",
						}}
						variant="outlined"
					>
						Create Post
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};

export default NewBlog;
