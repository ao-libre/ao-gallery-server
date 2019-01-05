function image(parent, args, context) {
    return context.prisma.voteImage({ id: parent.id }).image()
}

function user(parent, args, context) {
    return context.prisma.voteImage({ id: parent.id }).user()
}

module.exports = {
    image,
    user,
}
