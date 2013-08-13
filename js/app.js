var GenieServices = angular.module('Genie', []);

var g = {connected: false};

function AuthorController($scope) {
	$scope.author = "Sanket";
}

function LoginController($scope) {

	$scope.genieConnect = function () {
		if (g.connected != true) {
			fbLogin();
		}
	}

	fbLogin = function () {
		FB.login(function(response) {
			g.auth = response.authResponse;
			g.status = response.status;
			if (g.status === 'connected') {
				g.connected = true;
			}
		}, {scope: 'read_stream,publish_actions,publish_stream'});
	}
}
