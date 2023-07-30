import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'
import { buildApp } from './app'

const server: FastifyInstance = buildApp({
  logger: true
})

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})