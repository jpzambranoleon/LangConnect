import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { ReactComponent as MyIcon } from "../../assets/spain_flag.svg";
import Post from "../../components/Post";
import { EmojiEmotions, Photo } from "@mui/icons-material";
import { useState } from "react";

export default function Forums() {
  const [admin, setAdmin] = useState(null);
  // mongodb password gHjzp6ovm4OINp6W
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
      <Box sx={{ position: "relative" }}>
        <CardMedia
          image={require("../../assets/madrid_spain.jpg")}
          sx={{
            height: 230,

            "&:hover #button-wrapper": {
              opacity: 1,
            },
          }}
        >
          <Container maxWidth="md">
            <Box
              id="button-wrapper"
              sx={{
                position: "absolute",
                left: "80%",
                bottom: "10%",
                transform: "translate(-50%, 50%)",
                opacity: 0,
                transition: "opacity 0.2s ease-in-out",
              }}
            >
              {admin ? (
                <Button variant="contained" size="small">
                  Change cover
                </Button>
              ) : null}
            </Box>
          </Container>
        </CardMedia>
        <Container maxWidth="md">
          <Box
            sx={{
              position: "absolute",
              bottom: -50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "& svg": {
                height: 100,
                width: 100,
              },
            }}
          >
            <MyIcon />
          </Box>
        </Container>
      </Box>
      <Container maxWidth="md" sx={{ mt: 6 }}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Typography variant="h2" fontWeight={500}>
              Viva España
            </Typography>
            <Grid container sx={{ mt: 5 }}>
              <Grid item xs={12}>
                <Stack direction="column" spacing={1}>
                  <Paper
                    elevation={0}
                    sx={{
                      backgroundColor: "background.paper",
                      p: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Avatar
                        src="https://material-ui.com/static/images/avatar/1.jpg"
                        sx={{ mr: 1 }}
                      />
                      <Box sx={{ width: "100%" }}>
                        <Box
                          sx={{
                            p: 1,
                            borderRadius: 6,
                            width: "100%",
                            // border: 1,
                            // borderColor: "divider",
                            // transition: "background-color 0.3s ease-in-out",
                            // "&:hover": {
                            //   backgroundColor: (theme) =>
                            //     theme.palette.mode === "light"
                            //       ? theme.palette.grey[100]
                            //       : theme.palette.grey[900],
                            //  },
                          }}
                        >
                          <InputBase
                            // disabled
                            placeholder="Create a post"
                            multiline
                            sx={{ flexGrow: 1 }}
                            fullWidth
                          />
                        </Box>
                        <Box
                          sx={{
                            mt: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box>
                            <IconButton
                              color="primary"
                              sx={{ height: 35, width: 35 }}
                            >
                              <Photo
                                fontSize="inherit"
                                sx={{ height: 20, width: 20 }}
                              />
                            </IconButton>
                            <IconButton
                              color="primary"
                              sx={{ height: 35, width: 35 }}
                            >
                              <EmojiEmotions
                                fontSize="inherit"
                                sx={{ height: 20, width: 20 }}
                              />
                            </IconButton>
                          </Box>
                          <Box>
                            <Button
                              disableElevation
                              variant="contained"
                              sx={{ borderRadius: 5 }}
                            >
                              Post
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                  <Divider />
                  <Post />
                  <Post />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" gutterBottom>
              About community
            </Typography>
            <Typography>Hello 👋</Typography>
            <Typography>
              ¡Bienvenidos al foro de Viva España! Aquí hablamos de todo lo que
              hay que saber y amar sobre España. Desde la comida hasta la
              cultura, pasando por películas y series, e incluso deportes. ¡Aquí
              no hay nada prohibido! La única norma es que escribáis, comentéis
              y os comuniquéis en español. Después de todo, esto es una
              plataforma para aprender el idioma. ¡Esperamos que disfrutéis de
              este foro, colegas!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
