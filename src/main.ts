import { ApolloServer } from "apollo-server";
import "dotenv/config";

// Schemas
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";

const typeDefs = loadSchemaSync("./**/*.graphql", {
  loaders: [new GraphQLFileLoader()],
});

// Resolvers
import { mergeResolvers } from "@graphql-tools/merge";

import { tracksResolver } from "./modules/tracks/resolvers/tracks.resolver";
import { bandsResolver } from "./modules/bands/resolvers/bands.resolver";
import { favoritesResolver } from "./modules/favorites/resolvers/favorites.resolver";
import { genresResolver } from "./modules/genres/resolvers/genres.resolver";

const resolvers = mergeResolvers([
  bandsResolver,
  tracksResolver,
  favoritesResolver,
  genresResolver,
]);

import { TracksAPI } from "./modules/tracks/services/tracks.services";
import { BandsAPI } from "./modules/bands/services/bands.services";
import { GenresAPI } from "./modules/genres/services/genres.services";
import { FavoritesAPI } from "./modules/favorites/services/favorites.services";
import { AlbumsAPI } from "./modules/albums/services/albums.services";
import { UsersAPI } from "./modules/users/services/users.services";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      tracksAPI: new TracksAPI(),
      bandsAPI: new BandsAPI(),
      genresAPI: new GenresAPI(),
      favoritesAPI: new FavoritesAPI(),
      usersAPI: new UsersAPI(),
      albumsAPI: new AlbumsAPI(),
    };
  },
});

const PORT = process.env.PORT || 4000;

server.listen({ port: PORT }).then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port ${PORT}
    📭  Query at https://studio.apollographql.com/dev
  `);
});
