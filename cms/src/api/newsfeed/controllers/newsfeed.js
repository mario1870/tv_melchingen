'use strict';

/**
 * newsfeed controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::newsfeed.newsfeed');
