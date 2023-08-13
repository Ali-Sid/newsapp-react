# newsapp-react

# News App Documentation

The **News App** is a React application that allows users to view news articles based on different categories and countries. It provides a user-friendly interface for selecting the desired category and country, and displays the corresponding news articles.
## Table of Contents

- Installation
- Usage
- Components
- Custom Styling
- Props
- Dependencies
- Contributing
- License

## Installation

#### To install and run the News App locally, follow these steps:

    Clone the repository:


   `git clone https://github.com/your-username/news-app.git`

    ###Navigate to the project directory:

    cd news-app

    ###Install the dependencies:

    npm install

    ###Start the development server:

    npm start

    ###Open your web browser and visit http://localhost:3000 to view the News App.

## Usage

The News App allows users to select a category and country to view news articles. Here's how to use the app:

    Select a category by clicking on one of the category buttons. The available categories are General, Business, Entertainment, Health, Science, Sports, and Technology.

    Select a country from the dropdown menu. The available countries are India, USA, UK, Australia, New Zealand, Canada, and Singapore.

    The app will display the selected category and render the corresponding news articles.

    Scroll through the news articles to read the headlines and click on an article to view the full details.

## Components

The News App consists of the following components:

    **App:** The main component that serves as the entry point of the application. It renders the UI elements, including the background image, title, country selection, category buttons, selected category display, and the MyComponent component.

    **MyComponent:** A custom component that fetches and displays news articles based on the selected category and country. It communicates with the News API to retrieve the news data.

    **BackgroundImage:** A component that renders a background image for the app.

    **CountryButton:** A component that renders a select dropdown for selecting a country. It receives the selected country and onChange function as props.

## Custom Styling

The News App uses custom styling to enhance the appearance of the UI elements. The following custom styles are applied:

    The WhiteSelect component applies custom styles to the Select component and its child elements to achieve a white-themed appearance. It changes the color of the select text, underline, arrow icon, and dropdown menu. It also adjusts the height and padding of the dropdown menu and changes the border color on hover.

## Props

The CountryButton component accepts the following props:

    selectedCountry (string, required): The currently selected country. It determines the value of the select dropdown.

    onChange (function, required): A callback function that is called when the selected country changes. It receives the new country value as an argument.

## Dependencies

The News App relies on the following dependencies:

    1. React: A JavaScript library for building user interfaces.

    1. React Router: A library for handling routing in a React application.

    1. Material-UI: A popular React UI framework that provides pre-built components and styling options.

    1. Prop Types: A library for type-checking React props.

    1. Axios: A library for making HTTP requests.

## Contributing

Contributions to the News App are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

The News App is open source and released under the MIT License. Feel free to use, modify, and distribute the code.
