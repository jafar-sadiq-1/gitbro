# Use the official Node.js LTS image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your app runs on (default: 3000)
EXPOSE 3000

# Command to run the server.js file
CMD ["node", "server.js"]
