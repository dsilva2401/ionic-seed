module.exports = function ($cordovaStatusbar, $ionicPlatform, $timeout) {

	$ionicPlatform.ready(function() {
		$cordovaStatusbar.show();
	});

}