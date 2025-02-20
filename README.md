# Yoga Graphql Server

## Replication
### Issue 1 - Unable to create type safe GraphQL Context

```
$ npm run prisma:generate
$ npm run codegen:generate

```
1. inspect `src/server.ts`
2. see typescript error when trying to pass `yoga` to express router
3. see error on `schema` argument for `createYoga`

### Resources: 
- https://blog.logrocket.com/how-to-set-up-node-typescript-express/
- https://the-guild.dev/blog/graphql-code-generator-and-prisma
- https://the-guild.dev/graphql/yoga-server/docs/integrations/integration-with-express
- https://the-guild.dev/graphql/codegen/docs/guides/graphql-server-apollo-yoga-with-server-preset