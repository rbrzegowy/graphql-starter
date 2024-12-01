import { createSchema, createYoga } from 'graphql-yoga'
import { createServer } from 'http'
import { resolvers } from '../resolvers/resolver'
import { gqlSchema } from '../gql-schema/schema'

function main() {
  const schema = createSchema({
    typeDefs: [gqlSchema],
    resolvers: [resolvers],
  })
  const yoga = createYoga({ schema })
  const server = createServer(yoga)
  server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
  })
}

main()