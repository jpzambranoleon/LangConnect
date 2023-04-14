import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MUIDrawer from "./components/MUIDrawer";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Forums from "./pages/forums/Forums";
import Settings from "./pages/settings/Settings";
import ForumPost from "./pages/forums/ForumPost";

const mdTheme = createTheme();

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Router>
            <MUIDrawer />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/forums" element={<Forums />} />
              <Route path="/forums/post" element={<ForumPost />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Router>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
