export const favouritesResolver = {
  Query: {
    favourites: async (_: null, __: null, { dataSources }: any) => {
      return dataSources.favouritesAPI.getFavourites();
    },
  },

  Mutation: {
    addTrackToFavourites: async (
      _: null,
      { id }: { id: string },
      { dataSources }: any
    ) => {
      return await dataSources.favouritesAPI.addToFavourites("tracks", id);
    },
    addBandToFavourites: async (
      _: null,
      { id }: { id: string },
      { dataSources }: any
    ) => {
      return await dataSources.favouritesAPI.addToFavourites("bands", id);
    },
    addArtistToFavourites: async (
      _: null,
      { id }: { id: string },
      { dataSources }: any
    ) => {
      return await dataSources.favouritesAPI.addToFavourites("artists", id);
    },
    addGenreToFavourites: async (
      _: null,
      { id }: { id: string },
      { dataSources }: any
    ) => {
      return await dataSources.favouritesAPI.addToFavourites("genres", id);
    },
  },
};
