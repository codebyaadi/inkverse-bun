# Use an official Bun runtime as a parent image
FROM oven/bun:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy only package.json and bun.lockb (if exists) first to leverage Docker cache
COPY package.json bun.lockb* ./

# Install any needed packages specified in package.json
RUN bun install

# Copy the rest of the current directory contents into the container at /usr/src/app
COPY . .

# Make port 5173 available to the world outside this container
EXPOSE 5173

# Command to run the app
CMD ["bun", "run", "dev"]
