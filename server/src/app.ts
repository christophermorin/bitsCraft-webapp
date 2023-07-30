import Fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";
import { buildGameContext } from "./createGame/buildGameContext";

export function buildApp(opts = {}) {
  const app = Fastify(opts);
  const context = buildGameContext();

  const test: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          context: {
           board: "array"
          }
        }
      }
    }
  }
}

  app.get("/", test, async function (request, reply) {
    return { context };
  });

  return app;
}
