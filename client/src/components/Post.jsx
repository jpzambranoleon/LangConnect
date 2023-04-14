import { Favorite, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";

const Post = () => {
  return (
    <Card elevation={0}>
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
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="308"
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
      <Divider />
    </Card>
  );
};

export default Post;
