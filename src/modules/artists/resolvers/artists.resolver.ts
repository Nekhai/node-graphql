export const artistsResolver = {
  Query: {
    allArtists: async (_: null, __: null, { dataSources }: any) => {
      const result = await dataSources.artistsAPI.getAllArtists();
      return result.items;
    },
    artist: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      return dataSources.artistsAPI.getArtist(id);
    },
  },

  Artist: {
    bands: async ({ bandsIds }: any, _: null, { dataSources }: any) => {
      return await bandsIds.map(async (id: string) => {
        return await dataSources.bandsAPI.getBand(id);
      });
    },
  },
};
