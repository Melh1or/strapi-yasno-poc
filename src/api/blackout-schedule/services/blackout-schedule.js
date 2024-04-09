'use strict';

/**
 * blackout-schedule service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blackout-schedule.blackout-schedule');
