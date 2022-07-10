# Node-graphql

## Installation

1. Clone/download repo https://github.com/Nekhai/node-graphql
2. `npm install`

## Usage

rename .env.example to .env

## Start

`npm run start:dev`

## Microservices installation

1. Clone/download repo https://github.com/Nekhai/node-graphql-service
2. `npm install` in root directory

## Microservices usage

rename all .env.example to .env, in all directories, and set databese url

## Microservices start

`npm run run:all`

## Database

run your own database

## Queries

- artist
- artists
- genre
- genres
- track
- tracks
- band
- bands
- album
- albums
- jwt
- user
- favourites (available only for logged in user)

## Mutation

Mutation requests available only for logged in users. (except Users.register)

- Artists

* createArtist
* deleteArtist
* updateArtist

- Genres

* createGenre
* deleteGenre
* updateGenre

- Bands

* createBand
* deleteBand
* updateBand

- Tracks

* createTrack
* deleteTrack
* updateTrack

- Albums

* createAlbum
* deleteAlbum
* updateAlbum

- Users

* register

- Favourites

* addTrackToFavourites
* addBandToFavourites
* addArtistToFavourites
* addGenreToFavourites
