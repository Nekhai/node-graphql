export const bandsResolver = {
  Query: {
    bands: async (
      _: null,
      { limit = 0, offset = 0 }: { limit: number; offset: number },
      { dataSources }: any
    ) => {
      const result = await dataSources.bandsAPI.getBands(limit, offset);
      return result.items;
    },
    band: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      return dataSources.bandsAPI.getBand(id);
    },
  },

  Band: {
    genres: async ({ genresIds }: any, _: null, { dataSources }: any) => {
      if (!genresIds.length) return;

      return await genresIds.map(async (id: string) => {
        return await dataSources.genresAPI.getGenre(id);
      });
    },
  },

  Mutation: {
    createBand: async (_: null, { input }: any, { dataSources }: any) => {
      return await dataSources.bandsAPI.createBand(input);
    },
    deleteBand: async (
      _: null,
      { id }: { id: string },
      { dataSources }: any
    ) => {
      return await dataSources.bandsAPI.deleteBand(id);
    },
    updateBand: async (_: null, { id, input }: any, { dataSources }: any) => {
      return await dataSources.bandsAPI.updateBand(id, input);
    },
  },
};
