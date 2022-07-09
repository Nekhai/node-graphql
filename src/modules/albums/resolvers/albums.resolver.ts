export const albumsResolver = {
  Query: {
    allAlbums: async (_: null, __: null, { dataSources }: any) => {
      const result = await dataSources.albumsAPI.getAllAlbums();
      return result.items;
    },
    album: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      return dataSources.albumsAPI.getAlbum(id);
    },
  },

  Album: {
    artists: async ({ artistsIds }: any, _: null, { dataSources }: any) => {
      return await artistsIds.map(async (id: string) => {
        return await dataSources.artistsAPI.getArtist(id);
      });
    },
    bands: async ({ bandsIds }: any, _: null, { dataSources }: any) => {
      return await bandsIds.map(async (id: string) => {
        return await dataSources.bandsAPI.getBand(id);
      });
    },
    tracks: async ({ trackIds }: any, _: null, { dataSources }: any) => {
      return await trackIds.map(async (id: string) => {
        return await dataSources.tracksAPI.getTrack(id);
      });
    },
    genres: async ({ genresIds }: any, _: null, { dataSources }: any) => {
      return await genresIds.map(async (id: string) => {
        return await dataSources.genresAPI.getGenre(id);
      });
    },
  },
};
