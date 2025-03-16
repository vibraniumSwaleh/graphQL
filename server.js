import express from 'express';
import expressGraphQL from 'express-graphql';
import schema from './schema/schema.js';

const app = express();
const graphql = expressGraphQL.graphqlHTTP;

app.use(
  '/graphql',
  graphql({
    schema,
    graphiql: true,
  }),
);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
