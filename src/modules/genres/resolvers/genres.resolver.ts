export const genresResolver = {
  Query: {
    genres: async (_: null, __: null, { dataSources }: any) => {
      const result = await dataSources.genresAPI.getGenres();
      return result.items;
    },
    genre: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      return dataSources.genresAPI.getGenre(id);
    },
  },
};
