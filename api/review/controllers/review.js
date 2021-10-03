"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    const reviews = await strapi.services.review.find();
    return reviews;
  },
  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.review.create(data, { files });
      console.log(entity);
    } else {
      entity = await strapi.services.review.create(ctx.request.body);
      console.log(entity);
    }
    return sanitizeEntity(entity, { model: strapi.models.review });
  },
};
