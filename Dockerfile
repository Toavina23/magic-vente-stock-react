# First stage: build environment
FROM node:16-alpine as build
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source files
COPY . ./

# Build static files
RUN npm run build

# Second stage: production environment
FROM alpine:latest as production

# Install node and serve
RUN apk add --no-cache nodejs npm && \
    npm install -g serve

# Set app serving directory
WORKDIR /app

# Copy built assets from the build stage
COPY --from=build /app/dist /app/build

# Expose the port the app runs on
EXPOSE 5000

# Command to run the app
CMD ["serve", "-s", "build", "-l", "5000"]