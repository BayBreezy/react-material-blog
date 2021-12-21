import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogs } from "../contexts/BlogContext";

const EditBlog = () => {
	const { getSingleBlog, updateBlog } = useBlogs();
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const navigate = useNavigate();
	const { id } = useParams();

	//
	useEffect(() => {
		let blog = getSingleBlog(id);

		if (!blog) return navigate("/");
		setTitle(blog.title);
		setBody(blog.body);
	}, []);

	const handleUpdate = () => {
		updateBlog(title, body, id);
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
				Edit Blog Post
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
						onClick={handleUpdate}
						sx={{
							textTransform: "capitalize",
							padding: "10px 15px",
						}}
						variant="outlined"
					>
						Update Post
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};

export default EditBlog;
