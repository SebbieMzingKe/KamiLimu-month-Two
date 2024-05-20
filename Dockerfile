# initial layer of image that we create
FROM node:20-alpine 
# as BUILD_IMAGE
WORKDIR /app

#copy package.json
# COPY package*.json .


#copy all remaining files
COPY . .


#install all our packages/dependencies listed in package.json file
RUN npm install



#build our project
EXPOSE 5173

#implementing the multi stage build
#FROM node:21-alpine as PODUCTION_IMAGE

CMD ["npm", "run", "dev"]