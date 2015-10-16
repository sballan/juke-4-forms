app.controller('PlaylistCtrl', function($scope, PlaylistFactory) {

	$scope.printInput = function() {
		if($scope.playlistForm.$invalid) {
			console.error("You inputted the wrong thing fool!")
			return false;
		}
		var defaultForm = {playlistInput: ""}

		PlaylistFactory.create($scope.playlist)
		$scope.playlistForm.$setPristine();

		$scope.playlist = angular.copy(defaultForm)

	}
})