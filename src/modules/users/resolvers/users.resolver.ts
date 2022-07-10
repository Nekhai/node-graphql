export const usersResolver = {
  Query: {
    user: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      return dataSources.usersAPI.getUser(id);
    },

    jwt: async (_: null, { input }: any, { dataSources }: any) => {
      const result = await dataSources.usersAPI.getJwt(input);
      return result.jwt;
    },
  },

  Mutation: {
    register: async (_: null, { input }: any, { dataSources }: any) => {
      return await dataSources.usersAPI.register(input);
    },
  },
};
