'use strict';

/**
 * newsfeed service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newsfeed.newsfeed');
