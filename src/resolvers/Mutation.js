const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

function post(parent, args, context) {
    const userId = getUserId(context);
    return context.prisma.createLink({
        url: args.url,
        description: args.description,
        postedBy: { connect: { id: userId } },
    })
}

function uploadImage(parent, args, context) {
    const userId = getUserId(context);
    return context.prisma.createImage({
        name: args.name,
        description: args.description,
        origin: args.origin,
        url: args.url,
        urls: args.urls,
        uploadedBy: { connect: { id: userId } },
    })
}

async function signup(parent, args, context) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await context.prisma.createUser({ ...args, password })

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
        token,
        user,
    }
}

async function login(parent, args, context) {
    const user = await context.prisma.user({ email: args.email })
    if (!user) {
        throw new Error('No such user found')
    }

    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
        throw new Error('Invalid password')
    }

    return {
        token: jwt.sign({ userId: user.id }, APP_SECRET),
        user,
    }
}

async function vote(parent, args, context) {
    const userId = getUserId(context)
    const linkExists = await context.prisma.$exists.vote({
        user: { id: userId },
        link: { id: args.linkId },
    })
    if (linkExists) {
        throw new Error(`Already voted for link: ${args.linkId}`)
    }

    return context.prisma.createVote({
        user: { connect: { id: userId } },
        link: { connect: { id: args.linkId } },
    })
}

async function voteImage(parent, args, context) {
    const userId = getUserId(context)
    const imageExists = await context.prisma.$exists.voteImage({
        user: { id: userId },
        image: { id: args.imageId },
    })
    if (imageExists) {
        throw new Error(`Already voted for image: ${args.imageId}`)
    }

    return context.prisma.createVoteImage({
        user: { connect: { id: userId } },
        image: { connect: { id: args.imageId } },
    })
}

module.exports = {
    post,
    signup,
    login,
    vote,
    voteImage,
    uploadImage,
}
