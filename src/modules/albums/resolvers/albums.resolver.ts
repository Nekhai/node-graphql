export const albumsResolver = {
  Query: {
    albums: async (
      _: null,
      { limit = 0, offset = 0 }: { limit: number; offset: number },
      { dataSources }: any
    ) => {
      const result = await dataSources.albumsAPI.getAlbums(limit, offset);
      return result.items;
    },
    album: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      return dataSources.albumsAPI.getAlbum(id);
    },
  },

  Album: {
    artists: async ({ artistsIds }: any, _: null, { dataSources }: any) => {
      if (!artistsIds) return;

      return await artistsIds.map(async (id: string) => {
        return await dataSources.artistsAPI.getArtist(id);
      });
    },
    bands: async ({ bandsIds }: any, _: null, { dataSources }: any) => {
      if (!bandsIds) return;

      return await bandsIds.map(async (id: string) => {
        return await dataSources.bandsAPI.getBand(id);
      });
    },
    tracks: async ({ trackIds }: any, _: null, { dataSources }: any) => {
      if (!trackIds.length) return;

      return await trackIds.map(async (id: string) => {
        return await dataSources.tracksAPI.getTrack(id);
      });
    },
    genres: async ({ genresIds }: any, _: null, { dataSources }: any) => {
      if (!genresIds.length) return;

      return await genresIds.map(async (id: string) => {
        return await dataSources.genresAPI.getGenre(id);
      });
    },
  },

  Mutation: {
    createAlbum: async (_: null, { input }: any, { dataSources }: any) => {
      return await dataSources.albumsAPI.createAlbum(input);
    },
    deleteAlbum: async (
      _: null,
      { id }: { id: string },
      { dataSources }: any
    ) => {
      return await dataSources.albumsAPI.deleteAlbum(id);
    },
    updateAlbum: async (_: null, { id, input }: any, { dataSources }: any) => {
      return await dataSources.albumsAPI.updateAlbum(id, input);
    },
  },
};
