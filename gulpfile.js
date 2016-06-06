// Imports
	var gulp = require('gulp-param')(require('gulp'), process.argv);
	var shell = require('shelljs');
	var open = require('open');

// Tasks

	// Install tsd definitions
		gulp.task('tsd:install', function(module) {
			if (!module) {
				shell.exec('node_modules/.bin/tsd install');
			} else {
				shell.exec('node_modules/.bin/tsd install '+module+' --save');
			}
		});

	// Serve app
		gulp.task('serve', function () {
			open('http://localhost:8080/www');
			shell.exec('node_modules/.bin/webpack-dev-server --progress --colors --watch --inline --open');
		});

	// Build webpack
		gulp.task('webpack:build', function () {
			return shell.exec('node_modules/.bin/webpack');
		});

	// Ionic commands
		// Add ons
		gulp.task('ionic:add', function (platform, plugin) {
			if (platform) {
				shell.exec('node_modules/.bin/ionic platform add '+platform);
			} else if (plugin) {
				shell.exec('node_modules/.bin/ionic plugin add '+plugin);
			}
		});
		// Run
		gulp.task('ionic:run', function (platform, ant) {
			if (!platform) return;
			gulp.start('webpack:build');
			shell.exec('node_modules/.bin/ionic run '+platform+(ant?' -- --ant':''));
		});
		// Builds
		gulp.task('ionic:build', function (platform, ant) {
			if (!platform) return;
			gulp.start('webpack:build');
			shell.exec('node_modules/.bin/ionic build '+platform+(ant?' -- --ant':''));
		});
