
## Travel Zen App
This is my first full-stack web application, named Travel Zen. It utilizes Express for the backend and Mongoose to connect to my MongoDB account. The backend is running on PORT 3000. I have separated the controllers for reviews, tours, users, and authentication. For user authentication, I explored JWT and password hashing for the first time. The authentication is fully functional, including the token generation and validation. The application uses three schemas, organized in the models folder.

## Backend
I used
Express: For server-side logic.
Mongoose: For MongoDB interactions.
JWT: For user authentication.
BCrypt: For password hashing.
Controllers: Separated controllers for reviews, tours, users, and authentication.
User Authentication: Implemented with JWT and password hashing.
Database Connection: Connected to MongoDB using the DB_URL.
My experience with the backend development was straightforward. Connecting to my MongoDB account using the DB_URL was an overall easy process.

## Frontend
I used
Vite: For building the frontend, running on PORT 5173.
React: Utilized hooks like useEffect, useContext, and useState.
React Router: For navigating between different pages.
CSS: Each component has its own CSS file for styling.
Components: Organized in a components folder, each with its own CSS file.
Browser Router: Used for navigation in the footer and nav bar across 4 pages (Home, Destinations, Register, and Login).
Image Handling: Added images from my computer to the public folder for the carousel and destinations page.
Carousel
Initially, I tried to use react-bootstrap for the carousel, but its CSS conflicted with my existing styles. After several unsuccessful attempts to resolve this, I opted to create a custom carousel. I used symbols from the Windows Character Map for navigation.

## Reviews Component
I aimed to allow users to edit or delete only their own reviews once logged in. Currently, the functionality for posting reviews is working, requiring the user to be logged in and tracking the userID. However, the edit and delete functionalities are not fully operational and will be improved in future updates.

## Tours Component
The Tours page is not fully completed. I am fetching all destinations from my backend API, but haven't yet implemented functionality to interact with the fetched information.

## Pages
The application includes four main pages:
Home
Destinations
Register
Login
and also a "Log Out" button which successfully logs the user out.

## Deployment
The project isn't deployed yet.I changed the script in the frontend to "start". To run the servers locally, use npm start for each.

## Conclusion
Travel Zen is a work in progress, with many foundational features implemented. I plan to continue enhancing the application, particularly the review management and tours page functionalities. This project has been a valuable learning experience, especially in integrating user authentication and managing a full-stack development workflow.
