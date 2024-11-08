# Weather-App 🌤️

A simple weather forecasting web application that fetches real-time weather data using the OpenWeatherMap API. Enter any city name to get the current temperature, humidity, wind speed, and weather conditions with a relevant image.

## Features

- Search by city to get current weather details.
- Displays temperature, humidity, and wind speed.
- Shows relevant weather icons based on the weather condition (e.g., Clear, Clouds, Rain).
- Error handling for invalid city names.

## Screenshots
Include screenshots of your application here for better presentation.

## Demo
Link to the live demo if hosted.

## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**
- **OpenWeatherMap API**

## Getting Started

### Prerequisites

- A modern web browser.
- An API key from OpenWeatherMap (required to fetch weather data).

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/weather-forecasting-app.git
   cd weather-forecasting-app
   ```
2. Add your OpenWeatherMap API key:
- Open index.js.
- Replace const apiKey = "YOUR_API_KEY"; with your actual API key:
```
const apiKey = "your_actual_api_key";
```

## Usage

1. Open `index.html` in your preferred browser.
2. Enter the name of a city in the search bar and click the search icon to fetch the weather information.
3. The app displays:
    - Temperature in Celsius.
    - Humidity percentage.
    - Wind speed in km/h.
    - A relevant weather icon.


## Project Structure
```
├── index.html         # Main HTML file
├── style.css          # CSS for styling
├── index.js           # JavaScript for API calls and DOM manipulation
└── assets/            # Folder for weather condition images
    ├── clear.JPG
    ├── cloudy.JPG
    ├── drizzle.JPG
    ├── humidity.JPG
    ├── rain.JPG
    ├── snow.JPG
    ├── wind.JPG
```
