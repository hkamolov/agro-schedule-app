# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Build the application
RUN npm run build

# Expose the port on which your application will run
EXPOSE 3000

# Command to start the application
CMD ["npm", "run", "start:prod"]
