"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  endpoint: `https://us1.prisma.sh/lucas-3856c0/ao-gallery/dev`,
  secret: `mysecret123`
});
exports.prisma = new exports.Prisma();
