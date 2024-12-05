# Use the official Nginx image as a base
FROM nginx:latest

# Copy the HTML file into the container's default HTML directory
COPY index.html /usr/share/nginx/html/

# Expose port 80 for accessing the web page
EXPOSE 80
