export const favouritesResolver = {
  Query: {
    favourites: async (_: null, __: null, { dataSources }: any) => {
      return dataSources.favouritesAPI.getFavourites();
    },
  },
};
