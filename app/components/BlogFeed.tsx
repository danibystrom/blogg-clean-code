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
  // Funktion för att generera ett slumpmässigt datum
  function generateRandomDate() {
    const start = new Date(2020, 0, 1); // Startdatum: 1 januari 2020
    const end = new Date(); // Slutdatum: Idag
    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return randomDate.toDateString(); // Returnera datumet som en sträng
  }

  return (
    <Box sx={{ backgroundColor: "#fff", p: 2 }}>
      <Box sx={{ textAlign: "center", mx: "auto", pt: "2rem" }}>
        <Typography variant="h3" sx={{ color: "black" }}>
          Latest updates
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 5,
          padding: 10,
          justifyContent: "center",
        }}
      >
        {blogposts.map((post) => (
          <Card key={post.id} sx={{ width: "100%" }}>
            <CardMedia
              sx={{ height: 140 }}
              image={post.image}
              title={post.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ marginBottom: "10px" }}
              >
                Published: {generateRandomDate()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ color: "black" }}>
                Read more
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
