# E-commerce App

This is a simple and clean e-commerce application built using React and various other libraries. It allows users to view a list of products, view product details, login and see their profile.

The app interacts with the [DummyJSON API](https://dummyjson.com) for fetching product data, user data, and handling authentication.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [API Endpoints](#api-endpoints)
5. [How to Use](#how-to-use)
6. [Error Handling](#error-handling)
7. [Bonus Features](#bonus-features)
8. [Deployment](#deployment)
9. [Contributing](#contributing)

---

## Features

- **User Authentication:**

  - Login page with username and password.
  - Displays a toaster message when the user is logged in.
  - Logout functionality to clear session and return to the login screen.

- **Product List View:**

  - Displays a list of products fetched from the DummyJSON API.
  - Each product shows the name, price, and a thumbnail image.
  - Clicking on a product navigates to the Product Detail View.

- **Product Detail View:**

  - Displays product details including:
    - ID
    - Name
    - Description
    - Price
    - Discount Percentage (if available)
    - Stock
  - "Add to Cart" button (does not implement cart functionality, just for UI)

- **User Profile View:**
  - Accessible after login via navbar.
  - Displays the logged-in user's name, email, age, phone number, and image.
  - Includes a logout button to clear the session.

---

## Tech Stack

- **React**: Frontend library for building UI components.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: HTTP client for making API requests.
- **React Router DOM**: For handling routing and navigation.
- **TypeScript**: A statically typed superset of JavaScript.
- **React Hot Toast**: For displaying notifications.
- **gh-pages**: For deploying the app to GitHub Pages.

---

## Getting Started

To get started with this project locally, follow the steps below:

### Prerequisites

- [Node.js](https://nodejs.org/) (I'm using version 18.x)
- [npm](https://npmjs.com/) (comes with Node.js)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ecommerce-app.git
   cd ecommerce-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   This will start the app on `http://localhost:3000`.

---

## API Endpoints

This app interacts with the following API endpoints:

### Products

- **List products**:  
  `GET https://dummyjson.com/products`
- **Product details**:  
  `GET https://dummyjson.com/products/{id}`

### Authentication

- **Login**:  
  `POST https://dummyjson.com/auth/login`
- **Logout**:  
  Logout by clearing local session (no specific API endpoint for logout).

### Users

- **User details**:  
  `GET https://dummyjson.com/auth/me`

---

## How to Use

1. **Login**:  
   Enter your username and password on the login screen to authenticate. Upon successful login, you'll see a toaster message indicating that you are logged in.

2. **View Products**:  
   Navigate to the product listing page. Click on a product cart button to view its details.

3. **View Profile**:  
   Once logged in, navigate to the user profile view to see your information. You can also log out from this page.

4. **Logout**:  
   Clicking the "Logout" button will clear your session and return you to the login screen.

---

## Error Handling

- **API Errors**:  
  Errors from the API are handled gracefully with appropriate error messages shown to the user.

- **Loading States**:  
  While fetching product or user data, a loading text is displayed until the data is fully loaded.

- **Login Errors**:  
  If authentication fails (e.g., wrong credentials), an error message will appear notifying the user to check their login details.

---

## Bonus Features

- **Error Handling Enhancements**:  
  Improved error messages are displayed for failed API calls, and the user is informed when there are network issues.

- **Loading Indicators**:  
  A loading mesage appears when fetching product or user data to indicate the app is processing.

---

## Deployment

To deploy the app to GitHub Pages, run the following commands:

1. Add the homepage property in `package.json`:

   ```json
   "homepage": "https://yourusername.github.io/ecommerce-app"
   ```

2. Build the app for production:

   ```bash
   npm run build
   ```

3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

---

## Contributing

Feel free to fork this repository, open issues, or submit pull requests for any enhancements or fixes. Contributions are welcome!

---

By following the above instructions, you should be able to run, test, and deploy the e-commerce app with ease.
