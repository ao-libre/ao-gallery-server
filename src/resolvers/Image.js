function uploadedBy(parent, args, context) {
    return context.prisma.image({ id: parent.id }).uploadedBy()
}

function votes(parent, args, context) {
    return context.prisma.image({ id: parent.id }).votes()
}

module.exports = {
    uploadedBy,
    votes,
}