import {
  Avatar,
  Box,
  Container,
  Grid,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import PropTypes from "prop-types";
import { useState } from "react";
import PublicProfile from "./components/PublicProfile";
import Account from "./components/Account";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Settings() {
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
        <Box sx={{ display: "flex", mt: 3 }}>
          <Avatar sx={{ width: 56, height: 56 }} />
          <Box sx={{ ml: 2 }}>
            <Typography variant="h6" fontWeight={500}>
              Remy Sharp
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Your personal account
            </Typography>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, display: "flex", mt: 5 }}>
          <Grid container>
            <Grid item xs={3}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider", height: 500 }}
              >
                <Tab label="Public profile" {...a11yProps(0)} />
                <Tab label="Account" {...a11yProps(1)} />
              </Tabs>
            </Grid>
            <Grid item xs={9}>
              <TabPanel value={value} index={0}>
                <PublicProfile />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Account />
              </TabPanel>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
