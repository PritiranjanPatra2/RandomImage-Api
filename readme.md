
# Random Image API

This project provides an API endpoint to fetch a random user image using the free [Random User Generator API](https://randomuser.me/).

## Features

- Fetches a random user image dynamically.
- Lightweight and simple Express.js server.
- Robust error handling with `try-catch`.
- Easily configurable via environment variables.

## Prerequisites

Before running the project, ensure you have:

- [Node.js](https://nodejs.org/) installed.
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for package management.

## Getting Started

### 1. Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/PritiranjanPatra2/RandomImage-Api.git
cd RandomImage-Api
```

### 2. Install Dependencies

Install the required dependencies:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root and define the `PORT` if required:

```
PORT=9000
```

### 4. Run the Server

Start the server:

```bash
npm start
```

The server will run on the specified port (default is `9000`).

## API Endpoints

### Fetch Random User Image

**GET** `/api/image/random`

#### Response

```json
{
    "message": "success",
    "image": "https://randomuser.me/api/portraits/men/75.jpg"
}
```

- **message**: Status of the request.
- **image**: URL of the random user image.

## Built With

- [Express.js](https://expressjs.com/) - Web framework.
- [Axios](https://axios-http.com/) - HTTP client for API requests.
- [dotenv](https://github.com/motdotla/dotenv) - Environment variable management.

## Error Handling

If an error occurs during the API call or response processing, the server will return:

```json
{
    "message": "Internal Server Error",
    "error": "Error details here"
}
```

## License

This project is open-source and available under the MIT License.
