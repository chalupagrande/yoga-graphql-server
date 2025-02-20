# Yoga Graphql Server

## Replication
### Issue 1 - Unable to create type safe GraphQL Context
0. checkout branch `issue1`
<<<<<<< HEAD
1. ```
  $ npm run prisma:generate
  $ npm run codegen:generate

  ```
=======
1. Generate code
```
$ npm run prisma:generate
$ npm run codegen:generate
```
>>>>>>> issue1
2. inspect `src/server.ts`
3. see typescript error when trying to pass `yoga` to express router
4. see error on `schema` argument for `createYoga`

### Issue 2 - Mapper name mismatch not generating matches
This is more of a documentation issue: 

1. Switch to branch `issue2`
<<<<<<< HEAD
2. ```
  $ npm run prisma:generate
  $ npm run codegen:generate
  ```
=======
2. Generate code
```
$ npm run prisma:generate
$ npm run codegen:generate
```
>>>>>>> issue1
3. notice `PostMapper` is not imported into types.generated.ts (because of the mapper.ts/schema.graphql naming mismatch)

### Resources: 
- https://blog.logrocket.com/how-to-set-up-node-typescript-express/
- https://the-guild.dev/blog/graphql-code-generator-and-prisma
- https://the-guild.dev/graphql/yoga-server/docs/integrations/integration-with-express
- https://the-guild.dev/graphql/codegen/docs/guides/graphql-server-apollo-yoga-with-server-preset