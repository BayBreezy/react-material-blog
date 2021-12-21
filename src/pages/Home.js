import { Container, Grid } from "@mui/material";
import BlogCard from "../components/BlogCard";
import NoBlogs from "../components/NoBlogs";
import { useBlogs } from "../contexts/BlogContext";

const Home = () => {
	const { blogs } = useBlogs();

	return (
		<>
			{blogs && blogs.length > 0 && (
				<Container
					component="main"
					sx={{
						padding: "10px 0",
					}}
				>
					<Grid
						container
						spacing={4}
						justifyContent={{ xs: "center", md: "start" }}
					>
						{blogs.map((blog) => (
							<Grid key={`blogCard${blog.id}`} sm={6} md={4} xs={11} item>
								<BlogCard blog={blog} />
							</Grid>
						))}
					</Grid>
				</Container>
			)}
			{!blogs || (blogs && blogs.length == 0 && <NoBlogs />)}
		</>
	);
};

export default Home;
