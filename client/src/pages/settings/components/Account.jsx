import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const Account = () => {
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
          Change username
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <Typography variant="h7" fontWeight={600}>
            Current username
          </Typography>
          <TextField
            disabled
            id="username"
            fullWidth
            multiline
            rows={1}
            size="small"
            sx={{ mb: 2 }}
          />
          <Typography variant="h7" fontWeight={600}>
            New username
          </Typography>
          <TextField
            id="new_username"
            name="new_username"
            fullWidth
            multiline
            rows={1}
            size="small"
            sx={{ mb: 2 }}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        size="small"
        color="success"
        sx={{ textTransform: "none", mb: 5 }}
      >
        Change username
      </Button>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
        <Typography variant="h5" gutterBottom>
          Update password
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <Typography variant="h7" fontWeight={600}>
            Old Password
          </Typography>
          <TextField
            fullWidth
            id="password"
            type="password"
            name="password"
            size="small"
            sx={{ mb: 2 }}
          />
          <Typography variant="h7" fontWeight={600}>
            New password
          </Typography>
          <TextField
            fullWidth
            id="new_password"
            type="password"
            name="new_password"
            size="small"
            sx={{ mb: 2 }}
          />
          <Typography variant="h7" fontWeight={600}>
            Confirm new password
          </Typography>
          <TextField
            fullWidth
            id="confirm_new_password"
            type="password"
            name="confirm_new_password"
            size="small"
            sx={{ mb: 2 }}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        size="small"
        color="success"
        sx={{ textTransform: "none", mb: 5 }}
      >
        Update password
      </Button>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
        <Typography variant="h5" gutterBottom color="error">
          Delete account
        </Typography>
      </Box>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Once you delete your account, there is no going back. Please be certain.
      </Typography>
    </>
  );
};

export default Account;
