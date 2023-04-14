import { AddPhotoAlternate, Cancel } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

const PublicProfile = () => {
  return (
    <>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          mb: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Public profile
        </Typography>
      </Box>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={7}>
          <Box component="form">
            <Typography variant="h7" fontWeight={600}>
              Name
            </Typography>
            <TextField
              id="name"
              fullWidth
              multiline
              rows={1}
              size="small"
              sx={{ mb: 2 }}
            />
            <Typography variant="h7" fontWeight={600}>
              Public Email
            </Typography>
            <TextField
              id="email"
              fullWidth
              multiline
              rows={1}
              size="small"
              sx={{ mb: 2 }}
            />
            <Typography variant="h7" fontWeight={600}>
              Bio
            </Typography>
            <TextField id="bio" fullWidth multiline rows={3} sx={{ mb: 2 }} />
            <Typography variant="h7" fontWeight={600}>
              Location
            </Typography>
            <TextField
              id="location"
              fullWidth
              multiline
              rows={1}
              size="small"
            />
            <Button
              variant="contained"
              size="small"
              color="success"
              sx={{ textTransform: "none", mt: 3 }}
            >
              Update Profile
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="body1" fontWeight={600}>
            Profile picture
          </Typography>
          <Box>
            <Avatar sx={{ width: 150, height: 150 }} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PublicProfile;
