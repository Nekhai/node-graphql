export const tracksResolver = {
  Query: {
    tracks: (_: null, __: null, { dataSources }: any) => {
      return dataSources.tracksAPI.getTracks();
    },
    track: (_: null, { id }: { id: string }, { dataSources }: any) => {
      return dataSources.tracksAPI.getTrack(id);
    },
  },
};
