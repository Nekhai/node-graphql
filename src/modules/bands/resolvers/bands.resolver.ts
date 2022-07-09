export const bandsResolver = {
  Query: {
    bands: async (_: null, __: null, { dataSources }: any) => {
      const result = await dataSources.bandsAPI.getAllBands();
      return result.items;
    },
    band: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      return dataSources.bandsAPI.getBand(id);
    },
  },

  Band: {
    genres: async ({ genresIds }: any, _: null, { dataSources }: any) => {
      return await genresIds.map(async (id: string) => {
        return await dataSources.genresAPI.getGenre(id);
      });
    },
    // members: async ({ members }: any, _: null, { dataSources }: any) => {
    //   return await members.map(async (id: string) => {
    //     return await dataSources.bandsAPI.getMmember(id);
    //   });
    // },
  },
};
