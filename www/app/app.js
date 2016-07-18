
// Load Libs
	var libs = require('./app.libs.js');

// Init app
	var app = angular.module('app', ['ui.router', 'ionic', 'ngCordova']);

// App Config
	app.config(require('./app.config.js'));

// App ready
	app.run(require('./app.run.js'));

// App Container
	app.directive('appContainer', require('./app.directive.js'));
