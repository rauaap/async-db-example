# Use the official MySQL 8.0 image from Docker Hub
FROM mysql:8.0

# Set environment variables
ENV MYSQL_DATABASE=mydatabase \
    MYSQL_USER=myuser \
    MYSQL_PASSWORD=mypassword \
    MYSQL_ROOT_PASSWORD=rootpassword

# Copy database initialization script to Docker entrypoint directory
COPY ./init.sql /docker-entrypoint-initdb.d/

# Expose port 3306 to allow external connections
EXPOSE 3306

