# Airbnb Home Registration Page

A simple web application for registering homes on Airbnb, built with Express.js.

## Features

- Clean, responsive registration form
- Fields for home details: name, description, price, location, guests, bedrooms, bathrooms, amenities
- Photo upload capability
- Success page after registration
- Styled with CSS for a modern look

## Installation

1. Navigate to the project directory:
   ```
   cd airbnb-registration
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

4. Open your browser and go to `http://localhost:3000`

## Usage

1. Visit the registration page at `/register` or the root `/`
2. Fill out the form with your home details
3. Upload a photo of your home
4. Submit the form
5. You'll see a success message

## Form Fields

- **Home Name**: The name of your property
- **Description**: Detailed description of the home
- **Price per Night**: Cost in USD
- **Location**: City and country
- **Maximum Guests**: Number of people that can stay
- **Bedrooms**: Number of bedrooms
- **Bathrooms**: Number of bathrooms
- **Amenities**: Comma-separated list (e.g., WiFi, Kitchen, Parking)
- **Photo**: Image file of the home

## Technologies Used

- Express.js
- HTML5
- CSS3
- Node.js

## Note

This is a basic implementation. In a real-world application, you would:
- Store data in a database
- Implement user authentication
- Add proper file upload handling
- Include form validation
- Add error handling