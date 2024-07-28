
# Assigment : React-Node.js

This is the frontend part of the Hotel Details Application, built with React.

This React application displays hotel details, fetching data from a backend API. It includes features like shimmer loading and 404 page handling.


## Features

- Responsive design for 
- desktop and mobile
- Shimmer loading while 
- fetching data
- Use configuration JSON file for static values, such as the API base URL.
- 404 page for unknown 
- Reusable React components


## Technologies Used

- React
- React Router
- Shimmer Loader


## Setup and Installation

- Navigate to the frontend directory:
`cd w3 react-node`

Install dependencies:
`npm install`


Running the Application

Start the development server:
`npm start`

Access the application at http://localhost:3000

Routes

`/hotel/:hotelSlug: `Display details for a specific hotel
`*: 404 page for unknown routes`

Configuration

`src/config.json`
Contains API base URL and other static values

