import { Favorite, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container maxWidth="md">
        <Typography variant="h1" textAlign="center" gutterBottom>
          LangConnect
        </Typography>
        <Typography variant="h5" textAlign="center" paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          vitae molestias deserunt qui aut assumenda dicta omnis nulla. Quod
          quas necessitatibus veniam vero ex excepturi consectetur praesentium
          natus ratione nam.
        </Typography>
        <Stack
          direction="row"
          sx={{ display: "flex", justifyContent: "center" }}
          spacing={5}
        >
          <Button variant="contained">Profile</Button>
          <Button variant="contained" color="secondary">
            Continue
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
