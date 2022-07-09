export const favoritesResolver = {
  Query: {
    allFavorites: async (_: null, __: null, { dataSources }: any) => {
      return dataSources.favoritesAPI.getAllFavorites();
    },
  },
};
