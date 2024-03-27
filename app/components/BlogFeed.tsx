import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Pagination,
  Typography,
} from "@mui/material";
import blogposts from "../data/blogposts.json";

export default function BlogFeed() {
  // Funktion för att generera ett slumpmässigt datum
  function generateRandomDate() {
    const start = new Date(2020, 0, 1); // Startdatum: 1 januari 2020
    const end = new Date(); // Slutdatum: Idag

    {
      /* Använd meningsfulla namn - skall tydligt beskriva variabelns syfte  */
      /* randomizedddmmyy skulle kunna ändras till "randomDate" exempelvis */
    }
    const randomizeddmmyy = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
      // Skapar ett nytt datum som är ett slumpmässigt tidsspann mellan `start` och `end`
    );
    // Konverterar det slumpmässiga datumet till en sträng i formatet "Dag Mån DD ÅÅÅÅ"
    return randomizeddmmyy.toDateString();
  }

  {/* Undvik överflödiga kommentarer - fokusera på det som är viktigt */}

  return (
    <Box sx={{ backgroundColor: "#fff", p: 2 }}>
      <Box sx={{ textAlign: "center", mx: "auto", pt: "1rem" }}>
        <Typography variant="h3" sx={{ color: "black", paddingTop: "2rem" }}>
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
        {/* Undik långa funktioner - hade kunnat brutits ut mot egen komponent */}
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

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination count={10} />
      </Box>
    </Box>
  );
}
