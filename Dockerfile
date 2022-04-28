# what type of env / what existing docker image to choose 
FROM node:16
# the directory we are working from basically a way to cd into a directory
WORKDIR /app
# copy package file into the directory 
COPY package*.json ./ 
# install deps 
RUN npm install 
# copy source code (will ignore node_modules thanks to .dockerignore)
COPY . . 
# Set env variables 
# ENV PORT=4000 
# make port available outside docker container
# EXPOSE 4000 
# command to start application
CMD ["npm","start"]