var GenieServices = angular.module('Genie', []);

var g = {connected: false};

function AuthorController($scope) {
	$scope.author = "Sanket";
}

function LoginController($scope) {

	/*$scope.genieInit = function() {
		// Initialize Genie
		if (g.connected!=true) {
			genieConnect();
		}
	}*/

	$scope.genieConnect = function () {
		if (g.connected != true) {
			fbLogin();
			if (g.status === 'connected') {
				g.connected = true;
			}
		}
	}

	fbLogin = function () {
		FB.login(function(response) {
			g.authResponse = response.authResponse;
			g.status = response.status;
		}, {scope: 'read_stream,publish_actions,publish_stream'});
	}
}
