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

async function imageList(parent, args, context) {

    const count = await context.prisma
        .imagesConnection({
            where: {
                OR: [
                    { name_contains: args.filter },
                    { description_contains: args.filter },
                    { origin_contains: args.filter },
                ],
            },
            skip: args.skip,
        })
        .aggregate()
        .count();

    const images = await context.prisma.images({
        where: {
            OR: [
                { name_contains: args.filter },
                { description_contains: args.filter },
                { origin_contains: args.filter },
            ],
        },
        skip: args.skip,
        first: args.first,
        orderBy: args.orderBy,
    });

    return {
        count,
        images,
    }
}


async function users(parent, args, context) {

    const users = await context.prisma.users({
        where: {
            OR: [
                { name_contains: args.name },
            ],
        },
        skip: args.skip,
        first: args.first,
        orderBy: args.orderBy,
    });

    return users

}

async function user(parent, args, context) {

    const user = await context.prisma.user({
        id: args.id
    });

    return user
}

async function image(parent, args, context) {
    const image = await context.prisma.image({
        id: args.id
    })

    return image
}


module.exports = {
    feed,
    imageList,
    image,
    users,
    user,
}
