import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import List from '@mui/material/List';
//import ListItem from '@mui/material/ListItem';
//import ListItemText from '@mui/material/ListItemText';


// sandwich photos
import currysandwich from "./images/currysandwich.webp"
import turkeysandwich from "./images/thanksgiving sandwich.jpeg"
import cajunsandwich from "./images/cajun sandwich.jpeg"
import themamamia from "./images/the mama mia.jpeg"

//browser functions
//import { BrowserRouter, Switch, Route, useNavigate, useLinkClickHandler} from "react-router-dom";
//import {nav} from "react-bootstrap"

const handleClick = () => {
   alert('Added to Cart');
};

// const product = [
//   {
//     name: 'Curry on My Wayward Bun',
//     price: '$9.99',
//   },
//   {
//     name: 'The Grateful Bread',
//     price: '$9.99',
//   },
//   {
//     name: 'The  Blackened Sabbath',
//     price: '$9.99',
//   },
//   {
//     name: 'The Queen Panini',
//     price: '$9.99',
//   },
// ] 



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Rock n' Rollin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// function Choice () {
//   var CurrySandwich = document.getElementById("CurrySandwich");
//   var GratefulSandwich = document.getElementById("GratefulSandwich");
//   var BlackSabbathSandwich = document.getElementById("BlackSabbathSandwich");
//   var QueenSandwich = document.getElementById("QueenSandwich")

//   if (CurrySandwich.clicked === true) {
//     alert('Added to Cart');
//     <a href="/snackbar">
//     <List disablePadding/>
//       {product.map((product) => (
//         <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
//           <ListItemText primary={product.name} secondary={product.price} />
//         </ListItem>
//       ))}
//     </a>
//   } else if (GratefulSandwich.clicked === true) {
//     alert('Added to Cart');
//     <a href="/snackbar">
//       <ListItem>
//         <ListItemText primary={product.name} secondary={product.price} />
//       </ListItem>
//     </a>
//   } else if (BlackSabbathSandwich.clicked === true) {
//     alert('Added to Cart');
//     <a href="/snackbar">
//       <ListItem>
//         <ListItemText primary={product.name} secondary={product.price} />
//       </ListItem>
//     </a>
//   } else if (QueenSandwich.clicked === true) {
//     alert('Added to Cart');
//     <a href="/snackbar">
//       <ListItem>
//         <ListItemText primary={product.name} secondary={product.price} />
//       </ListItem>
//     </a>
//   } else {
//     <a href="/snackbar">
//     <ListItem>
//         <ListItemText primary={product.name} secondary={product.price} />
//       </ListItem>
//     </a>
//     };
// };

  

const card1 = [1];
const card2 = [1];
const card3 = [1];
const card4 = [1];

const theme = createTheme();




export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <div>
            <a href="/snackbar">
              <Button variant="contained" color = "inherit" startIcon={<ShoppingBasketIcon />}>Cart</Button>
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
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Rock n' Rollin Food Truck
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Rock n' Rollin is a local, organic food truck that serves clasic American food, 
              fused with bold international flavors (with the occasional pun, too!)
            </Typography>
              
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Sign in to see your reward status, or sign up today!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <div>
                <a href="/signin">
                  <Button variant= "outlined">Sign In</Button>
                </a>
                <a href = "/signup2">
                  <Button>Sign Up</Button>
                </a>
              </div>
            </Stack>
          </Container>
        </Box>

        

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Typography variant="h3" align="center" color="text.secondary" padding-bottom= "50px" paragraph>
          Our Menu
        </Typography>
          <Grid>
            {card1.map((card) => (
              <Grid item key={card} xs={6} sm={1} md={4}>
                <Card
                  sx={{ height: "auto", display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    src={currysandwich}
                    alt="curry sandwich"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    The "Curry On My Wayward Bun"
                    </Typography>
                    <Typography>
                    A spicy and flavorful sandwich made with curry chicken, 
                    pickled veggies, and a creamy cilantro sauce.
                    </Typography>
                  </CardContent>
                    <div>
                        <CardActions>
                          <Button id="CurrySandwich" variant= "outlined" startIcon={<AddIcon />} onClick={handleClick}>Add to Order</Button>
                        </CardActions>
                      </div>
                </Card>
              </Grid>
            ))}
          </Grid>


          <Grid>
            {card2.map((card) => (
              <Grid item key={card} xs={2} sm={1} md={4}>
                <Card
                  sx={{ height: 'auto', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    src={turkeysandwich}
                    alt="turkey sandwich"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    The Grateful Bread
                    </Typography>
                    <Typography>
                    A turkey and cranberry sandwich with stuffing and mayo on a soft hoagie roll.
                    </Typography>
                  </CardContent>
                    <div>
                      <CardActions>
                        <Button id="GratefulSandwich"variant= "outlined" startIcon={<AddIcon />} onClick={handleClick}>Add to Order</Button>
                      </CardActions>
                    </div>
                </Card>
              </Grid>
            ))}
          </Grid>
    
          <Grid>
            {card3.map((card) => (
              <Grid item key={card} xs={2} sm={1} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    src={cajunsandwich}
                    alt="cajun sandwich"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    The Blackened Sabbath
                    </Typography>
                    <Typography>
                    A blackened chicken sandwich with Cajun spices, lettuce, tomato, and mayo on a toasted bun.
                    </Typography>
                  </CardContent>
                    <div>
                      <CardActions>
                        <Button id="BlackSabbathSandwich" variant= "outlined" startIcon={<AddIcon />} onClick={handleClick}>Add to Order</Button>
                      </CardActions>
                    </div>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Grid>
            {card4.map((card) => (
              <Grid item key={card} xs={2} sm={1} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    src={themamamia}
                    alt="mama mia panini"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    The Queen Panini
                    </Typography>
                    <Typography>
                    A panini sandwich with prosciutto, mozzarella cheese, and fig jam on sourdough bread.
                    </Typography>
                  </CardContent>
                    <div>
                      <CardActions>
                        <Button id="QueenSandwich" variant= "outlined" startIcon={<AddIcon />} onClick={handleClick}>Add to Order</Button>
                      </CardActions>
                    </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>


      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Order Now!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Roll with the best and eat like a rockstar!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}