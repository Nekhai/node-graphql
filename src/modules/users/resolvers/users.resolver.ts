export const usersResolver = {
  Query: {
    user: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      return dataSources.usersAPI.getUser(id);
    },
  },
};
