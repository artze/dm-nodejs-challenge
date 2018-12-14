FROM node:carbon-alpine

# Prepare project directory and copy project files
RUN mkdir -p /opt/deedmob/application
WORKDIR /opt/deedmob/application
COPY . /opt/deedmob/application

# Install dependencies
RUN npm install

# Set up ENV
ARG NODE_ENV=production
ENV NODE_ENV ${NODE_ENV}

EXPOSE 9229

CMD ["npm", "start"]
