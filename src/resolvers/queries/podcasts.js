module.exports = async (_, {}, {models}) => {
    return models.Podcast.find();
};


