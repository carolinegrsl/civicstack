/**
 * Module dependencies.
 */

var config = require('config');
var page = require('page');
var user = require('user');
var t = require('t');
var translations = require('translations')

/**
 * Load localization dictionaries to translation application
 */

translations.help(t);

/**
 * Init `t` component with locale as `es`
 */

t.lang(config['locale']);

/**
 * Boot components
 * and pages.
 */

require('header');
require('homepage');
require('application-detail');
require('about');
require('restricted');

/**
 * Boot page.js
 */

page();