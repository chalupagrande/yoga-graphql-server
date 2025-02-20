
import dotenv from "dotenv";
import { createYoga, createSchema, YogaInitialContext } from 'graphql-yoga'
import { typeDefs } from '@/graphql/__generated__/typeDefs.generated'
import { resolvers } from '@/graphql/__generated__/resolvers.generated'
import { PrismaClient } from "@prisma/client";
import { createServer } from "node:http";
import { prisma } "@/prisma/client"

dotenv.config();

const port = process.env.PORT || 3000;

const graphqlSchema = createSchema({ typeDefs, resolvers })
interface GraphQLContext extends YogaInitialContext {
  prisma: PrismaClient;
}

const yoga = createYoga<GraphQLContext>({
  schema: graphqlSchema,
  context: function ({ request }) {
    return {
      request,
      prisma
    }
  }
});

const server = createServer(yoga)

server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});