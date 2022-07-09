export const tracksResolver = {
  Query: {
    allTracks: (_: null, __: null, { dataSources }: any) => {
      return dataSources.tracksAPI.getAllTracks();
    },
    track: (_: null, { id }: { id: string }, { dataSources }: any) => {
      return dataSources.tracksAPI.getTrack(id);
    },
  },
};
