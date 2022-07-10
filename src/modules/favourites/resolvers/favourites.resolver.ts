export const favouritesResolver = {
  Query: {
    favourites: async (_: null, __: null, { dataSources }: any) => {
      return dataSources.favouritesAPI.getFavourites();
    },
  },

  Mutation: {
    addTrackToFavourites: async (
      _: null,
      { id }: any,
      { dataSources }: any
    ) => {
      const user = await dataSources.usersAPI.getId();
      return await dataSources.favouritesAPI.addToFavourites(
        "tracks",
        user._id,
        id
      );
    },
    addBandToFavourites: async (_: null, { id }: any, { dataSources }: any) => {
      const user = await dataSources.usersAPI.getId();
      return await dataSources.favouritesAPI.addToFavourites(
        "bands",
        user._id,
        id
      );
    },
    addArtistToFavourites: async (
      _: null,
      { id }: any,
      { dataSources }: any
    ) => {
      const user = await dataSources.usersAPI.getId();
      return await dataSources.favouritesAPI.addToFavourites(
        "artists",
        user._id,
        id
      );
    },
    addGenreToFavourites: async (
      _: null,
      { id }: any,
      { dataSources }: any
    ) => {
      const user = await dataSources.usersAPI.getId();
      return await dataSources.favouritesAPI.addToFavourites(
        "genres",
        user._id,
        id
      );
    },
  },
};
