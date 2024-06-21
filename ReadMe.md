# Time Zone Converter App

This project consists of a full-stack application with a React frontend and a Node.js/Express backend. The application allows users to input a timezone offset to fetch and display the current UTC time and an adjusted time based on the provided timezone.

## Getting Started

These instructions will guide you through setting up and running the project on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following software installed before proceeding:

- Node.js (which includes npm)
- Git (for version control)

### Installation

#### Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/tajstrickland/time-app.git
cd timezone-app
```

#### Set up the Backend

Navigate to the backend directory:

```bash
cd backend
npm install
```

To run the server:

```bash
npm start
```

The server will start on `http://localhost:4000`.

#### Set up the Frontend

In a new terminal window, navigate to the frontend directory:

```bash
cd ../frontend
npm install
```

To start the React application:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

### Usage

- **Viewing the Current UTC Time:** Open the app at `http://localhost:3000`. The current UTC time is displayed by default.
- **Converting Time to a Different Timezone:** Enter a timezone offset in hours into the input box (e.g., `-5` for EST, `3` for MSK), and click the "Get Time" button. The adjusted time for the specified timezone will be displayed.

### API Reference

- **GET `/time`**
  - **Query Parameters:**
    - `timezone` - (optional) The timezone offset in hours from UTC.
  - **Success Response:**
    - **Code:** 200
    - **Content:**
      ```
      {
          "currentTime": "current UTC time in ISO format",
          "adjustedTime": "adjusted time in ISO format"
      }
      ```
  - **Error Response:**
    - **Code:** 500
    - **Content:** `{ error: "Internal Server Error" }`

### Development

To contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Make your changes and test.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch-name`).
6. Create a new Pull Request.

### Authors

- **Taj Strickland** - _Initial work_ - [tajstrickland](https://github.com/tajstrickland)
