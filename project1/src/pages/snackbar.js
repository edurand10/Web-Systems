import React from "react";
import HomeIcon from '@mui/icons-material/Home';
//import Snackbar from "@material-ui/core/Snackbar";
//import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';



const theme = createTheme();


export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar position="relative">
			<Toolbar>
				<div>
				<a href="/">
					<Button variant="contained" color = "inherit" startIcon={<HomeIcon />}>Home</Button>
				</a>
				</div>
				{/* <Typography variant="h6" color="inherit" noWrap>
				Rock n' Rollin
				</Typography> */}
			</Toolbar>
			</AppBar>
			<main>
			{/* Hero unit */}
				<Box
				sx={{
					bgcolor: 'background.paper',
					pt: 8,
					pb: 6,
				}}
				>
				<Container maxWidth="sm"/>
				<Typography
						component="h1"
						variant="h2"
						align="center"
						color="text.primary"
						gutterBottom
					>
					Rock n' Rollin Food Truck
				</Typography>
				</Box>
				<Container sx={{ py: 8 }} maxWidth="md"/>
					{/* End hero unit */}
				<Typography variant="h3" align="center" color="text.secondary" padding-bottom= "50px" paragraph>
					Cart
				</Typography>
				<Typography variant="h5" align="center" color="text.secondary" padding-bottom= "50px" paragraph>
					No items in cart
				</Typography>
			</main>
		</ThemeProvider>
	
	);
}
