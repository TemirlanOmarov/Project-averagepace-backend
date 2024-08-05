import { createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';
import { schema } from './schema';

const yoga = createYoga({
  schema: schema
});

const server = createServer(yoga);

server.listen(3000, () => {
  console.log('Visit http://localhost:30n00/graphql');
});