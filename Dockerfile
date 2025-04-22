# Step 1: Use an official Node.js image as the base image
FROM node:16-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to install dependencies first
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Serve the app using a simple HTTP server (like serve)
RUN npm install -g serve

# Step 8: Expose the port that the app will run on
EXPOSE 3000

# Step 9: Command to run the application
CMD ["serve", "-s", "build", "-l", "3000"]
