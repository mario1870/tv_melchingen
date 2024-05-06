'use strict';

/**
 * newsfeed router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::newsfeed.newsfeed');
