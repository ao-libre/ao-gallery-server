async function feed(parent, args, context) {

  const count = await context.prisma
    .linksConnection({
      where: {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter },
        ],
      },
      skip: args.skip,
    })
    .aggregate()
    .count();

  const links = await context.prisma.links({
    where: {
      OR: [
        { description_contains: args.filter },
        { url_contains: args.filter },
      ],
    },
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  });

  return {
    count,
    links,
  }
}

async function feed2(parent, args, context) {

  const count = await context.prisma
      .linksConnection({
        where: {
          OR: [
            { description_contains: args.filter },
            { url_contains: args.filter },
          ],
        },
        skip: args.skip,
      })
      .aggregate()
      .count();

  const links = await context.prisma.links({
    where: {
      OR: [
        { description_contains: args.filter },
        { url_contains: args.filter },
      ],
    },
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  });

  return {
    count,
    links,
  }
}


async function users(parent, args, context) {

  const users = await context.prisma.users({
    where: {
      OR: [
        { name_contains: args.filter },
      ],
    },
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  });

  return {
    users,
  }

}

async function user(parent, args, context) {


  const user = await context.prisma.user({
    id: args.id
  })

  return user
}


module.exports = {
  feed,
  feed2,
  users,
  user,
}
