export const usersResolver = {
  Query: {
    user: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      return dataSources.usersAPI.getUser(id);
    },

    jwt: async (
      _: null,
      { email, password }: { email: string; password: string },
      { dataSources }: any
    ) => {
      return dataSources.usersAPI.getJwt(email, password);
    },
  },
};
