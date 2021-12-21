import {
	Button,
	IconButton,
	Tooltip,
	Drawer,
	List,
	ListItem,
	ListItemText,
	ListItemButton,
	ListItemIcon,
	Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { Home, PostAdd } from "@mui/icons-material";

const HeaderButtons = () => {
	const [open, setOpen] = useState(false);
	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<>
			<Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
				<List sx={{ width: "100%", minWidth: 250 }}>
					<ListItem>
						<ListItemButton component={Link} to="/" onClick={toggleDrawer}>
							<ListItemIcon>
								<Home />
							</ListItemIcon>
							<ListItemText primary="Home" />
						</ListItemButton>
					</ListItem>
					<ListItem>
						<ListItemButton component={Link} to="/new" onClick={toggleDrawer}>
							<ListItemIcon>
								<PostAdd />
							</ListItemIcon>
							<ListItemText primary="New Post" />
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>
			<Tooltip title="Go Home" arrow>
				<Button
					component={Link}
					to="/"
					sx={{
						display: { xs: "none", sm: "inline-block" },
						textTransform: "capitalize",
						fontWeight: "300",
						"&:hover": {
							backgroundColor: "primary.light",
						},
					}}
					variant="contained"
				>
					Home
				</Button>
			</Tooltip>
			<Tooltip title="Create A New Blog Post" arrow>
				<Button
					component={Link}
					to="/new"
					sx={{
						display: { xs: "none", sm: "inline-block" },
						marginLeft: "10px",
						fontWeight: "300",
						textTransform: "capitalize",
						"&:hover": {
							backgroundColor: "primary.light",
						},
					}}
					variant="contained"
				>
					New Blog
				</Button>
			</Tooltip>
			<IconButton
				onClick={toggleDrawer}
				sx={{
					display: { xs: "inline", sm: "none" },
				}}
				color="primary"
			>
				<HiMenuAlt3 />
			</IconButton>
		</>
	);
};

export default HeaderButtons;
