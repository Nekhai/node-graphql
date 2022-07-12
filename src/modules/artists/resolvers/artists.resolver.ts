export const artistsResolver = {
  Query: {
    artists: async (
      _: null,
      { limit = 0, offset = 0 }: { limit: number; offset: number },
      { dataSources }: any
    ) => {
      const result = await dataSources.artistsAPI.getArtists(limit, offset);
      return result.items;
    },
    artist: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      return dataSources.artistsAPI.getArtist(id);
    },
  },

  Artist: {
    bands: async ({ bandsIds }: any, _: null, { dataSources }: any) => {
      if (!bandsIds.length) return;

      return await bandsIds.map(async (id: string) => {
        return await dataSources.bandsAPI.getBand(id);
      });
    },
  },

  Mutation: {
    createArtist: async (_: null, { input }: any, { dataSources }: any) => {
      return await dataSources.artistsAPI.createArtist(input);
    },
    deleteArtist: async (
      _: null,
      { id }: { id: string },
      { dataSources }: any
    ) => {
      return await dataSources.artistsAPI.deleteArtist(id);
    },
    updateArtist: async (_: null, { id, input }: any, { dataSources }: any) => {
      return await dataSources.artistsAPI.updateArtist(id, input);
    },
  },
};
