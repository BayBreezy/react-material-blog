import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
	return (
		<CardActionArea component={Link} to={`/${blog.id}`}>
			<Card>
				<CardMedia
					component="img"
					height={250}
					src="https://source.unsplash.com/random"
				></CardMedia>
				<CardContent>
					<Typography variant="h5">{blog.title}</Typography>
					<Typography
						sx={{
							marginTop: "10px",
						}}
						component="p"
						variant="subtitle2"
						color="text.secondary"
						fontWeight={400}
						fontSize={13}
					>
						{blog.body.length > 100
							? blog.body.substring(0, 100) + "..."
							: blog.body}
					</Typography>
				</CardContent>
			</Card>
		</CardActionArea>
	);
};

export default BlogCard;
