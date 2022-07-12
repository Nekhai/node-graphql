export const genresResolver = {
  Query: {
    genres: async (
      _: null,
      { limit = 0, offset = 0 }: { limit: number; offset: number },
      { dataSources }: any
    ) => {
      const result = await dataSources.genresAPI.getGenres(limit, offset);
      return result.items;
    },
    genre: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      return dataSources.genresAPI.getGenre(id);
    },
  },

  Mutation: {
    createGenre: async (_: null, { input }: any, { dataSources }: any) => {
      return await dataSources.genresAPI.createGenre(input);
    },
    deleteGenre: async (
      _: null,
      { id }: { id: string },
      { dataSources }: any
    ) => {
      return await dataSources.genresAPI.deleteGenre(id);
    },
    updateGenre: async (_: null, { id, input }: any, { dataSources }: any) => {
      return await dataSources.genresAPI.updateGenre(id, input);
    },
  },
};
