const {ApolloError} = require("apollo-server");

module.exports = async (_, {input}, {models}) => {

    let newPodcast;
    try {
        newPodcast = await models.Podcast.create(input);
        return newPodcast
    } catch (e) {
        throw new ApolloError(e)
    }

};
