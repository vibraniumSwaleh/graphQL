import graphql from 'graphql';
import axios from 'axios';

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: {
    id: { yupe: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },

      async resolve(parentValue, args) {
        const { data, error } = await axios.get(
          `http://localhost:4000/users/${args.id}`,
        );
        return data;
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
