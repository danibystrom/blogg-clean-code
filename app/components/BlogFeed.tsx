import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import blogposts from "../data/blogposts.json";

export default function BlogFeed() {
  return (
    <Box sx={{ backgroundColor: "#fff", p: 2 }}>
      <Typography variant="h5" sx={{ color: "black", mb: 2 }}>
        Alla inlägg
      </Typography>
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        }}
      >
        {blogposts.map((post) => (
          <Card key={post.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={post.image}
              title={post.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Läs mer</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
