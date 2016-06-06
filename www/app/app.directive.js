module.exports = function () {
	return {
		restrict: 'EA',
		templateUrl: 'app/app.html',
		controller: require('./app.controller.js')
	}
}