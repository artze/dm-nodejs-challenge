FROM node:carbon-alpine

# Prepare project directory and copy project files
RUN mkdir -p /opt/hosted-storage/
WORKDIR /opt/hosted-storage/
COPY . /opt/hosted-storage/

# Install dependencies
RUN npm install

# Set up ENV
ARG NODE_ENV=production
ENV NODE_ENV ${NODE_ENV}

EXPOSE 3000

CMD ["npm", "start"]
