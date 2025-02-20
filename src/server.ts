import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import { createYoga, createSchema, YogaInitialContext } from 'graphql-yoga'
import { typeDefs } from '@/graphql/__generated__/typeDefs.generated'
import { resolvers } from '@/graphql/__generated__/resolvers.generated'
import { prisma } from "@/prisma/client";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript + graphql");
});

const graphqlSchema = createSchema({ typeDefs, resolvers })
const yogaRouter = express.Router()
interface GraphQLContext extends YogaInitialContext {
  prisma: PrismaClient;
}

// Investigate Content Security Policy
yogaRouter.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        'style-src': ["'self'", 'unpkg.com'],
        'script-src': ["'self'", 'unpkg.com', "'unsafe-inline'"],
        'img-src': ["'self'", 'raw.githubusercontent.com']
      }
    }
  })
)
const yoga = createYoga<GraphQLContext>({
  schema: graphqlSchema,
  context: { prisma }
});

yogaRouter.use(yoga.graphqlEndpoint, yoga)
app.use(yogaRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});