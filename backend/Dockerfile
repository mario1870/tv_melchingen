FROM node:18
# alternatively you can use FROM strapi/base:latest

# Set up working directory
WORKDIR /elferturnier

# Copy package.json to root directory
COPY package*.json ./

# Install dependencies, but not generate a yarn.lock file and fail if an update is needed
RUN npm install

# Copy the rest of the application files
COPY . .

# Run on port 3000
EXPOSE 3000

# Start strapi server
CMD ["npm", "start"]