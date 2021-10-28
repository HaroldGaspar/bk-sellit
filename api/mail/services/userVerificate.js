const { isDraft } = require('strapi-utils').contentTypes;
/**NOTAPPLICATE, DP MADE IN FRNTND */
module.exports = {

  async update(id) {

    const existingEntry = await strapi.query('user').findOne(id);

    const validData = await strapi.entityValidator.validateEntityUpdate(
      strapi.models.users-permissions_user,
      {confirmed: true},
      { isDraft: isDraft(existingEntry, strapi.models.users-permissions_user) }
    );

    const entry = await strapi.query('users-permissions_user').update(id, validData);
    return entry;
  },
};