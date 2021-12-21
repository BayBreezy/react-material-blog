import { Button, Container, Typography } from "@mui/material";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Image } from "mui-image";

import dayjs from "dayjs";
import { useBlogs } from "../contexts/BlogContext";

const BlogPage = () => {
	const { getSingleBlog, removeBlog } = useBlogs();
	const { id } = useParams();
	const blog = getSingleBlog(id);
	const navigator = useNavigate();
	const deleteBlogPost = () => {
		removeBlog(id);
		navigator("/");
	};

	return (
		<Container
			component="main"
			sx={{
				padding: "10px 0",
			}}
		>
			<Typography variant="h3" margin="15px 0" align="center">
				{blog.title}
			</Typography>
			<Typography
				margin="20px 0"
				component="p"
				textAlign={"center"}
				variant="caption"
			>
				Created At: {dayjs().format("MMMM D, YYYY h:m A")}
			</Typography>
			<div style={{ textAlign: "center" }}>
				<Button
					component={Link}
					to={`/edit/${id}`}
					sx={{
						textAlign: "center",
						textTransform: "capitalize",
						margin: "0 5px",
					}}
					variant="outlined"
					color="primary"
				>
					Edit Blog
				</Button>
				<Button
					onClick={deleteBlogPost}
					sx={{
						textAlign: "center",
						textTransform: "capitalize",
						margin: "0 5px",
					}}
					variant="outlined"
					color="error"
				>
					Delete Blog
				</Button>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					margin: "30px auto",
				}}
			>
				<Image
					height="500px"
					width="90%"
					shift="bottom"
					fit="cover"
					src="https://source.unsplash.com/random"
					style={{
						borderRadius: "10px",
					}}
				/>
			</div>
			<Typography
				whiteSpace={"pre-line"}
				variant="subtitle1"
				fontWeight="300"
				component="p"
			>
				{blog.body}
			</Typography>
		</Container>
	);
};

export default BlogPage;
