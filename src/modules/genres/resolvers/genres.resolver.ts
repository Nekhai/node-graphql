export const genresResolver = {
  Query: {
    allGenres: async (_: null, __: null, { dataSources }: any) => {
      const result = await dataSources.genresAPI.getAllGenres();
      return result.items;
    },
    genre: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      return dataSources.genresAPI.getGenre(id);
    },
  },
};
