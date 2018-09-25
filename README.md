# Soundcloud Pulse Player

This is a simple react application which uses the soundcloud API for seraching and playing the tracks.

## Running

### Development

Local Development using webpack, nodemon for watching changes.

```sh
npm run-script dev
```
Open http://localhost:4000/

### Debug

```sh
npm run-script debug
```

### Production

```sh
npm start
```

## Issues

If you are getting an issue running the application, a common problem is the port is already in use which is `4000`

Using bash

``` sh
lsof -ti:4000 | xargs kill
```

# Docker
Cheatsheet commands https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes

``` sh
# Build
docker build -t soundcloud-player .
```

``` sh
#Local Docker Images
docker images -a

# Run Container
docker run -p 3500:8080 soundcloud-player

# Keeps running container with -d
docker run -p 3500:8080 -d soundcloud-player
```

``` sh
# Get container ID
docker ps -a

# Print app output
docker logs <container id>

# Enter the container
docker exec -it <container id> /bin/bash

# Machine IP
docker-machine ip  node-express-docker

# Other Docker Commands
docker stop <container-id>
docker rmi $(docker images -a -q) #delete all images
docker images purge
docker rmi Image Image
docker system prune

# Example
Running on http://localhost:3500

# Test
curl -i localhost:3500

```