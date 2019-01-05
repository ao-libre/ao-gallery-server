function links(parent, args, context) {
    return context.prisma.user({ id: parent.id }).links()
}

function images(parent, args, context) {
    return context.prisma.user({ id: parent.id }).images()
}

module.exports = {
    links,
    images,
}
