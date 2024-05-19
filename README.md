
# MERN Chat Application

ChitChat is a real-time messaging platform built using the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS) and WebSockets. It allows users to register, login, and engage in instant messaging with other users.

## Features

- **User Authentication**: Secure registration and login using JWT and bcrypt.js.
- **Real-time Messaging**: Instant messaging with WebSockets.
- **User Management**: Add and manage contacts.
- **Responsive UI**: Built with ReactJS and styled with TailwindCSS for a modern user interface.

## Live Demo

Check out the live application [here](DEMO_LINK).

## GitHub Repository

You can find the source code on GitHub [here](https://github.com/Atul-me/Chitchat.git).

## Installation and Setup

To run this project locally, follow these steps:

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/Atul-me/Chitchat.git
cd mern-chat-application
```

### Backend Setup

1. Navigate to the `backend` directory.

   ```bash
   cd backend
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:

   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server.

   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the `frontend` directory.

   ```bash
   cd frontend
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Start the frontend server.

   ```bash
   npm start
   ```

### WebSocket Server Setup

1. WebSockets are integrated within the backend server. Make sure your backend server is running to enable real-time messaging.

### Deployment

The application is deployed on Vercel. To deploy your own instance, follow Vercel's deployment documentation and connect it to your GitHub repository.

## Technologies Used

- **Frontend**: ReactJS, TailwindCSS
- **Backend**: NodeJS, ExpressJS
- **Database**: MongoDB
- **Authentication**: bcrypt.js, JWT
- **Real-time Communication**: WebSockets (Socket.IO)
- **Deployment**: Vercel

## Contributing

We welcome contributions! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
