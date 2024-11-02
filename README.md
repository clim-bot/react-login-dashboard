
# React Login Dashboard App

This project is a simple React application that demonstrates user login functionality, a dashboard page, and a 404 page for undefined routes. It also features a clean and modern UI with React Context for state management and uses a modular project structure.

## Project Structure

```
react-login-dashboard
├── public
├── src
│   ├── assets              # Static assets (e.g., images, fonts)
│   ├── components          # Reusable components like Login, Dashboard, and NotFound
│   ├── config              # Configuration files
│   ├── context             # React Context for managing global state
│   ├── hooks               # Custom hooks (e.g., useAuth for authentication)
│   ├── services            # API calls and business logic
│   ├── utils               # Utility functions and helpers
│   ├── styles              # CSS files for each component and global styles
│   ├── App.js              # Main application component
│   └── index.js            # Entry point of the application
└── README.md               # Project documentation
```

## Features

- **Login Page**: A form with a username and password field. If the correct credentials are provided, it redirects to the dashboard.
- **Dashboard Page**: Displays a welcome message and a logout button.
- **404 Page**: Renders a "Page Not Found" message for undefined routes.
- **Authentication**: Uses React Context to manage authentication status across components.
- **Modular Structure**: Organized into folders to separate concerns and keep code maintainable.

## Installation

To get started with the app, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/clim-bot/react-login-dashboard.git
    cd react-login-dashboard
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the app:

    ```bash
    npm start
    ```

    The app should now be running at `http://localhost:3000`.

## Packages Installed

- **react-router-dom**: For routing between different pages (login, dashboard, and 404)

    ```bash
    npm install react-router-dom
    ```

## Usage

1. Visit `/login` to see the login form.
2. Use the credentials:
    - **Username**: `user`
    - **Password**: `password`
3. After logging in, you'll be redirected to `/dashboard`.
4. Access `/dashboard` directly if already authenticated.
5. Navigate to an undefined route (e.g., `/unknown`) to see the 404 page.

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **React Router**: For routing between different pages (login, dashboard, and 404)
- **React Context**: For global state management of authentication status
- **CSS**: For styling components with a modern and clean UI

## Folder Structure Details

### Components
Holds the main UI components (e.g., Login, Dashboard, NotFound).

### Context
Manages global state with React Context (e.g., authentication state with AuthContext).

### Hooks
Contains custom hooks for reusable logic (e.g., useAuth for authentication logic).

### Services
Stores logic for interacting with APIs and handling authentication (e.g., authService).

### Utils
Holds utility functions that are used across the application.

### Styles
CSS files for each component, maintaining consistent styling across the app.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.
