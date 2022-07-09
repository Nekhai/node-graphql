import { mergeResolvers } from "@graphql-tools/merge";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";

import { tracksResolver } from "./modules/tracks/resolvers/tracks.resolver";
import { bandsResolver } from "./modules/bands/resolvers/bands.resolver";
import { favoritesResolver } from "./modules/favorites/resolvers/favorites.resolver";
import { genresResolver } from "./modules/genres/resolvers/genres.resolver";
import { artistsResolver } from "./modules/artists/resolvers/artists.resolver";
import { albumsResolver } from "./modules/albums/resolvers/albums.resolver";

import { TracksAPI } from "./modules/tracks/services/tracks.services";
import { BandsAPI } from "./modules/bands/services/bands.services";
import { GenresAPI } from "./modules/genres/services/genres.services";
import { FavoritesAPI } from "./modules/favorites/services/favorites.services";
import { AlbumsAPI } from "./modules/albums/services/albums.services";
import { UsersAPI } from "./modules/users/services/users.services";
import { ArtistsAPI } from "./modules/artists/services/artists.services";

export const typeDefs = loadSchemaSync("./**/*.graphql", {
  loaders: [new GraphQLFileLoader()],
});

export const resolvers = mergeResolvers([
  bandsResolver,
  tracksResolver,
  favoritesResolver,
  genresResolver,
  artistsResolver,
  albumsResolver,
]);

export const sources = () => {
  return {
    tracksAPI: new TracksAPI(),
    bandsAPI: new BandsAPI(),
    genresAPI: new GenresAPI(),
    favoritesAPI: new FavoritesAPI(),
    usersAPI: new UsersAPI(),
    albumsAPI: new AlbumsAPI(),
    artistsAPI: new ArtistsAPI(),
  };
};
