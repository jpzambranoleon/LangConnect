import { EmojiEmotions, Favorite, MoreVert, Share } from "@mui/icons-material";
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
  InputBase,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Comment = ({ comment }) => {
  return (
    <Box sx={{ display: "flex", mt: 2 }}>
      <Box sx={{ position: "relative", mr: 1 }}>
        <Avatar src={comment.user.avatarUrl} />
        <Box
          sx={{
            position: "absolute",
            //top: "50%",
            mt: 1,
            // mb: 1,
            left: "46%",
            //transform: "translate(-50%, -50%)",
            width: 4,
            height: "calc(100% - 50px)", // adjust this value as needed
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[300]
                : theme.palette.grey[900],
            borderRadius: 2,
          }}
        />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2">{comment.user.name}</Typography>
        <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
          {comment.text}
        </Typography>
        {comment.replies && comment.replies.length > 0 && (
          <Box sx={{ mt: 1 }}>
            {comment.replies.map((reply) => (
              <Comment key={reply.id} comment={reply} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default function ForumPost() {
  const comments = [
    {
      id: 1,
      user: {
        name: "John",
        avatarUrl: "https://material-ui.com/static/images/avatar/1.jpg",
      },
      text: "This is a top-level comment.",
      replies: [
        {
          id: 2,
          user: {
            name: "Jane",
            avatarUrl: "https://material-ui.com/static/images/avatar/2.jpg",
          },
          text: "This is a reply to the top-level comment.",
        },
        {
          id: 3,
          user: {
            name: "Bob",
            avatarUrl: "https://material-ui.com/static/images/avatar/3.jpg",
          },
          text: "This is another reply to the top-level comment.",
          replies: [
            {
              id: 4,
              user: {
                name: "Alice",
                avatarUrl: "https://material-ui.com/static/images/avatar/4.jpg",
              },
              text: "This is a reply to the second-level comment.",
            },
            {
              id: 5,
              user: {
                name: "Jose",
                avatarUrl: "https://material-ui.com/static/images/avatar/5.jpg",
              },
              text: "This is another reply to the second-level comment.",
            },
          ],
        },
      ],
    },
    {
      id: 6,
      user: {
        name: "Randy",
        avatarUrl: "https://material-ui.com/static/images/avatar/6.jpg",
      },
      text: "This is another top-level comment.",
      replies: [
        {
          id: 7,
          user: {
            name: "Diana",
            avatarUrl: "https://material-ui.com/static/images/avatar/7.jpg",
          },
          text: "This is a reply to the second top-level comment.",
        },
      ],
    },
  ];
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
        <Card elevation={0} sx={{ border: 1, borderColor: "divider" }}>
          <CardHeader
            avatar={
              <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="Remy Sharp"
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography variant="body1" color="text.primary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            // height="308"
            image="https://source.unsplash.com/random/800x600'"
            alt="Paella dish"
          />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Favorite />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
          <CardContent>
            <Box
              sx={{
                border: 1,
                borderColor: "divider",
                borderRadius: 1,
              }}
            >
              <Box sx={{ pr: 2, pl: 2 }}>
                <InputBase
                  placeholder="What's on your mind?"
                  multiline
                  rows={6}
                  sx={{ flexGrow: 1 }}
                  fullWidth
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottomLeftRadius: 2,
                  borderBottomRightRadius: 2,
                  pr: 1,
                  pl: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[300]
                      : theme.palette.grey[900],
                }}
              >
                <IconButton>
                  <EmojiEmotions />
                </IconButton>
                <Button
                  disableElevation
                  variant="contained"
                  size="small"
                  sx={{ borderRadius: 4 }}
                >
                  Comment
                </Button>
              </Box>
            </Box>
            {comments.map((comment) => (
              <React.Fragment key={comment.id}>
                <Comment comment={comment} />
                {/* <Divider sx={{ my: 2 }} /> */}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
