import { FormControl, MenuItem, Select, styled } from "@mui/material";
import { PropTypes } from "prop-types";

// Custom styling for the Select component
const WhiteSelect = styled(Select)({
  "& .MuiSelect-select": {
    color: "#ffffff",
    lineHeight: "1",
    border: "1px solid #ffffff",
    borderRadius: "4px",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#ffffff", // Change the color of the underline when not focused
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#ffffff", // Change the color of the underline when focused
  },
  "& .MuiSelect-icon": {
    color: "#ffffff", // Change the color of the arrow icon to white
  },
  "& .MuiSelect-selectMenu": {
    minHeight: "40px", // Adjust the height of the dropdown menu
    paddingTop: "8px", // Add some padding to the top of the dropdown menu
    paddingBottom: "8px", // Add some padding to the bottom of the dropdown menu
  },
  "&.MuiOutlinedInput-root": {
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ffffff", // Change the border color on hover to white
    },
  },
  "& .MuiMenu-paper": {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "#ffffff",
    borderRadius: "4px",
    "& .MuiMenuItem-root": {
      borderBottom: "1px solid #ffffff",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      color: "#ffffff"
    },
  },
});

const CountryButton = ({ selectedCountry, onChange }) => {

  // Function to handle country change
  const handleCountryChange = (event) => {
    const newCountry = event.target.value;
    onChange(newCountry);
  };

  return (
    <FormControl variant="outlined">
      {/* Select component with custom styling */}
      <WhiteSelect
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        {/* Menu items for different countries */}
        <MenuItem value="in">India</MenuItem>
        <MenuItem value="us">USA</MenuItem>
        <MenuItem value="gb">UK</MenuItem>
        <MenuItem value="au">Australia</MenuItem>
        <MenuItem value="nz">New Zealand</MenuItem>
        <MenuItem value="ca">Canada</MenuItem>
        <MenuItem value="sg">Singapore</MenuItem>
      </WhiteSelect>
    </FormControl>
  );
};

// PropTypes for the selectedCountry and onChange props
CountryButton.propTypes = {
  selectedCountry: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CountryButton;
