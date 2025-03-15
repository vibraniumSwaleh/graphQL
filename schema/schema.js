import graphql, { GraphQLInt, GraphQLString } from 'graphql';

const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    user: { type: UserType },
    args: { id: { type: GraphQLString } },
    resovle(parentValue, args) {},
  },
});
