import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/teste", (resquest: FastifyRequest, reply: FastifyReply) => {
    console.log("ROTA CHAMADA!!!");

    reply.send({ ok: true });
  });
}
