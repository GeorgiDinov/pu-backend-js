const {ApolloError} = require("apollo-server");

module.exports = async (_, {id, input}, {models}) => {

    try {
        const podcastToUpdate = await models.Podcast.findOne({_id: id});

        if (!podcastToUpdate) throw new ApolloError(`Could not find podcast with id: '${id}'.`, 400);

        Object.keys(input).forEach(value => {
            podcastToUpdate[value] = input[value];
        });

      return await podcastToUpdate.save()
    } catch (e) {
        throw new ApolloError(e)
    }
};
  