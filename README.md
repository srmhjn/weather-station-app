# weather-station-app

# Steps - Running Docker container

#docker build
docker build --tag node-docker .
>>
#view images
docker images
>>
#tag images
docker tag node-docker:latest node-docker:v1.0.0
>>
#Run docker
docker run --publish 8000:8000 node-docker
