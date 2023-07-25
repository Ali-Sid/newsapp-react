import { useState } from "react";
import MyComponent from "./Components/MyComponent";
import { Button, styled } from "@mui/material";
import BackgroundImage from "./Components/BackgroundImage";
import CountryButton from "./Components/CountryButton";

// const useStyles = makeStyles({
//   button: {
//     color: "#FFFFFF",
//     borderColor: "#FFFFFF",
//     margin: "8px",
//     "&:hover": {
//       backgroundColor: "#FFFFFF",
//       color: "#333333",
//     },
//   },
// });

const CustomButton = styled(Button)({
  color: "#FFFFFF",
  borderColor: "#FFFFFF",
  margin: "8px",
  "&:hover": {
    backgroundColor: "#FFFFFF",
    color: "#333333",
  },
});

function App() {
  // const classes = useStyles();
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("in");

  const handleCountryChange = (newCountry) => {
    setCountry(newCountry);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <>
      <BackgroundImage />
      <div className="div-container">
        <div className="title-container">
          <h1>
            <strong>NewsHead: Stay on Top</strong>
          </h1>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "100px"}}>
          <h2>News Feed</h2>
          <CountryButton
            selectedCountry={country}
            onChange={handleCountryChange}
          />
          </div>
        </div>
        <div>
          <CustomButton
            variant="outlined"
            onClick={() => handleCategoryChange("general")}
          >
            General
          </CustomButton>
          <CustomButton
            variant="outlined"
            onClick={() => handleCategoryChange("business")}
          >
            Business
          </CustomButton>
          <CustomButton
            variant="outlined"
            onClick={() => handleCategoryChange("entertainment")}
          >
            Entertainment
          </CustomButton>
          <CustomButton
            variant="outlined"
            onClick={() => handleCategoryChange("health")}
          >
            Health
          </CustomButton>
          <CustomButton
            variant="outlined"
            onClick={() => handleCategoryChange("science")}
          >
            Science
          </CustomButton>
          <CustomButton
            variant="outlined"
            onClick={() => handleCategoryChange("sports")}
          >
            Sports
          </CustomButton>
          <CustomButton
            variant="outlined"
            onClick={() => handleCategoryChange("technology")}
          >
            Technology
          </CustomButton>
        </div>
        <div>
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)} News</h3>
          <MyComponent country={country} category={category} />
        </div>
      </div>
      <p><strong>Made with ❣️ by Ali Siddiqui</strong></p>
    </>
  );
}

export default App;
