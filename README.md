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