import { useEffect } from "react";
import useFetchData from "./useFetchData";
import PropTypes from "prop-types";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";

export default function MyComponent({ category, country }) {
  // Define the API URL based on the category and country props
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=14b1ace4ef6640caaa6fd0b58b63ff47`;
  // const url = `http://api.mediastack.com/v1/news?access_key=4ef8f693af146dbe6a2e74043fddebb9&category=${category}&country=${country}`
  // const url = `https://newsdata.io/api/1/news?apikey=pub_26711a35ac1c1f92d4d8763e5ad403fa5c8d1&country=${country}&category=${category}`
  // const url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=${country}&topic=${category}`


  
  // Custom hook to handle fetching data
  const { data, loading, error, setData, setLoading, setError } =
    useFetchData(url);
    
  
  // Fetch data from the API when the component mounts or when the URL changes  
  useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);

    fetch(url)
    .then((response) => {
      if(!response.ok) {
        throw new Error("Failed to fetch data")
      }
      return response.json()
    })
    .then((jsonData) => {
      setData(jsonData.articles)
    })
    .catch((error) => {
      setData(error)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [url, setData, setLoading, setError]);


  
  // Function to open the news article in a new tab
  const handleLink = (url) => {
    window.open(url, "_blank");
  };


  // Render loading state if data is still being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

    // Render error message if there was an error fetching data
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <>
      <Grid container spacing={3} style={{ padding: "70px" }}>
        {Array.isArray(data) ? (
          // Render news cards if data is available
          data.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.url}>
              <Card
                style={{
                  backgroundColor: "#333030",
                  color: "#e0e1e1",
                  borderRadius: "15px",
                }}
              >
                <CardActionArea onClick={() => handleLink(item.url)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.urlToImage}
                    alt={item.title}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography gutterBottom variant="body2">
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleLink(item.url)}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          // Render message if no data is available
          <div>No data available</div>
        )}
      </Grid>
    </>
  );
}


// Props validation
MyComponent.propTypes = {
  category: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
}
