import express from 'express';
import expressGraphQL from 'express-graphql';

const app = express();
const graphql = expressGraphQL.graphqlHTTP;

app.use(
  '/graphql',
  graphql({
    graphiql: true,
  }),
);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
