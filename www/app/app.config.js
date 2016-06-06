module.exports = function ($stateProvider, $urlRouterProvider, $compileProvider) {

	// Router
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
				url: '/',
				template: ':D'
			})
		
}