export const tracksResolver = {
  Query: {
    tracks: async (
      _: null,
      { limit = 0, offset = 0 }: { limit: number; offset: number },
      { dataSources }: any
    ) => {
      const result = await dataSources.tracksAPI.getTracks(limit, offset);
      return result.items;
    },
    track: (_: null, { id }: { id: string }, { dataSources }: any) => {
      return dataSources.tracksAPI.getTrack(id);
    },
  },

  Track: {
    bands: async ({ bandsIds }: any, _: null, { dataSources }: any) => {
      if (!bandsIds.length) return;

      return await bandsIds.map(async (id: string) => {
        return await dataSources.bandsAPI.getBand(id);
      });
    },
    genres: async ({ genresIds }: any, _: null, { dataSources }: any) => {
      if (!genresIds.length) return;

      return await genresIds.map(async (id: string) => {
        return await dataSources.genresAPI.getGenre(id);
      });
    },
    artists: async ({ artistsIds }: any, _: null, { dataSources }: any) => {
      if (!artistsIds.length) return;

      return await artistsIds.map(async (id: string) => {
        return await dataSources.artistsAPI.getArtist(id);
      });
    },
  },

  Mutation: {
    createTrack: async (_: null, { input }: any, { dataSources }: any) => {
      return await dataSources.tracksAPI.createTrack(input);
    },
    deleteTrack: async (
      _: null,
      { id }: { id: string },
      { dataSources }: any
    ) => {
      return await dataSources.tracksAPI.deleteTrack(id);
    },
    updateTrack: async (_: null, { id, input }: any, { dataSources }: any) => {
      return await dataSources.tracksAPI.updateTrack(id, input);
    },
  },
};
