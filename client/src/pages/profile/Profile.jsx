import {
  Edit,
  Face,
  Favorite,
  Language,
  MoreVert,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import Post from "../../components/Post";
import { ReactComponent as MyIcon } from "../../assets/spain_flag.svg";
import PropTypes from "prop-types";
import { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Profile() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <Grid container>
          <Grid item xs={4} sx={{ bgcolor: "none" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                src="https://material-ui.com/static/images/avatar/1.jpg"
                sx={{ height: 160, width: 160 }}
              />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h5">Remy Sharp</Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  @remySharp
                </Typography>
                <Typography
                  variant="body2"
                  paragraph
                  sx={{ whiteSpace: "pre-line" }}
                >
                  {
                    "Hello, my name is Remy Sharp. I speak French and Spanish and I want to learn English.\nMy new years resolution is to speak proficient level English with native speakers.\nI love hiking, football, and mountain climbing."
                  }
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Languages
                </Typography>
                <Stack direction="row" sx={{ gap: 1, flexWrap: "wrap" }}>
                  <Chip icon={<Face />} label="English" variant="outlined" />
                  <Chip
                    icon={<MyIcon width={20} height={20} />}
                    label="Spanish"
                    variant="outlined"
                  />
                  <Chip icon={<Face />} label="French" variant="outlined" />
                </Stack>
                <Typography gutterBottom sx={{ mt: 1 }}>
                  Interests
                </Typography>
                <Stack direction="row" sx={{ gap: 1, flexWrap: "wrap" }}>
                  <Chip label="🥾 Hiking" variant="outlined" />
                  <Chip label="⛰️ Mountain Climbing" variant="outlined" />
                  <Chip label="⚽ Football" variant="outlined" />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", mt: 2 }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab label="Posts" {...a11yProps(0)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Post />
          </TabPanel>
        </Box>
      </Container>
    </Box>
  );
}
