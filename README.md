# Mobile Middletier
The middletier that handles gathering and transforming Arc content for various Mobile Apps

## Local Development
This project leverages Docker for local development, make sure Docker and Docker Compose are installed before continuing. The local server also uses hot-reload, keep in mind it will take a few seconds for Express to restart after making code changes.
1. Run ```npm install --only=dev``` to install eslint locally
2. Create [pm2.json](https://confluence.phillynews.com/display/ENG/Mobile+Middletier) in project root.

### Start the Docker containers

```sh
docker-compose up server -d 
```

### Stop the Docker containers
```sh
docker-compose down
```

## Tests

To the run the test suite (via Docker)
```sh
docker-compose up tests
```

## Routes