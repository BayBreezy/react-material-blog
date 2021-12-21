import { Toolbar, AppBar, Avatar, Typography } from "@mui/material";

import Logo from "../images/icon.png";
import HeaderButtons from "./HeaderButtons";

const Header = () => {
	return (
		<AppBar
			sx={{
				boxShadow: 1,
				padding: "0 2%",
			}}
			color=""
			position="sticky"
		>
			<Toolbar>
				<Avatar alt="Blog Logo" src={Logo} />
				<Typography sx={{ marginLeft: "10px", flexGrow: 1 }} variant="h6">
					Jamming
				</Typography>
				<HeaderButtons />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
