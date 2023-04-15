import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";
import Forums from "./pages/forums/Forums";
import ForumPost from "./pages/forums/ForumPost";
import MUIDrawer from "./components/MUIDrawer";

const mdTheme = createTheme();

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="App">
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          <Router>
            {currentUser && <MUIDrawer />}
            <Routes>
              {currentUser ? (
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/forums" element={<Forums />} />
                  <Route path="/forums/post" element={<ForumPost />} />
                  <Route path="/settings" element={<Settings />} />
                </>
              ) : (
                <Route path="/" element={<Navigate to="/login" />} />
              )}
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
